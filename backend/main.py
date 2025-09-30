from typing import Annotated
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, File, HTTPException, UploadFile
from scapy.all import rdpcap
from scapy.layers.inet import IP, TCP, UDP, ICMP
from scapy.layers.l2 import ARP
import uuid,os,datetime
from dotenv import load_dotenv
from fastapi.staticfiles import StaticFiles
from fastapi import Body
# import magic
import filetype
load_dotenv()
from groq import Groq
timestamp = datetime.datetime.now().isoformat()
app = FastAPI()
if os.path.isdir("static"):
    app.mount("/", StaticFiles(directory="static", html=True), name="static")



app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["POST","OPTIONS"],
    allow_headers=["Content-Type"],
)
@app.get("/")
async def root():
    return {"message": "NetNerve backend is live!"}
def extract_packet_data(file_path):
    packets = rdpcap(file_path)
    data = []

    for pkt in packets:
        pkt_info = {}

        if IP in pkt:
            pkt_info["src_ip"] = pkt[IP].src
            pkt_info["dst_ip"] = pkt[IP].dst
            pkt_info["packet_len"] = len(pkt)
            pkt_info["timestamp"] = pkt.time

            if TCP in pkt:
                pkt_info["protocol"] = "TCP"
                pkt_info["src_port"] = pkt[TCP].sport
                pkt_info["dst_port"] = pkt[TCP].dport
                pkt_info["flags"] = str(pkt[TCP].flags)

            elif UDP in pkt:
                pkt_info["protocol"] = "UDP"
                pkt_info["src_port"] = pkt[UDP].sport
                pkt_info["dst_port"] = pkt[UDP].dport

            elif ICMP in pkt:
                pkt_info["protocol"] = "ICMP"

        elif ARP in pkt:
            pkt_info["protocol"] = "ARP"

        if pkt_info:
            data.append(pkt_info)

    return data

# @app.post("/files/")
# async def create_file(file: Annotated[bytes, File()]):
#     return {"file_size": len(file)}


@app.post("/uploadfile/")
async def create_upload_file(file: UploadFile):
    MAX_FILE_SIZE_MB = 2
    valid_extensions = [".pcap", ".cap"]
    if not (file.filename and file.filename.lower().endswith(tuple(valid_extensions))):
        raise HTTPException(status_code=400, detail="Invalid file extension.")
    file_head = await file.read(2048)
    file_path = f"{uuid.uuid4()}.pcap"
    # kind = filetype.guess(file_path)
    # print(f"File type detected: {kind}")
    content = file_head + await file.read()
    if(len(content) > MAX_FILE_SIZE_MB * 1024 * 1024):
        raise HTTPException(status_code=400, detail="File size exceeds the limit of 5MB.")
    with open(file_path, "wb") as f:
        f.write(content)
    packets = None
    try:
        packets = rdpcap(file_path)
        protocols = set()
        for packet in packets:
            layer = packet
            while layer:
                protocols.add(layer.__class__.__name__)
                layer = layer.payload  # move to next inner layer
        packet_data = extract_packet_data(file_path)
        total_data_size = sum(pkt.get('packet_len', 0) for pkt in packet_data)
        result = {
            "protocols": list(protocols),
            "packet_data": packet_data,
            "total_data_size": total_data_size
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Invalid or corrupted pcap file: {e}")
    finally:
        os.remove(file_path)  # Clean up the temporary file after processing
    return result
client = Groq(api_key=os.environ.get("GROQ_API_KEY"))


system_prompt = os.environ.get("SYSTEM_PROMPT") or "You are a cybersecurity expert."
def build_summary_prompt(protocols, packet_data, total_data_size):
    lines = []
    lines.append(f"Protocols used: {', '.join(protocols)}.")
    lines.append(f"Total packets captured: {len(packet_data)}.")
    lines.append(f"Total data transferred: {total_data_size} bytes.")

    if packet_data:
        sample = packet_data[:5]  # First 5 packets
        for i, pkt in enumerate(sample, 1):
            lines.append(
                f"Sample {i}: {pkt.get('src_ip')}:{pkt.get('src_port')} → "
                f"{pkt.get('dst_ip')}:{pkt.get('dst_port')} | {pkt.get('protocol')} "
                f"| Size: {pkt.get('packet_len')} bytes | Flags: {pkt.get('flags')}."
            )

    lines.append("Based on this, analyze the data for potential threats, patterns, or observations.")
    return "\n".join(lines)


async def generate_ai_summary(protocols, packet_data, total_data_size):
    user_prompt = build_summary_prompt(protocols, packet_data, total_data_size)

    chat = client.chat.completions.create(
        model="llama-3.3-70b-versatile", #other are "llama-3.3-70b-instruct", "llama-3.3-70b-chat"
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_prompt}
        ]
    )

    summary_text=chat.choices[0].message.content
    return{summary_text}

@app.post("/generate-summary/")
async def generate_summary(
    protocols: list[str] = Body(...),
    packet_data: list[dict] = Body(...),
    total_data_size: int = Body(...)
):
    try:
        summary =await generate_ai_summary(protocols, packet_data, total_data_size)
        return {"summary": summary}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"AI Summary failed")
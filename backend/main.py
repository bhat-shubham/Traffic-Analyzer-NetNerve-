from typing import Annotated
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, File, HTTPException, UploadFile
from scapy.all import rdpcap
from scapy.layers.inet import IP, TCP, UDP, ICMP
from scapy.layers.l2 import ARP
import uuid,os
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000","https://netnerve.onrender.com","https://netnerve.vercel.app"],
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
    MAX_FILE_SIZE_MB = 5
    valid_extensions = [".pcap", ".cap"]

    if not (file.filename and file.filename.lower().endswith(tuple(valid_extensions))):
        raise HTTPException(status_code=400, detail="Invalid file extension.")
    file_path= f"{uuid.uuid4()}.pcap"
    content = await file.read();
    if(len(content) > MAX_FILE_SIZE_MB * 1024 * 1024):
        raise HTTPException(status_code=400, detail="File size exceeds the limit of 5MB.")
    with open(file_path, "wb") as f:
        f.write(content)
    try:
        packets=rdpcap(file_path)
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Invalid or corrupted pcap file: {e}")
    protocols=set()
    for packet in packets:
        layer = packet
        while layer:
            protocols.add(layer.__class__.__name__)
            layer = layer.payload  # move to next inner layer
    packet_data = extract_packet_data(file_path)
    os.remove(file_path)  # Clean up the temporary file after processing
    return {
        "protocols": list(protocols),
        "packet_data": packet_data,
    }
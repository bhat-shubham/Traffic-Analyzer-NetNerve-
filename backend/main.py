from typing import Annotated
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, File, UploadFile
from scapy.all import rdpcap  # Importing rdpcap from scapy to read pcap files
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/files/")
async def create_file(file: Annotated[bytes, File()]):
    return {"file_size": len(file)}


@app.post("/uploadfile/")
async def create_upload_file(file: UploadFile):
    content = await file.read();
    with open("temp.cap", "wb") as f:
        f.write(content)


    a=rdpcap("temp.cap")
    protocols=set()
    for packet in a:
        layer = packet
        while layer:
            protocols.add(layer.__class__.__name__)
            layer = layer.payload  # move to next inner layer

    return {"protocols": list(protocols)}

        # protocols.add(packet.name)
        
        # if packet.haslayer("IP"):
        #     print(f"Source IP: {packet["IP"].src}, Destination IP: {packet["IP"].dst}")
    return{"protocols": list(protocols)}
    # content = await file.read();
    # content = pyshark.FileCapture(UploadFile)
    # content = await file.read()
    # with open("temp.cap", "wb") as f:
    #     f.write(content)
    # with pyshark.FileCapture("temp.cap") as cap:
    #     print("dd")
    return{"ok"}

    
    # protocols = set()
    # cap.close()
    # for packet in cap:
    #     cap[0]
        # protocols.add(packet.highest_layer)
    

        
    # cap = pyshark.FileCapture("temp.cap")
    # return{cap[0]}
# async def get_info(file: UploadFile):
#     content = await file.read()
#     with open("temp.cap", "wb") as f:
#         f.write(content)
    
#     cap = pyshark.FileCapture("temp.cap")
#     protocols = set()
#     contentstr=""
#     for packet in cap:
#         protocols.add(packet.highest_layer)
#         contentstr += str(packet.highest_layer) + "\n"
#         cap.close()
#     print ("cgc",contentstr)
    
#     # return {"protocols": list(protocols)}
#     print("Protocols found:", protocols)
    
#     # return {"protocols": list(protocols)}
            
# return(content);



# from fastapi import FastAPI, UploadFile, File
# from fastapi.middleware.cors import CORSMiddleware
# import pyshark

# app=FastAPI()

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:3000"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )
# @app.post("/upload/")
# async def upload_file(file:UploadFile= File(...)):
#     content= await file.read()
#     with open("temp.cap","wb") as f:
#         f.write(content)
#     cap= pyshark.FileCapture("temp.cap")
#     protocols=set()
#     for packet in cap:
#         protocols.add(packet.highest_layer)
#     return {"protocols": list(protocols)}
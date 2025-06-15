from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import pyshark

app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.post("/upload/")
async def upload_file(file:UploadFile= File(...)):
    content= await file.read()
    with open("temp.cap","wb") as f:
        f.write(content)
    cap= pyshark.FileCapture("temp.cap")
    protocols=set()
    for packet in cap:
        protocols.add(packet.highest_layer)
    return {"protocols": list(protocols)}
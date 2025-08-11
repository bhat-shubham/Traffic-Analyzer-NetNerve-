// import React, { useState } from "react";
import { FaFileAlt , FaFolderOpen , FaGetPocket   } from "react-icons/fa";
import {motion} from "framer-motion";
import { FaAnglesDown } from "react-icons/fa6";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
import MarkdownPreview from '@uiw/react-markdown-preview';

type Packet = {
  timestamp: string;
  src_ip: string;
  src_port: number;
  dst_ip: string;
  dst_port: number;
  protocol: string;
  packet_len: number;
  flags: string;
};

type ResultPageProps = {
  file: File | null;
  protocols: string[];
  packetData: Packet[];
  summary: string;
  // uploadData: unknown;
  totalDataSize : number[];


  
};
const ResultPage = ({file , protocols , packetData, totalDataSize , summary,}: ResultPageProps) => {
    const fileName = file?.name ?? "No file uploaded yet";
    const fileSize = file ? `${(file.size / 1024).toFixed(2)} KB` : "N/A";

const timestamps = packetData
  .map(pkt => pkt.timestamp)
  .filter(Boolean) // remove undefined/null
  .map(ts => new Date(Number(ts) * 1000)); // convert to Date

const startTime = Math.min(...timestamps.map(ts => ts.getTime())); 
const endTime = Math.max(...timestamps.map(ts => ts.getTime())); 
// const { start, end } = getTimeRange(); 
    // const fileType = file?.type ?? "Unknown";
  return (
    <motion.div
      className="font-[Poppins] md:px-10 px-3 md:py-10 py-5 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >

      <motion.div
        className="absolute inset-0 z-0"
      style={{
        background:
        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%), #000000",
        // maskImage:
        // "radial-gradient(1920px 100% at 50% 100%, rgba(10, 10, 10, 0.8) 0%, rgba(0,0,0,0.4) 97%, transparent 100%)"
      }}
      />
      <div className="w-full h-full bg-[#1a1d29]">
  <div
    className="absolute inset-0 bg-gradient-to-br from-green-500/25 via-blue-500/15 to-purple-500/25"
  />
  <div
    className="absolute inset-0 bg-[radial-gradient(ellipse_100%_150%_at_50%_30%,rgba(34,197,94,0.1),transparent_60%)]"
  />
  <div
    className="absolute inset-0 bg-[radial-gradient(ellipse_150%_100%_at_80%_80%,rgba(59,130,246,0.25),transparent_60%)]"
  />
</div>
      
      <div className="relative z-10 flex justify-center items-start">
        <h1 className="md:text-5xl text-4xl text-center py-5  font-bold text-green-400">
          Sniffed, Scanned, and Summarized <span>🤖</span>
        </h1>
      </div>

      <div className="p-6 h-[80vh] rounded-2xl backdrop-blur-xl shadow-[0_0_55px_rgba(59,130,246,0.6)] border-2 border-blue-400 overflow-y-auto">
      {/* <h1 className=" text-teal-500 text-3xl font-extrabold mb-4">Sniffed, Scanned, and Summarized 🤖</h1> */}
    <motion.p
     className="text-white/90 text-base leading-relaxed"
     initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1,delay:1, ease: "easeInOut" }}
    >
      
      <MarkdownPreview 
      source={summary}
      style={{
      backgroundColor: "transparent",
      font:"bold",
      // color: "#fff", // or "inherit"
      // padding: "1rem",
      // height:80
      fontFamily:"Poppins",
      fontWeight:900
  }}
      />
  </motion.p>
</div>
      <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl shadow-xl border border-white/20 p-6 rounded-2xl text-xl font-bold space-y-4 mt-10">
        <p>
          <FaFileAlt className="inline-block mr-2 text-xl" />
          Uploaded File : | {fileName} |
          </p>
        <p>
          <FaFolderOpen className="inline-block mr-2 text-xl" />
          File Size : | {fileSize} |
          </p>
        <p>
          <FaGetPocket className="inline-block mr-2 text-xl" />
          Current Status :  | Processed |
          </p>
</div>

<div className="py-10 grid grid-cols-1 h-1/3 md:grid-cols-2 gap-6">

  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20">
    <h2 className="text-white text-xl font-semibold mb-2">Total Packets Processed :</h2>
    <p className="bg-white/10 text-white px-2 text-center font-bold py-5 rounded-xl text-xl shadow border border-white/20">
    {packetData.length}
    {/* {packetData.map((packet, index) => (
  <div key={index} className="p-4 mb-4 bg-white/10 text-white rounded-lg">
    <p><strong>Timestamp:</strong> {packet.timestamp}</p>
    <p><strong>Source:</strong> {packet.src_ip}:{packet.src_port}</p>
    <p><strong>Destination:</strong> {packet.dst_ip}:{packet.dst_port}</p>
    <p><strong>Protocol:</strong> {packet.protocol}</p>
    <p><strong>Packet Length:</strong> {packet.packet_len}</p>
    <p><strong>Flags:</strong> {packet.flags}</p>
  </div>
))} */}
</p>
  </div>


<div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
  <h2 className="text-white text-xl font-semibold mb-2">Unique Protocols Used :</h2>
  
  <div className="flex flex-wrap gap-3">
    {protocols.map((proto, index) => (
      <span 
        key={index} 
        className="bg-white/10 text-white px-3 py-1 rounded-full text-sm shadow border border-white/20"
      >
        {proto}
      </span>
    ))}
  </div>
</div>



  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
    <h2 className="text-white text-xl font-semibold mb-2">Time Range :</h2>
      <div className="gap-5 flex flex-col justify-center items-center">
    <span className="text-center bg-white/10 text-white px-3 py-1 rounded-xl text-sm shadow border border-white/20">
      {new Date(startTime).toLocaleString('en-IN', {
      hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true,
      day: '2-digit', month: 'short', year: 'numeric',
    })}
    </span>
    <p className="text-center font-bold">
      <FaAnglesDown size={20} />
    </p>
        <span className="text-center bg-white/10 text-white px-3 py-1 rounded-xl text-sm shadow border border-white/20">
      {new Date(endTime).toLocaleString('en-IN', {
      hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true,
      day: '2-digit', month: 'short', year: 'numeric',
    })}
    </span>
    </div>
  </div>


  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
    <h2 className="text-white text-xl font-semibold mb-2">Total Data Size :</h2>
    <p className="bg-white/10 text-white py-5 mt-7 text-center font-bold rounded-xl text-xl shadow border border-white/20">
    {(() => {
      const total = Array.isArray(totalDataSize) ? totalDataSize.reduce((acc, val) => acc + val, 0) : totalDataSize;
      return total > 1024 * 1024
        ? `${(total / (1024 * 1024)).toFixed(2)} MB`
        : `${(total / 1024).toFixed(2)} KB`;
    })()}
      {(() => {
    const total = Array.isArray(totalDataSize) ? totalDataSize.reduce((acc, val) => acc + val, 0) : totalDataSize;
    // Extract numeric value from fileSize string (e.g., "123.45 KB")
    const fileSizeNum = typeof fileSize === "string" ? parseFloat(fileSize) : 0;
    const percent = fileSizeNum > 0 ? ((total / (fileSizeNum * 1024)) * 100).toFixed(1) : "0";
    return `(~${percent}% of file size)`;
  })()}
  </p>
  </div>
</div>

    </motion.div>
  );
};

export default ResultPage;

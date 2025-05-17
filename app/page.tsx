"use client";
import { Poppins } from 'next/font/google'
// import {Image} from 'next/image'
// import React, { useState } from "react";
import { FileUpload } from "../components/ui/file-upload";
// Update the import path below to the correct location of your FileUpload component
// import { FileUpload } from "@/components/ui/file-upload";
export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#1B3A31] to-[#253E36]
font-[Poppins] font-extrabold">
      <div className="navbar bg-opacity-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Packet Analyzer</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-15 gap-10">
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Feedback</a></li>
    </ul>
  </div>
</div>
<div className="h-screen flex justify-between mx-10 items-center">
  <div className="h-1/2 w-1/2 rounded-md flex flex-col ">
  <h1 className="text-7xl bg-gradient-to-r from-[#A1FFCE] to-[#AFAFD1] bg-clip-text text-transparent">AI Powered Packet Analyzer</h1>
  <p className='mt-5 text-lg' >Our cutting-edge platform leverages artificial intelligence to simplify and enhance the analysis of PCAP and CAP files. Instantly upload your packet captures and let our intelligent engine detect anomalies, suspicious patterns, and potential threats—no manual inspection needed. Designed for security professionals, researchers, and students, our tool provides actionable insights with speed, accuracy, and ease. Stay ahead of cyber threats with real-time analysis, visualizations, and recommendations powered by AI.</p>
  </div>
  <div className="w-1/ rounded-md ">
  <div className="bg-transparent flex flex-col justify-between w-full max-w-4xl  border-dashed border-neutral-200 dark:border-neutral-800 rounded-lg">
      <FileUpload />
      <button className="mt-2 btn btn-dash text-xl">Analyse My Packet</button>

      {/* </FileUpload> */}
    </div>
  </div>
</div>
{/* background-image: linear-gradient(to right, var(--tw-gradient-stops)); */}
    </div>
  );
}

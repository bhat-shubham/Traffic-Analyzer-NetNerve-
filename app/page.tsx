// import { Poppins } from 'next/font/google'
// import {Image} from 'next/image'
// import React, { useState } from "react";
// Update the import path below if your FileUpload component is located elsewhere
"use client";
import { FileUpload } from "../components/ui/file-upload";
// Update the import path below to the correct location of your FileUpload component
// import { FileUpload } from "@/components/ui/file-upload";
export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#093637] via-[#11A08D] to-[#093637] font-[Poppins] font-extrabold">
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
<div className="h-screen flex justify-around items-center">
  <div className="h-1/2 w-1/3 border rounded-md flex flex-col justify-center items-center ">
  <h1 className="text-5xl text-center bg-gradient-to-r from-[#A1FFCE] to-[#AFAFD1] bg-clip-text text-transparent">AI Powered Packet Analyzer</h1>
  <li>Analyzes Your packets and detect any suspicious activity</li>
  <li>Detects any malicious packets</li>
  <li>Detects any suspicious activity</li>
  </div>
  <div className="w-1/ border rounded-md">
  <div className="w-full max-w-4xl border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
      <FileUpload />

      {/* </FileUpload> */}
    </div>
  </div>
</div>
{/* background-image: linear-gradient(to right, var(--tw-gradient-stops)); */}
    </div>
  );
}

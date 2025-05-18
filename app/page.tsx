"use client";
import { motion } from "framer-motion";
import { FileUpload } from "../components/ui/file-upload";
import { WobbleCard } from "../components/ui/wobble-card";
import { useRef } from "react";
import { FaUpload, FaBrain, FaChartBar } from "react-icons/fa";
const steps = [
  {
    icon: <FaUpload className="text-white text-4xl mb-4" />,
    title: "Upload",
    desc: "Upload your packet capture (.pcap/.cap) file securely to begin the analysis."
  },
  {
    icon: <FaBrain className="text-white text-4xl mb-4" />,
    title: "Analyze",
    desc: "Our AI engine inspects the file, detects anomalies, and identifies threats."
  },
  {
    icon: <FaChartBar className="text-white text-4xl mb-4" />,
    title: "Visualize",
    desc: "See insights, suspicious flows, and a summary report in real-time."
  }
];
export default function Home() {
  const containerRef = useRef(null);
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
  <p className='mt-5 text-' >Our cutting-edge platform leverages artificial intelligence to simplify and enhance the analysis of PCAP and CAP files. Instantly upload your packet captures and let our intelligent engine detect anomalies, suspicious patterns, and potential threats—no manual inspection needed. Designed for security professionals, researchers, and students, our tool provides actionable insights with speed, accuracy, and ease. Stay ahead of cyber threats with real-time analysis, visualizations, and recommendations powered by AI.</p>
  </div>
  <div className="w-1/ rounded-md ">
  <div className="bg-transparent flex flex-col justify-between w-full max-w-4xl  border-dashed border-neutral-200 dark:border-neutral-800 rounded-lg">
      <FileUpload />
      <button className="mt-2 btn btn-dash text-xl">Analyse My Packet</button>

      {/* </FileUpload> */}
    </div>
  </div>
</div>
<h1 className="bg-gradient-to-r from-[#A1FFCE] to-[#AFAFD1] bg-clip-text text-transparent text-6xl mb-10 text-center">Features</h1>
<div className="p-2 grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            🔍 AI-Powered Packet Analysis
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Upload .pcap or .cap files and let our AI instantly scan for threats, anomalies, and unusual traffic patterns—no manual inspection required.
          </p>
        </div>
        <img
          src="/search.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[10%]  filter -bottom-30 object-contain"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          ⚡ Real-Time Threat Insights
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Get actionable insights in seconds with a dashboard that highlights suspicious behavior, protocol misuse, and potential intrusions.
        </p>
        <img
          src="/bolt1.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="-z-1 absolute -right-15 lg:-right-[40%]  filter -bottom-20 object-contain"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-4xl flex gap-25 overflow-hidden">
          <div>
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            🔒 Privacy-First Architecture
          </h2>
          <p className="mt-4 max-w-[23rem] text-left  text-base/6 text-neutral-200">
            Your data stays yours. All file processing happens securely, ensuring confidentiality and compliance with modern cybersecurity standards.
          </p>
          </div>
          <img
          src="/lock.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[10%]  filter -bottom-30 object-contain"
        />
        </div>
      </WobbleCard>
    </div>
    <h1 className="bg-gradient-to-r from-[#A1FFCE] to-[#AFAFD1] mt-10 bg-clip-text text-transparent text-6xl p-2 text-center">How It Works?
    </h1>
<div className="scrollbar-hide flex align-center items-center justify-center bg-gradient-to-r from-[#1B3A31] to-[#253E36] py-10 px-8">
      <div
        ref={containerRef}
        className="sticky flex h-full w-1/2 flex gap-20 overflow-auto"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="w-[500px] snap-start bg-[#2F4F4F] rounded-2xl scrollbar-hide p-6 flex-shrink-0 shadow-lg"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="h-60 flex flex-col items-center justify-center text-center text-white">
              {step.icon}
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm opacity-80">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
{/* background-image: linear-gradient(to right, var(--tw-gradient-stops)); */}
    </div>
  );
}

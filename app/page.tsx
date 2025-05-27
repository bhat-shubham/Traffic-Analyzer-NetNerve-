"use client";
// import { motion , useTransform, useScroll } from "framer-motion";
import { FileUpload } from "../components/ui/file-upload";
import { WobbleCard } from "../components/ui/wobble-card";
// import { useRef } from "react";
import { FaUpload, FaBrain, FaChartBar } from "react-icons/fa";
import Image from "next/image";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export default function Home() {
const headline = useRef(null);
const feature = useRef(null);
// const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });
// const x = useTransform(scrollYProgress, [0, 1], ["-10%", "100%"]);
useGSAP(() => {
  const split = SplitText.create(headline.current, { type: "chars" });

  gsap.from(split.chars, {
    x: 50,
    autoAlpha: 0, // handles opacity + visibility
    stagger: 0.05,
    duration: 0.5,
    ease: "ealstic.in",
  });
  gsap.from(feature.current, {
    scrollTrigger: feature.current, // start animation when ".box" enters the viewport
    y: 200,
    stagger: 0.05,
    duration:1,
    ease: "back.out(1.7)",
    scrub: 0.5,
});

  return () => {
    split.revert(); // clean up on unmount
  };
});

  return (
    
    <div
      className="bg-gradient-to-r from-[#1B3A31] to-[#253E36]
font-[Poppins] font-extrabold"
    >
      <div className="navbar bg-opacity-100">
        <div className="flex-1">
          <a className="ml-8 text-xl">Packet Analyzer</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-15 gap-10">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Feedback</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-screen flex justify-between mx-10 items-center">
        <div  className="h-1/2 w-1/2 rounded-md flex flex-col ">
          <h1 ref={headline} className="text-7xl bg-gradient-to-r from-[#A1FFCE] to-[#AFAFD1] bg-clip-text">
            AI Powered Packet Analyzer
          </h1>
          <p className="mt-5 text-">
            Our cutting-edge platform leverages artificial intelligence to
            simplify and enhance the analysis of PCAP and CAP files. Instantly
            upload your packet captures and let our intelligent engine detect
            anomalies, suspicious patterns, and potential threats—no manual
            inspection needed. Designed for security professionals, researchers,
            and students, our tool provides actionable insights with speed,
            accuracy, and ease. Stay ahead of cyber threats with real-time
            analysis, visualizations, and recommendations powered by AI.
          </p>
        </div>
        <div className="w-1/ rounded-md ">
          <div className="bg-transparent flex flex-col justify-between w-full max-w-4xl  border-dashed border-neutral-200 dark:border-neutral-800 rounded-lg">
            <FileUpload />
            <button className="mt-2 btn btn-dash text-xl">
              Analyse My Packet
            </button>

            {/* </FileUpload> */}
          </div>
        </div>
      </div>
      <h1 className="bg-gradient-to-r from-[#A1FFCE] to-[#AFAFD1] bg-clip-text text-transparent text-6xl mb-5 text-center">
        Features
      </h1>
      <div ref={feature} className="p-2 grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              🔍 AI-Powered Packet Analysis
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Upload .pcap or .cap files and let our AI instantly scan for
              threats, anomalies, and unusual traffic patterns—no manual
              inspection required.
            </p>
          </div>
          <Image
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
            Get actionable insights in seconds with a dashboard that highlights
            suspicious behavior, protocol misuse, and potential intrusions.
          </p>
          <Image
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
                Your data stays yours. All file processing happens securely,
                ensuring confidentiality and compliance with modern
                cybersecurity standards.
              </p>
            </div>
            <Image
              src="/lock.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[10%] -bottom-30 object-contain"
            />
          </div>
        </WobbleCard>
      </div>
      <div className="sticky top-10 h-[150vh]">
      <h1 className="bg-gradient-to-r from-[#A1FFCE] to-[#AFAFD1] mt-10 bg-clip-text text-transparent text-6xl p-2 text-center">
        How It Works?
      </h1>
      <div className="flex-nowrap h-20vh flex items-center align-center justify-center">
        <div
          className="overflow-y-hidden gap-10 h-[500px] justify-start items-center flex w-2/3">
            {/* icon: <FaUpload className="text-[#fff] text-4xl mb-4" /> */}
            <div className= "text-xl bg-[#2F4F4F] rounded-xl flex-shrink-0 flex-col flex justify-center items-center w-[500px] h-2/3">
            <FaUpload className="text-[#fff] text-3xl" />Upload
            <p className="mt-5 px-10 text-center text-sm" >Upload your packet capture (.pcap/.cap) file securely to begin the analysis.</p>
            </div>
            <div className="text-xl bg-[#2F4F4F] rounded-xl flex-shrink-0 flex-col flex justify-center items-center w-[500px] h-2/3">
            <FaBrain className="text-[#fff] text-3xl" />
              Analyze
              <p className="mt-5 px-10 text-center text-sm" >Our AI engine inspects the file, detects anomalies, and identifies threats.</p></div>
              
            <div className="text-xl bg-[#2F4F4F] rounded-xl flex-shrink-0 flex-col flex justify-center items-center w-[500px] h-2/3">
            <FaChartBar className="text-[#fff] text-3xl" />
            Visualise
            <p className="mt-5 px-10 text-center text-sm" >See insights, suspicious flows, and a summary report in real-time.</p></div>
        </div>
      </div>
      </div>
      <div className="h-[500px] bg-accent">
        shubham
      </div>
      
      {/* background-image: linear-gradient(to right, var(--tw-gradient-stops)); */}
      
    </div>
  );
  
}

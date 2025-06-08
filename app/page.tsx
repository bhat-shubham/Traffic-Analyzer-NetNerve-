"use client";
// import { motion , useTransform, useScroll } from "framer-motion";
import { FileUpload } from "../components/ui/file-upload";
import { WobbleCard } from "../components/ui/wobble-card";
import Image from "next/image";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Horizontalscroll from "../components/ui/horizontalscroll";
import {AnimatedTestimonials,testimonials} from "../components/ui/animated-testimonials";
gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export default function Home() {
const headline = useRef(null);
const feature = useRef(null);
const working = useRef(null);
const para = useRef(null);

useGSAP(() => {
  let parasplit;
  const split = SplitText.create(headline.current, { type: "chars" });
  // paragraph split
  SplitText.create(para.current, { type: "words,lines",
    linesClass: "line",
    autoSplit: true,
    mask: "lines",
    onSplit: (self) => {
      parasplit = gsap.from(self.lines, {
        duration: 0.8,
        yPercent: 100,
        opacity: 0,
        stagger: 0.3,
        ease: "power2.out",
      });
      return parasplit;
    }
     });

  gsap.from(split.chars, {
    x: 50,
    autoAlpha: 0, // handles opacity + visibility
    stagger: 0.05,
    duration: 0.5,
    ease: "ealstic.in",
  });
  gsap.from(feature.current, {
    scrollTrigger: feature.current, // start animation when enters the viewport
    y: 200,
    stagger: 0.05,
    duration:1,
    ease: "back.out(1.7)",
    scrub: 0.5,
});
gsap.from(working.current, {
  scrollTrigger: working.current,
  filter: "blur(20px)",
  opacity: 0,
  duration: 2,
  ease: "power2.out",
});

  return () => {
    split.revert(); // clean up on unmount
  };
});

  return (
    
    <div
      className="bg-gradient-to-r from-[#1B3A31] to-[#253E36]
font-[Poppins] font-extrabold">
  <div className="h-screen flex-col align-middle items-center">
      <div className="py-5 navbar">
        <div className="flex-1">
          <a href="" className="px-8 text-3xl bg-gradient-to-r from-[#A1FFCE] to-[#AFAFD1] bg-clip-text text-transparent">NetNerve</a>
          <p className="px-8 ">Network&apos;s nerve center, AI-powered.</p>
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
      <div className="py-35 px-10 flex justify-between">
        
        <div  className="h-1/2 w-1/2 rounded-md flex flex-col ">
          <h1 ref={headline} className="text-7xl bg-gradient-to-r from-[#A1FFCE] to-[#AFAFD1] bg-clip-text text-green-200">
            AI Powered Packet Analyzer
          </h1>
          <p ref={para} className="mt-5 text-green-200">
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
      <div ref={working} className="h-[50x]">
       <Horizontalscroll />
      </div>
      <div className="h-[98vh] items-center justify-center align-middle">
        <h1 className="bg-gradient-to-r from-[#A1FFCE] to-[#AFAFD1] bg-clip-text text-transparent text-6xl text-center">
          Testimonials
        </h1>
      <AnimatedTestimonials testimonials={testimonials} />
      </div>
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
  <nav className="grid grid-flow-col gap-4">
    <a href="" className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a href="https://github.com/bhat-shubham">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" x="0px" y="0px" width="30" height="30" viewBox="0 0 64 64">
<path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
</svg>
      </a>
      <a href="https://x.com/i_amshubham7777">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
<path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
</svg>
      </a>
      <a href="https://www.linkedin.com/in/bhatsupshubham/" >
        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
</svg>
      </a>
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - Shubham Bhat</p>
  </aside>
</footer>
      
      {/* background-image: linear-gradient(to right, var(--tw-gradient-stops)); */}
      
    </div>
  );
  
}

"use client";
// import { motion , useTransform, useScroll } from "framer-motion";
import { FileUpload } from "../components/ui/file-upload";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {SplitText} from "gsap/SplitText";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import Horizontalscroll from "../components/ui/horizontalscroll";
import Footer from "../components/ui/footer";
import Features from "../components/ui/features";
import {AnimatedTestimonials,testimonials} from "../components/ui/animated-testimonials";
gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger, ScrollSmoother);

export default function Home() {
  const headline = useRef(null);
  const working = useRef(null);
  const para = useRef(null);
  const featureRef = useRef<HTMLDivElement>(null);  // Create the ref here

  useGSAP(() => {
    gsap.set(headline.current, { visibility: "visible" });
    gsap.set(para.current, { visibility: "visible" });
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
      opacity: 0,
      x: 50,
      autoAlpha: 0, // handles opacity + visibility
      stagger: 0.05,
      duration: 0.5,
      ease: "ealstic.in",
    });
    gsap.from(featureRef.current, {
      scrollTrigger: featureRef.current,
      y: 200,
      stagger: 0.05,
      duration: 1,
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
    // const smoother = ScrollSmoother.create({
    //   wrapper: "working",
    //   // content: ".h-screen",
    //   smooth:1,
    //   effects: true,
    //   normalizeScroll: true,
    //   smoothTouch: 0.1,
    // });
    // gsap.to("working", {
    //   xPercent: -100,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: "working",
    //     scroller: smoother.wrapper(), // important!
    //     pin: true,
    //     scrub: 1,
    //     end: "+=1000", // adjust as needed
    //   }
    // });

    return () => {
        split.revert(); // clean up on unmount
      };
  });

  return (
    <div
      className="parent bg-gradient-to-r from-[#1B3A31] to-[#253E36] font-[Poppins] font-extrabold">
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
          <h1 ref={headline} className="invisible text-7xl bg-gradient-to-r from-[#A1FFCE] to-[#AFAFD1] bg-clip-text text-green-200">
            AI Powered Packet Analyzer
          </h1>
          <p ref={para} className="invisible mt-5 text-green-200">
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
        <div className="w-1/3 rounded-md ">
          <div className="">
            <FileUpload />
            <button className="mt-2 btn btn-dash text-xl w-full">
              Analyse My Packet
            </button>

            {/* </FileUpload> */}
          </div>
        </div>
      </div>
      </div>
      <Features featureRef={featureRef} />
      <div ref={working} className="h-[50x]">
       <Horizontalscroll />
      </div>
      <div className="h-[98vh] items-center justify-center align-middle">
        <h1 className="bg-gradient-to-r from-[#A1FFCE] to-[#AFAFD1] bg-clip-text text-transparent text-6xl text-center">
          Testimonials
        </h1>
      <AnimatedTestimonials testimonials={testimonials} />
      </div>
      <Footer />
      
      {/* background-image: linear-gradient(to right, var(--tw-gradient-stops)); */}
      
    </div>
  );
  
}

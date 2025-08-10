"use client";
import { FileUpload } from "../components/ui/file-upload";
import { Suspense, useRef , useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {SplitText} from "gsap/SplitText";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import Horizontalscroll from "../components/ui/horizontalscroll";
import Footer from "../components/ui/footer";
import Features from "../components/ui/features";
import ResultPage from "../components/ui/results";
import Link from "next/link";
import {AnimatedTestimonials,testimonials} from "../components/ui/animated-testimonials";
gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger, ScrollSmoother);

export default function Home() {
  const [file,setFile] = useState<File | null>(null);
  const headline = useRef(null);
  const working = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const para = useRef(null);
  const [isProcessed, setIsProcessed] = useState(false);
  const homeRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const featureRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const testimonialRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const [protocols, setProtocols] = useState<string[]>([]);
  const [totalDataSize, setTotalDataSize] = useState<number[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [packetData, setPacketData] = useState<any[]>([]);
  const [summary, setSummary] = useState<string | null>(null);
  // const [uploadData, setUploadData] = useState<any>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

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
          duration: 0.5,
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
      x: 40,
      autoAlpha: 0, // handles opacity + visibility
      stagger: 0.04,
      duration: 0.4,
      ease: "ealstic.in",
    });
    gsap.from(featureRef.current, {
      scrollTrigger: featureRef.current,
      y: 200,
      stagger: 0.05,
      duration: 1,
      ease: "back.out(1.7)",
    });
    gsap.from(working.current, {
      scrollTrigger: working.current,
      filter: "blur(20px)",
      opacity: 0,
      duration: 2,
      ease: "power2.out",
    });
    gsap.to(".file-upload",{
      opacity: 1,
      duration: 0.5,
      // stagger: 0.05,
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
    <>
    {
      isProcessed ? (
        <ResultPage file={file} protocols={protocols} packetData={packetData} totalDataSize={totalDataSize} summary={summary ?? ""}/>
      ) : (
    <div
      className="parent bg-gradient-to-r from-[#063747] to-[#0a466c] font-[Poppins,Georgia] font-extrabold">
        <div className="bg-black px-8 text-center">Services May Feel Slow Due To Low Backend Specs as This Is Working On Free Tier Of Render.If You Can,<Link href="https://ko-fi.com/netnerve"><span className="text-blue-400 underline">Sponsor The Project!</span></Link></div>
  <div ref={homeRef} className="h-[85vh] relative flex-col align-middle items-center">
    
      <div className="py-5 navbar">
        
        <div className="flex-1">
          
          <Link href="/" className="px-8 text-3xl text-green-400">NetNerve</Link>
          <p className="px-8 ">Network&apos;s nerve center, AI-powered.</p>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-15 gap-10">
            <li>
              <button onClick={() => scrollToSection(homeRef)}>Home</button>
            </li>
            <li>
              <button onClick={() => scrollToSection(featureRef)}>Features</button>
            </li>
            <li>
              <button onClick={() => scrollToSection(working)}>Working</button>
            </li>
            <li>
              <button onClick={() => scrollToSection(testimonialRef)}>Testimonials</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-25 px-10 flex align-middle items-center justify-between">
        
        <div  className="h-1/2 w-1/2 flex flex-col ">
          <h1 ref={headline} className="invisible text-6xl text-green-200">
            Transform Raw <span className="text-green-400">Packet Data</span> into <span className="text-green-400">  Actionable Intelligence</span>
          </h1>
          <p ref={para} className="invisible mt-5 text-lg text-green-200">
            Our AI-driven platform transforms raw network packet captures into clear, actionable <span className="text-green-400">cybersecurity intelligence.</span> By applying advanced machine-learning models, it automatically analyzes traffic flows, extracts key metadata, and highlights anomalies or malicious behaviors <span className="text-green-400">without any manual effort.</span> For Every capture files—cloud-based processing delivers real-time threat alerts and interactive visualizations of network traffic.
            Simply upload a capture and receive <span className="text-green-400"> easy-to-understand insights,</span> reports, and recommendations to help mitigate cyber threats.
          </p>
        </div>
        <div className="w-1/3 rounded-md ">
          <div className="file-upload opacity-0">
            <FileUpload 
            setIsProcessed={setIsProcessed} 
            isProcessed={isProcessed} 
            setFile={setFile} 
            setProtocols={setProtocols} 
            setPacketData={setPacketData}
            setTotalDataSize={setTotalDataSize}
            setSummary={setSummary} 
            // setUploadData={setUploadData}
            />          
          </div>
        </div>
      </div>
      </div>
      <div className="py-10 flex justify-center items-center align-middle">
        <Suspense fallback={<p>Loading Demo...</p>}>
      <video width="1250" height="240" className="rounded-2xl" autoPlay playsInline loop muted>
        <source src="/Demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </Suspense>
      </div>
      <Features featureRef={featureRef} />
      <div ref={working} className="h-[50x]">
       <Horizontalscroll />
      </div>
      <div ref={testimonialRef} className="h-[95vh] items-center justify-center align-middle">
        <h1 className="text-green-400 text-6xl text-center">
          Testimonials
        </h1>
      <AnimatedTestimonials testimonials={testimonials} />
      </div>
      <Footer />
      
      {/* background-image: linear-gradient(to right, var(--tw-gradient-stops)); */}
    </div>
      )}
      </>
  );
  
}

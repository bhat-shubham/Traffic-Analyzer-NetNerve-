import React from "react";
import Image from "next/image";
import { WobbleCard } from "./wobble-card";

interface FeaturesProps {
  featureRef: React.RefObject<HTMLDivElement | null>;
}
const Features = ({ featureRef }: FeaturesProps) => {
  return (
    <section>
      <h1 className="text-green-400 text-6xl mb-5 text-center">
        Features
      </h1>
      <div ref={featureRef} className="p-2 grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-7xl mx-auto w-full">
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
                <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-green-700">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            📝 Natural Language Traffic Summaries
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Get plain-language explanations of unusual activities, key communication patterns, and potential risks, all presented in an easily digestible format.
          </p>
          <Image
            src="/natural_lang.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="-z-1 absolute -right-15 lg:-right-[30%]  filter -bottom-28 object-contain"
          />
        </WobbleCard>
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-900 min-h-[500px] lg:min-h-[300px]"
          className=""
        > 
        <div className="max-w-4xl flex gap-25 overflow-hidden">
            <div>
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                🔒 Privacy-First Architecture
              </h2>
              <p className="mt-4 max-w-[23rem] text-left  text-base/6 text-neutral-200">
                Your Uploaded File Is Never Saved On The Server,Your data stays yours. All file processing happens securely,
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
    </section>
  );
};

export default Features;

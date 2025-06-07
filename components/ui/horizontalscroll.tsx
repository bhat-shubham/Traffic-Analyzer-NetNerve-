import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { ReactNode } from "react";
import { FaUpload, FaBrain, FaChartBar } from "react-icons/fa";
const Example = () => {
  return (
    <div className="bg-neutral-800">
    
      <HorizontalScrollCarousel />
      </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["15%", "-50%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-gradient-to-r from-[#1B3A31] to-[#253E36]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        <motion.div style={{ x }} className="flex gap-115">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    
    <div
      key={card.id}
      className=" rounded-4xl group relative h-[450px] w-[650px] overflow-hidden"
    >   
    
      <div
        style={{       
            backgroundImage: `url('/${card.id}.png')`,   
          backgroundSize: "cover",
        //   backgroundPosition: "center",
        }}
        className="absolute inset-0 bg-[#2F4F4F]"
      >
        
      </div>
      
      
      <div className="absolute inset-0 grid place-content-center">
        
        <div className="text-4xl text-white flex justify-center" >{card.icon} </div>
        <p className="text-center p-8 text-4xl font-black text-white">
          {card.title}
        </p>
        <p className="text-center">{card.description}</p>
        
      </div>
      
    </div>
  );
};

export default Example;

type CardType = {
  description: string;
  title: string;
  id: number;
  icon:ReactNode;
};

const cards: CardType[] = [
  {
    
    title: "Upload",
    description: "Upload your packet capture (.pcap/.cap) file securely to begin the analysis.",
    id: 1,
    icon: <FaUpload />,
  },
  {
    description: "Our AI engine inspects the file, detects anomalies, and identifies threats.",
    title: "Analyze",
    id: 2,
    icon: <FaBrain/>,
  },
  {
    description: "See insights, suspicious flows, and a summary report in real-time.",
    title: "Visualise",
    id: 3,
    icon: <FaChartBar />,
  },

];
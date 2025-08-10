import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ReactNode } from "react";
import { FaUpload, FaBrain, FaChartBar } from "react-icons/fa";
import { LuFileDigit } from "react-icons/lu";

const Example = () => {
  return <HorizontalScrollCarousel />;
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Check if mobile/tablet
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);


  const x = useTransform(scrollYProgress, [0, 1], ["30%", "-70%"]);
  
  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (isMobile) {
    return (
      <section className="relative py-16 px-4 md:px-8">
        <h1 className="py-10 text-green-400 text-4xl md:text-5xl text-center">
          How This Works?
        </h1>
        
        <div className="relative max-w-3xl mx-auto">
          {/* line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 dark:bg-gray-700">
            <motion.div 
              className="h-full w-full bg-green-400 origin-top"
              style={{ 
                scaleY: lineProgress,
              }}
            />
          </div>
          
          <div className="space-y-8 relative z-10">
            {cards.map((card, index) => (
              <div key={card.id} className="relative">
                {/* <div className="absolute left-1/ transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-6 h-6 rounded-full bg-green-400 border-4 border-white dark:border-gray-800 -z-2" /> */}
                <Card card={card} isMobile={true} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop view
  return (
    <section ref={targetRef} className="relative h-[300vh] py-16">
      <h1 className="py-10 text-green-400 text-5xl lg:text-6xl text-center">
        How This Works?
      </h1>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 lg:gap-40 px-8">
          {cards.map((card) => (
            <Card card={card} key={card.id} isMobile={false} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card, isMobile, index = 0 }: { card: CardType; isMobile: boolean; index?: number }) => {
  const animationDelay = index * 0.1;
  
  if (isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
        transition={{ duration: 0.5, delay: animationDelay }}
        className={`mx-8 ${index % 2 === 0 ? 'md:mr-auto md:ml-16' : 'md:ml-auto md:mr-16'} max-w-md`}
      >
        <div className="bg-white flex flex-col items-center dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="text-3xl text-green-400 mb-4">{card.icon}</div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {card.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {card.description}
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group relative h-[400px] w-[300px] md:h-[450px] md:w-[350px] lg:w-[550px] flex-shrink-0"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-sm" />
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent to-black/50" />
      
      <div 
        style={{         
          backgroundImage: `url('/${card.id}.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="absolute inset-0 rounded-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-300"
      />
      
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
        <div className="text-4xl text-white mb-4">{card.icon}</div>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
          {card.title}
        </h3>
        <p className="text-gray-200">
          {card.description}
        </p>
      </div>
    </motion.div>
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
    description: "Extract Meaningful Data Using Python From The File To Feed The AI",
    title: "Extract",
    id: 4,
    icon: <LuFileDigit />,
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
import React from "react";
import {motion} from "framer-motion";
const ResultPage = () => {
  return (
    <motion.div
     className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1B3A31] to-[#253E36]"
       key={"upload"}
       initial={{ opacity: 0}}
       animate={{ opacity: 1}}
       transition={{ duration: 2, ease: "easeInOut" }}
       exit={{ opacity: 0 }}
     >
      <h1 className="text-4xl font-bold text-white mb-4">
        Hello from Result Page
      </h1>
      {/* Add your results/insights display here */}
    </motion.div>
  );
};

export default ResultPage;

// import React, { useState } from "react";
import { FaFileAlt , FaFolderOpen , FaGetPocket   } from "react-icons/fa";
import {motion} from "framer-motion";
type ResultPageProps = {
  file: File | null;
};
const ResultPage = ({file}: ResultPageProps) => {
    const fileName = file?.name ?? "No file uploaded yet";
    const fileSize = file ? `${(file.size / 1024).toFixed(2)} KB` : "N/A";
    // const fileType = file?.type ?? "Unknown";
  return (
    <motion.div
      className="font-[Poppins] px-10 py-10 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >

      <motion.div
        className="absolute inset-0 z-0"
      style={{
        background:
        "radial-gradient(120% 100% at 50% 100%, rgba(0, 255, 164, 0.4), rgba(0, 146, 255, 0.5), rgba(20, 40, 50, 0.5))",
        maskImage:
        "radial-gradient(1920px 100% at 50% 100%, rgba(10, 10, 10, 0.8) 0%, rgba(0,0,0,0.4) 97%, transparent 100%)"
      }}
      />
      
      <div className="relative z-10 flex justify-center items-start">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#A1FFCE] to-[#AFAFD1] bg-clip-text text-transparent">
          Here&apos;s What Our Analysis Found
        </h1>
      </div>
      <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl shadow-xl border border-white/20 p-6 rounded-2xl text-2xl font-bold space-y-4 mt-10">
        <p>
          <FaFileAlt className="inline-block mr-2 text-xl" />
          Uploaded File : | {fileName} |
          </p>
        <p>
          <FaFolderOpen className="inline-block mr-2 text-xl" />
          File Size : | {fileSize} |
          </p>
        <p>
          <FaGetPocket className="inline-block mr-2 text-xl" />
          Current Status :  | Processed |
          </p>
      </div>
      <div className="mt-10 p-6 h-[60vh] rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl shadow-[0_0_25px_rgba(59,130,246,0.6)] border-1 border-blue-400 overflow-y-auto">
      <h1 className="text-[#A1FFCE] text-2xl font-bold mb-4">AI Summary and Findings:</h1>
    <motion.p
     className="text-white/90 text-base leading-relaxed"
     initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1,delay:1, ease: "easeInOut" }}
    >
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio ex impedit soluta, nostrum expedita amet quisquam accusantium, pariatur, quaerat voluptatum fuga harum sed accusamus molestias et numquam aut tenetur! Laborum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, dicta. Incidunt alias sed dicta consectetur porro minima necessitatibus vero reiciendis laudantium quae quod labore nisi veritatis, explicabo quam quidem sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus possimus voluptatem perspiciatis? Inventore rem eveniet nesciunt nostrum dicta harum a similique perferendis commodi iste autem, esse id ratione illo est.Fugit corporis qui omnis cum ullam itaque mollitia voluptate, suscipit eveniet eius neque. At quisquam quos doloremque sint ea qui ratione autem! Pariatur necessitatibus esse vitae saepe id aliquid perspiciatis?Nostrum quia itaque repellendus! Eos itaque beatae delectus commodi esse, amet exercitationem necessitatibus! Est dicta autem ullam natus facilis soluta eveniet tempore, exercitationem aspernatur sunt reiciendis cum ex adipisci velit.Libero, beatae a! Iure commodi quam deleniti provident facere eligendi repellat fugiat, illo voluptatem excepturi aperiam est dolore nemo qui adipisci. Aliquid impedit tempore ducimus optio laboriosam quo aut in.Dolore voluptas accusamus veniam minima mollitia, architecto nulla earum enim aspernatur qui corrupti cumque, beatae soluta accusantium molestiae rem quia inventore dolores cum nihil. Rerum debitis cum pariatur possimus tempore?Nemo explicabo atque blanditiis nesciunt ducimus facere debitis quos! Eligendi, molestiae deleniti illum soluta et debitis consequatur ipsam temporibus nisi expedita esse quaerat cupiditate culpa id. Quam cum necessitatibus corrupti?Sunt dicta harum cumque debitis vel tempore neque aliquam, dolorem doloribus suscipit officia, quos, architecto ut. Quaerat ipsa officia excepturi iusto quisquam totam expedita, vero magnam. Sed minus similique autem.Dolore incidunt, neque, pariatur alias eligendi quod quidem temporibus, rem ex qui et. Dolorem harum distinctio ad, et exercitationem sed itaque sapiente ducimus quos laudantium explicabo amet dolor quisquam suscipit?Recusandae optio soluta reprehenderit quod, accusamus at architecto nobis dolorem consequatur, veritatis ducimus voluptatum dolor temporibus porro mollitia nemo. Aliquam officia dolorum atque nam maxime blanditiis minima provident deserunt ex.Provident ea dolorem delectus cumque consequatur reprehenderit? Quibusdam impedit quos facere eos repudiandae fugit laudantium enim, modi dolor eius perferendis vel sed optio omnis, consequatur veritatis. Quisquam ab excepturi amet!
  </motion.p>
</div>

<div className="grid grid-cols-1 h-1/3 md:grid-cols-2 gap-6 p-6 max-w mx-auto">

  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
    <h2 className="text-white text-xl font-semibold mb-2">Total Packets:</h2>
    <p className="text-white/80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatum fugiat veniam excepturi vitae ducimus, minus aspernatur mollitia ad consectetur nobis aut nam ipsam cumque! Vitae nisi fugit unde sit.</p>
  </div>


  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
    <h2 className="text-white text-xl font-semibold mb-2">Unique Protocols Used:</h2>
    <p className="text-white/80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quasi. Velit eos porro voluptate in earum ab, deleniti quo tenetur veniam. Assumenda voluptatum quo impedit. Sit aliquam corporis nisi unde?</p>
  </div>


  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
    <h2 className="text-white text-xl font-semibold mb-2">Time Range:</h2>
    <p className="text-white/80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ab aperiam unde cum, explicabo mollitia doloremque obcaecati molestiae minima a expedita ad voluptatum aut, iusto accusantium adipisci illum consectetur possimus.</p>
  </div>


  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
    <h2 className="text-white text-xl font-semibold mb-2">Total Data Size:</h2>
    <p className="text-white/80">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum dolor explicabo perspiciatis. Culpa inventore dolor commodi esse praesentium doloremque, qui perferendis eum expedita architecto repellendus quisquam doloribus iste natus facilis!</p>
  </div>
</div>

    </motion.div>
  );
};

export default ResultPage;

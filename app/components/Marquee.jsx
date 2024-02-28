"use client";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div
      id="scroll"
      className="w-full py-20 rounded-tl-3xl rounded-tr-3xl  text-white  bg-[#004d43]"
    >
      <div className=" border-t-2 border-b-2 border-zinc-300 flex pr-20 overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: "10", repeat: Infinity }}
          className="text-[17vw] tracking-tighter leading-none font-semibold uppercase"
        >
          I am a Developer{" "}
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: "10", repeat: Infinity }}
          className="text-[17vw] tracking-tighter leading-none font-semibold uppercase"
        >
          I am a Designer
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;

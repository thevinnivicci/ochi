"use client";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="w-full py-20 rounded-tl-3xl rounded-tr-3xl  text-white  bg-[#004d43]">
      <div className=" border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap">
        <h1 className="text-[17vw] tracking-tighter leading-none font-semibold uppercase">
          We are Ochi{" "}
        </h1>
        <h1 className="text-[17vw] tracking-tighter leading-none font-semibold uppercase">
          We are Ochi
        </h1>
        <h1 className="text-[17vw] tracking-tighter leading-none font-semibold uppercase">
          We are Ochi
        </h1>
      </div>
    </div>
  );
};

export default Marquee;

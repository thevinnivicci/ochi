import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import akplus from "../../public/akplus.png";
import index from "gsap";

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full bg-[#f1f1f1] py-20">
      <div className="w-full px-5 lg:px-20 border-b  border-zinc-700 pb-10 lg:pb-20">
        <h1 className="lg:text-7xl text-4xl text-nowrap font-['Neue_Montreal'] tracking-tight">
          Featured Projects
        </h1>
      </div>
      {/* cards */}
      <div className="lg:px-20 px-5">
        <div className="cards mt-10 w-full flex flex-col lg:flex-row gap-10 ">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="card-container relative w-full h-1/2 lg:w-1/2 lg:h-[75vh]"
          >
            <h1 className="text-[#CDEA68] hidden z-10 overflow-hidden lg:flex font-semibold text-7xl tracking-tighter leading-none absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2">
              {"FYDE".split("").map((item, idx) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  key={idx}
                  className="inline-block "
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <Image
                // src={
                //   "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                // }
                src={akplus}
                alt="featured project image"
                className="object-contain hover:scale-110 transition-all"
                width={5000}
                height={5000}
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="card-container relative w-full h-1/2 lg:w-1/2 lg:h-[75vh]"
          >
            <h1 className="text-[#CDEA68] z-20 hidden lg:flex overflow-hidden font-semibold text-7xl tracking-tighter leading-none absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2">
              {"VICE".split("").map((item, idx) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  key={idx}
                  className="inline-block "
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full overflow-hidden rounded-xl">
              <Image
                src={
                  "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                }
                alt="featured project image"
                className="object-cover hover:scale-110 transition-all"
                width={3000}
                height={3000}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

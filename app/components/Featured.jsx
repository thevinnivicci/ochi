import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import index from "gsap";
import Link from "next/link";

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div id="projects" className="w-full bg-[#f1f1f1] py-20">
      <div className="w-full px-5 lg:px-20 border-b  border-zinc-700 pb-10 lg:pb-20">
        <h1 className="lg:text-7xl text-4xl text-nowrap font-['Neue_Montreal'] tracking-tight">
          Featured Projects
        </h1>
      </div>
      {/* cards */}
      <div className="lg:px-20 px-5">
        <div className="cards mt-10 w-full flex items-center justify-center flex-col lg:flex-row gap-10 ">
          <div className="card-container relative w-full h-1/2 lg:w-1/2 lg:h-[75vh]">
            <h1 className="text-zinc-100 hidden z-10 overflow-hidden lg:flex font-semibold text-7xl tracking-tighter leading-none absolute left-[50%] -translate-x-1/2 top-[60%] -translate-y-1/2">
              {"ECOMMERCE".split("").map((item, idx) => (
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
            <div className="p-5 flex items-center gap-3">
              <div className="w-5 h-5 bg-zinc-800 rounded-[100%]"></div>
              <h2 className="text-lg">Ecommerce</h2>
            </div>
            <Link href={"https://akpluselectronics.com/"} target="_blank">
              <motion.div
                onHoverStart={() => handleHover(0)}
                onHoverEnd={() => handleHoverEnd(0)}
                className="card relative w-full h-full rounded-xl overflow-hidden"
              >
                <Image
                  src={"/akplus.png"}
                  alt="featured project image"
                  className="object-fill w-[100vw] lg:w-[50vw] h-[80vh]"
                  width={5000}
                  height={5000}
                />

                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-zinc-800 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-80"></div>
              </motion.div>
            </Link>
            <div className="mt-3 flex  flex-wrap gap-2">
              <span className="hover:bg-black text-nowrap hover:text-white transition-all px-5 py-2 border border-zinc-400 font-light text-sm uppercase rounded-full">
                Next JS
              </span>
              <span className="hover:bg-black text-nowrap hover:text-white transition-all px-5 py-2 border border-zinc-400 font-light text-sm uppercase rounded-full">
                Tailwind CSS
              </span>
              <span className="hover:bg-black text-nowrap hover:text-white transition-all px-5 py-2 border border-zinc-400 font-light text-sm uppercase rounded-full">
                Shadcn Ui
              </span>
              <span className="hover:bg-black text-nowrap hover:text-white transition-all px-5 py-2 border border-zinc-400 font-light text-sm uppercase rounded-full">
                Typescript
              </span>
              <span className="hover:bg-black text-nowrap hover:text-white transition-all px-5 py-2 border border-zinc-400 font-light text-sm uppercase rounded-full">
                Sanity CMS
              </span>
            </div>
          </div>
          <div className="card-container relative w-full h-1/2 lg:w-1/2 lg:h-[75vh]">
            <h1 className="text-zinc-100 z-20 hidden lg:flex overflow-hidden font-semibold text-7xl tracking-tighter leading-none absolute right-1/2 translate-x-1/2 top-[60%] -translate-y-1/2">
              {"NIKE SHOES".split("").map((item, idx) => (
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
            <div className="p-5 flex items-center gap-3">
              <div className="w-5 h-5 bg-zinc-800 rounded-[100%]"></div>
              <h2 className="text-lg">Landing Page</h2>
            </div>
            <Link
              href={"https://nike-react-project.vercel.app/"}
              target="_blank"
            >
              <motion.div
                onHoverStart={() => handleHover(1)}
                onHoverEnd={() => handleHoverEnd(1)}
                className="card relative w-full h-full overflow-hidden rounded-xl"
              >
                {" "}
                <Image
                  src={"/Nike Shoes.png"}
                  alt="featured project image"
                  className="object-fill w-[100vw] lg:w-[50vw] h-[80vh]"
                  width={5000}
                  height={5000}
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-zinc-800 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-80"></div>
              </motion.div>
            </Link>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="hover:bg-black text-nowrap hover:text-white transition-all px-5 py-2 border border-zinc-400 font-light text-sm uppercase rounded-full">
                React
              </span>
              <span className="hover:bg-black text-nowrap hover:text-white transition-all px-5 py-2 border border-zinc-400 font-light text-sm uppercase rounded-full">
                Tailwind CSS
              </span>
              <span className="hover:bg-black text-nowrap hover:text-white transition-all px-5 py-2 border border-zinc-400 font-light text-sm uppercase rounded-full">
                Javascript
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

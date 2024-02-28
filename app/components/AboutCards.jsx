import Image from "next/image";
import React from "react";
import { FaCode } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";

const AboutCards = () => {
  return (
    <div
      id="Skills"
      className="w-full min-h-screen gap-10 bg-zinc-100 flex flex-col items-center justify-center"
    >
      <h1 className="text-7xl">Skills</h1>
      <div className="w-full h-fit pb-10 lg:pb-0 bg-zinc-100 flex  flex-col lg:flex-row items-center px-5 lg:px-32 gap-5">
        <div className="card-container lg:w-1/2 w-full h-[50vh]">
          <div className="card relative w-full flex flex-col gap-2 items-center justify-center rounded-xl h-full bg-[#004D43]">
            <div className="">
              <MdOutlineDesignServices className="text-5xl text-zinc-100" />
            </div>
            <h1 className="lg:text-5xl text-4xl uppercase font-semibold tracking-tighter text-zinc-100">
              Design
            </h1>
          </div>
        </div>
        <div className="card-container lg:w-1/2 w-full h-[50vh]">
          <div className="card relative w-full flex flex-col gap-2 items-center justify-center rounded-xl h-full bg-[#212121]">
            <div className="">
              <FaCode className="text-5xl text-zinc-100" />
            </div>
            <h1 className="lg:text-5xl text-4xl uppercase font-semibold tracking-tighter text-zinc-100">
              Development
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCards;

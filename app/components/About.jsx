import React from "react";

const About = () => {
  return (
    <div className="w-full p-20 rounded-tl-3xl text-black rounded-tr-3xl bg-[#CDEA68]">
      <h1 className="font-['Neue_Montreal'] text-[4vw] tracking-tight  leading-[4.5vw]">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      {/* about us */}
      <div className="w-full flex gap-5 border-t pt-10 border-[#99AD52] mt-20">
        <div className="w-1/2  ">
          <h1 className="text-7xl">Our approach:</h1>
          <button className="flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-[#CDEA68]">
            Read more
            <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-[#99AD52]"></div>
      </div>
    </div>
  );
};

export default About;

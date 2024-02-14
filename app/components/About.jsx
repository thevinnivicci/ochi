import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full p-8 lg:p-20 rounded-tl-3xl text-black rounded-tr-3xl bg-[#CDEA68]"
    >
      <h1 className="font-['Neue_Montreal'] leading-[6vw] text-[6vw] lg:text-[4vw] tracking-tight  lg:leading-[4.5vw]">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      {/* about us */}
      <div className="w-full flex flex-col lg:flex-row gap-5 border-t pt-10 border-[#99AD52] mt-10 lg:mt-20">
        <div className="w-1/2  ">
          <h1 className=" text-4xl text-nowrap font-medium lg:text-7xl">
            Our approach:
          </h1>
          <button className="flex text-nowrap uppercase gap-10 px-6 py-4 items-center lg:px-10 lg:py-6 bg-zinc-900 mt-5 lg:mt-10 rounded-full text-[#CDEA68]">
            Read more
            <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
          </button>
        </div>
        <div
          // style={{
          //   backgroundImage: `url('https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          // }}
          className="lg:w-1/2 w-full h-[50vh] lg:h-[70vh] bg-[#99AD52] overflow-hidden p-5 rounded-3xl "
          //
        ></div>
      </div>
    </div>
  );
};

export default About;

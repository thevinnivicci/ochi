import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:gap-5 text-white p-5 pt-20 lg:p-20 bg-zinc-900">
      <div className="lg:w-1/2 w-full lg:h-full flex flex-col justify-between">
        <div className="heading">
          <h1 className="lg:text-[8vw] text-[10vw] uppercase leading-none tracking-tighter font-semibold">
            EYE
          </h1>
          <h1 className="lg:text-[8vw] text-[10vw] uppercase leading-none tracking-tighter font-semibold">
            OPENING
          </h1>
        </div>
      </div>
      <div className="lg:w-1/2  w-full">
        <h1 className="lg:text-[6vw] text-[10vw] uppercase leading-none tracking-tighter font-semibold">
          presentation
        </h1>
        <div className="dets font-['Neue Montreal']">
          <Link
            target="_blank"
            href={"https://www.instagram.com/thevinnivicci"}
            className=" capitalize block text-xl font-light mt-5"
          >
            instagram
          </Link>
          <Link
            target="_blank"
            href={"https://github.com/thevinnivicci"}
            className=" capitalize block text-xl font-light mt-5"
          >
            Github
          </Link>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/vinitkumar2001"}
            className=" capitalize block text-xl font-light mt-5"
          >
            Linkdin
          </Link>
        </div>
        <div className="">
          <h2>Delhi, India</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import Image from "next/image";
import React from "react";

const AboutCards = () => {
  return (
    <div className="w-full h-screen bg-zinc-100 flex items-center px-32 gap-5">
      <div className="card-container w-1/2 h-[50vh]">
        <div className="card relative w-full flex items-center justify-center rounded-xl h-full bg-[#004D43]">
          <Image
            src={"https://ochi.design/wp-content/uploads/2022/04/logo001.svg"}
            alt="featured project image"
            className="w-32 object-cover"
            width={500}
            height={500}
          />
          <button className="absolute hover:bg-white hover:text-black transition-all text-zinc-100 px-5 py-1 rounded-full border left-10 bottom-10">
            &copy;READ MORE
          </button>
        </div>
      </div>
      <div className="card-container flex gap-5 w-1/2 h-[50vh]">
        <div className="card relative flex items-center justify-center w-1/2 rounded-xl h-full bg-[#212121]">
          <Image
            src={"https://ochi.design/wp-content/uploads/2022/04/logo002.svg"}
            alt="featured project image"
            className="w-32 object-cover"
            width={500}
            height={500}
          />
          <button className="absolute hover:bg-white hover:text-black transition-all text-zinc-100 px-5 py-1 rounded-full border left-10 bottom-10">
            &copy;READ MORE
          </button>
        </div>
        <div className="card relative w-1/2 flex items-center justify-center rounded-xl h-full bg-[#212121]">
          <Image
            src={"https://ochi.design/wp-content/uploads/2022/04/logo003.png"}
            alt="featured project image"
            className="w-32 rounded-xl object-cover"
            width={500}
            height={500}
          />
          <button className="absolute hover:bg-white hover:text-black transition-all text-zinc-100 px-5 py-1 rounded-full border left-10 bottom-10">
            &copy;READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutCards;

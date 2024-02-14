"use client";
import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });
  return (
    <div className="relative w-full h-[80vh] lg:h-screen overflow-hidden">
      <div
        className="absolute inset-0 lg:bg-cover bg-center"
        style={{
          backgroundImage: `url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')`,
        }}
      >
        <div className="flex justify-center items-center w-full h-full">
          <div className="lg:w-1/2 h-1/2 w-full gap-5 flex justify-center items-center max-w-screen-sm ">
            <div className=" flex items-center justify-center w-28 h-28 lg:w-[10vw] lg:h-[20vh] rounded-[100%] bg-zinc-100">
              <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]   w-full h-10"
                >
                  <div className="w-8 h-8 bg-zinc-100 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-center w-28 h-28 lg:w-[10vw] lg:h-[20vh] rounded-[100%] bg-zinc-100">
              <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]   w-full h-10"
                >
                  <div className="w-8 h-8 bg-zinc-100 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;

import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowUpLong } from "react-icons/fa6";
const Hero = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-.3"
      className="w-full h-screen bg-[#f1f1f1] pt-1"
    >
      {/* text structure */}
      <div className="mt-52 px-20">
        {["we create", "eye opening", "presentation"].map((item, id) => (
          <div key={id} className="masker ">
            <div className="w-fit flex items-end overflow-hidden">
              {id === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "7vw" }}
                  transition={{
                    ease: [0.76, 0, 0.24, 1],
                    duration: "1",
                  }}
                  className=" mr-[1vw] bg-cover rounded-md  w-[7vw] h-[5.9vw]  relative"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                  }}
                >
                  {/* <Image
                    src={
                      "https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    alt="eye image"
                    width={500}
                    height={500}
                    className="object-cover"
                  /> */}
                </motion.div>
              )}
              <h1 className="leading-[6.5vw] tracking-tighter uppercase text-[7vw] font-medium">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      {/*companies  */}
      <div className="border-t mt-32 border-zinc-800 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, id) => (
          <p
            key={id}
            className="text-base capitalize tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className=" flex items-center gap-5">
          <div className=" hover:bg-black hover:text-white transition-all px-5 py-2 border border-zinc-400 font-light text-sm uppercase rounded-full">
            start the project
          </div>
          <div
            className="w-10 border hover:bg-black hover:text-white transition-all border-zinc-400 h-10 flex items-center justify-center rounded-full
           rotate-45"
          >
            <FaArrowUpLong />
          </div>
        </div>
      </div>
      {/* start button */}
    </div>
  );
};

export default Hero;

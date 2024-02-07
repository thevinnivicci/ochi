import { FaArrowUpLong } from "react-icons/fa6";
const Hero = () => {
  return (
    <div className="w-full h-screen bg-[#f1f1f1] pt-1">
      {/* text structure */}
      <div className="mt-52 px-20">
        {["we create", "eye opening", "presentation"].map((item, id) => (
          <div key={id} className="masker ">
            <div className="w-fit flex items-end overflow-hidden">
              {id === 1 && (
                <div className=" mr-[1vw] rounded-md  w-[7vw] h-[5.9vw]  relative bg-red-900"></div>
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

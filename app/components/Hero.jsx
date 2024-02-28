import { motion } from "framer-motion";
import Companies from "./Companies";
const Hero = () => {
  return (
    <div className="w-full lg:h-full sm:h-[70vh] bg-[#f1f1f1] pt-1">
      {/* text structure */}
      <div className="w-full mt-20 px-8 lg:px-20">
        {["Hi, I'm", "Vinit kumar,", "Creative Developer"].map((item, id) => (
          <div key={id} className="masker w-full flex items-center">
            <h1 className="lg:leading-[6.5vw] text-zinc-800 text-nowrap leading-[8vw] tracking-tighter uppercase text-[8vw] lg:text-[7vw] font-semibold">
              {item}
            </h1>
          </div>
        ))}
      </div>
      {/*companies  */}
      <Companies />

      {/* start button */}
    </div>
  );
};

export default Hero;

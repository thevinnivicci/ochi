import { motion } from "framer-motion";
import Companies from "./Companies";
const Hero = () => {
  return (
    <div className="w-full lg:h-full sm:h-[70vh] bg-[#f1f1f1] pt-1">
      {/* text structure */}
      <div className="w-full mt-20 px-8 lg:px-20">
        {["we create", "eye opening", "presentation"].map((item, id) => (
          <div key={id} className="masker w-fit">
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
              <h1 className="lg:leading-[6.5vw] leading-[10vw] tracking-tighter uppercase text-[10vw] lg:text-[7vw] font-medium">
                {item}
              </h1>
            </div>
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

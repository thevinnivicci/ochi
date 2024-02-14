import { FaArrowUpLong } from "react-icons/fa6";

const Companies = () => {
  return (
    <div className="w-full lg:h-[22vh] border-t mt-60 lg:mt-32 border-zinc-800 gap-10 flex flex-col lg:flex-row lg:justify-between  lg:items-center py-5 px-5 lg:px-20">
      {["For public and private companies", "From the first pitch to IPO"].map(
        (item, id) => (
          <p
            key={id}
            className="text-base sms:text-center lg:text-start capitalize tracking-tight leading-none"
          >
            {item}
          </p>
        )
      )}
      <div className=" flex items-center gap-5">
        <div className=" hover:bg-black text-nowrap hover:text-white transition-all px-5 py-2 border border-zinc-400 font-light text-sm uppercase rounded-full">
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
  );
};

export default Companies;

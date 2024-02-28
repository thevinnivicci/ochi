import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";

const Companies = () => {
  const socail = [
    {
      name: "github",
      link: "https://github.com/thevinnivicci/",
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/vinitkumar2001/",
    },
  ];
  const router = useRouter();
  const handleclick = () => {
    router.push("#scroll");
  };
  return (
    <div className="w-full lg:h-[22vh] border-t mt-60 lg:mt-32 border-zinc-800 gap-5 lg:gap-10 flex flex-col lg:flex-row justify-between  items-start lg:items-center py-5 px-5 lg:px-20">
      {socail.map((item, id) => (
        <Link
          key={id}
          href={item.link}
          className="font-light text-lg uppercase hover:underline lg:text-start tracking-tight leading-none"
        >
          {item.name}
        </Link>
      ))}
      <div className=" flex items-center gap-5">
        <div
          onClick={handleclick}
          className=" hover:bg-black cursor-pointer text-nowrap hover:text-white transition-all px-5 py-2 border border-zinc-400 font-light text-sm uppercase rounded-full"
        >
          Scroll Down
        </div>
        <div
          onClick={handleclick}
          className="w-10 border cursor-pointer hover:bg-black hover:text-white transition-all border-zinc-400 h-10 flex items-center justify-center rounded-full"
        >
          <FaArrowDownLong />
        </div>
      </div>
    </div>
  );
};

export default Companies;

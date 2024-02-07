import About from "./components/About";
import Eyes from "./components/Eyes";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-zinc-900 ">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Eyes/>
    </div>
  );
}

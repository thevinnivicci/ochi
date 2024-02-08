"use client"
import { useEffect } from "react";
import About from "./components/About";
import AboutCards from "./components/AboutCards";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
export default function Home() {

  return (
    <div className="w-full min-h-screen bg-[#004d43] ">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <AboutCards />
      <Footer />
    </div>
  );
}

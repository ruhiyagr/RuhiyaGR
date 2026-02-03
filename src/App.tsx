import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { AITraining } from "./components/AITraining";
import { RoboticsStem } from "./components/RoboticsStem";
import { ThreeDPrinting } from "./components/ThreeDPrinting";
import { Expertise } from "./components/Expertise";
import { Philosophy } from "./components/Philosophy";
import { Mission } from "./components/Mission";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import profileImage from "figma:asset/1a396357bc5256fd56b92676fbd04df280f11f09.png";

export default function App() {
  useEffect(() => {
    // Set page title
    document.title = "Ruhiya G R - Coding & Robotics Educator | AI/GenAI Trainer";
    
    // Set favicon
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = profileImage;
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <AITraining />
      <RoboticsStem />
      <ThreeDPrinting />
      <Expertise />
      <Philosophy />
      <Mission />
      <Blog />
      <Contact />
    </div>
  );
}
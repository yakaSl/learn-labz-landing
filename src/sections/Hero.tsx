import { useCallback } from "react";
import logo from "../assets/learn-labz-logo.png";
import ParticlesBackground from "../components/ParticlesBackground";

const Hero = () => {
  const handleScrollToAbout = useCallback(() => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", inline: "start" });
    }
  }, []);

  return (
    <section className="relative w-full h-full bg-[#e0f7fa] overflow-hidden">
      <ParticlesBackground />
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full"
        data-scroll
        data-scroll-speed="1"
      >
        <img
          src={logo}
          alt="Learn Labz Logo"
          className="w-[48rem] h-auto mb-10"
          data-scroll
          data-scroll-speed="2"
        />
        <button
          onClick={handleScrollToAbout}
          className="px-6 py-3 bg-primary text-white rounded-full text-lg font-medium hover:scale-105 transition-transform"
        >
          What is Learn Labz?
        </button>
      </div>
    </section>
  );
};

export default Hero;

import { useCallback, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import logo from "../assets/learn-labz-logo.png";
import ParticlesBackground from "../components/ParticlesBackground";

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const yLogo = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const yButton = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const handleScrollToAbout = useCallback(() => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-[#e0f7fa] overflow-hidden"
    >
      <ParticlesBackground />
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full">
        <motion.img
          src={logo}
          alt="Learn Labz Logo"
          className="w-[48rem] h-auto mb-10"
          style={{ y: yLogo, opacity }}
        />
        <motion.button
          onClick={handleScrollToAbout}
          className="px-6 py-3 bg-primary text-white rounded-full text-lg font-medium hover:scale-105 transition-transform"
          style={{ y: yButton, opacity }}
        >
          What is Learn Labz?
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;

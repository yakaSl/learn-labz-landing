import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Navbar from "../components/Navbar";
import Features from "../sections/Features";
import HowItWorks from "../sections/HowItWorks";

const Home = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      direction: "horizontal",
      smartphone: {
        smooth: true,
        direction: "vertical",
        breakpoint: 0,
      } as { smooth: boolean; direction: "vertical" | "horizontal"; breakpoint: number },
      tablet: {
        smooth: true,
        direction: "vertical",
        breakpoint: 768,
      } as { smooth: boolean; direction: "vertical" | "horizontal"; breakpoint: number },
    });

    // Make scroll instance available globally (e.g. in Navbar button)
    (window as any).LocomotiveScrollInstance = scroll;

    return () => {
      scroll.destroy();
      delete (window as any).LocomotiveScrollInstance;
    };
  }, []);

  return (
    <>
      <Navbar />
      <main data-scroll-container ref={scrollRef} className="overflow-hidden">
  <div className="flex flex-row h-screen w-[300vw]">
    {/* Hero Section */}
    <section id="hero" data-scroll-section className="w-screen h-screen flex-shrink-0">
      <Hero />
    </section>

    {/* About Section */}
    <section id="about" data-scroll-section className="w-screen h-screen flex-shrink-0">
      <About />
    </section>
    {/* Feature Section */}
    <section id="features" data-scroll-section className="w-screen h-screen flex-shrink-0">
      <Features />
    </section>
    {/* HowItWorks Section */}
    <section id="how-it-works" data-scroll-section className="w-screen h-screen flex-shrink-0">
      <HowItWorks />
    </section>
  </div>
</main>
    </>
  );
};

export default Home;

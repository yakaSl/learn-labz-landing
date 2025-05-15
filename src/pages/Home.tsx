import Hero from "../sections/Hero";
import About from "../sections/About";
import Navbar from "../components/Navbar";
import Features from "../sections/Features";
import HowItWorks from "../sections/HowItWorks";
import Contact from "../sections/Contact";
import Gallery from "../sections/Gallery";
import WhyChoose from "../sections/WhyChoose";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
  {/* Hero Section */}
  <section id="hero" className="w-full min-h-screen">
    <Hero />
  </section>

  {/* About Section */}
  <section id="about" className="w-full min-h-screen">
    <About />
  </section>

  {/* Feature Section */}
  <section id="features" className="w-full min-h-screen">
    <Features />
  </section>
  {/* Gallery Section */}
  <section id="gallery" className="w-full">
    <Gallery />
  </section>
  {/* WhyChoose Section */}
  <section id="why-choose" className="w-full">
    <WhyChoose />
  </section>
  {/* HowItWorks Section */}
  <section id="how-it-works" className="w-full min-h-screen">
    <HowItWorks />
  </section>
  {/* HowItWorks Section */}
  <section id="contact" className="w-full min-h-screen">
    <Contact />
  </section>
</main>
    </>
  );
};

export default Home;

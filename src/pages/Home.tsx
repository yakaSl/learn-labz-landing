import Hero from "../sections/Hero";
import About from "../sections/About";
import Navbar from "../components/Navbar";
import Features from "../sections/Features";
import HowItWorks from "../sections/HowItWorks";

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

  {/* HowItWorks Section */}
  <section id="how-it-works" className="w-full min-h-screen">
    <HowItWorks />
  </section>
</main>
    </>
  );
};

export default Home;

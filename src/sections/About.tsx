import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  /** Heading **/
  // Slide up over first 15% of scroll
  const headingY = useTransform(scrollYProgress, [0, 0.15], [100, 0]);

  /** Card 1 transforms **/
  // Appear from 15%–30%, exit left 40%–50%
  const card1Y = useTransform(scrollYProgress, [0.15, 0.30], [100, 0]);
  const card1X = useTransform(scrollYProgress, [0.40, 0.50], [0, -300]);
  const card1Opacity = useTransform(
    scrollYProgress,
    [0.15, 0.25, 0.30, 0.50],
    [0, 1, 1, 0]
  );
  const card1Z = useTransform(scrollYProgress, [0.15, 0.30], [0, 1]);

  /** Card 2 transforms **/
  // Appear 30%–45%, exit right 55%–65%
  const card2Y = useTransform(scrollYProgress, [0.30, 0.45], [100, 0]);
  const card2X = useTransform(scrollYProgress, [0.55, 0.65], [0, 300]);
  const card2Opacity = useTransform(
    scrollYProgress,
    [0.30, 0.40, 0.45, 0.65],
    [0, 1, 1, 0]
  );
  const card2Z = useTransform(scrollYProgress, [0.30, 0.45], [0, 1]);

  /** Card 3 transforms **/
  // Appear 45%–60%, exit left 75%–85%
  const card3Y = useTransform(scrollYProgress, [0.45, 0.60], [100, 0]);
  const card3X = useTransform(scrollYProgress, [0.75, 0.85], [0, -300]);
  const card3Opacity = useTransform(
    scrollYProgress,
    [0.45, 0.55, 0.60, 0.85],
    [0, 1, 1, 0]
  );
  const card3Z = useTransform(scrollYProgress, [0.45, 0.60], [0, 1]);

  return (
    <section className="relative w-screen h-[400vh] bg-[#004c4c]">
      <div
        ref={containerRef}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        {/* Heading */}
        <motion.h2
          style={{ y: headingY }}
          className="sticky top-0 z-20 w-full text-4xl md:text-5xl font-extrabold text-white text-center leading-tight pt-24"
        >
          Cloud-based SaaS for tutors
        </motion.h2>

        {/* Cards Layered absolutely */}
        <div className="relative h-full flex items-center justify-center">
          {/* Card 1 */}
          <motion.div
            style={{
              y: card1Y,
              x: card1X,
              opacity: card1Opacity,
              zIndex: card1Z,
            }}
            className="absolute bg-white p-6 md:p-8 rounded-2xl shadow-lg w-[90%] md:w-[60%] border border-[#004c4c]"
          >
            {/* What Is Learn Labz? content */}
          </motion.div>

          {/* Card 2 */}
          <motion.div
            style={{
              y: card2Y,
              x: card2X,
              opacity: card2Opacity,
              zIndex: card2Z,
            }}
            className="absolute bg-white p-6 md:p-8 rounded-2xl shadow-lg w-[90%] md:w-[60%] border border-[#004c4c]"
          >
            {/* Why Tutors Choose Learn Labz content */}
          </motion.div>

          {/* Card 3 */}
          <motion.div
            style={{
              y: card3Y,
              x: card3X,
              opacity: card3Opacity,
              zIndex: card3Z,
            }}
            className="absolute bg-white p-6 md:p-8 rounded-2xl shadow-lg w-[90%] md:w-[60%] border border-[#004c4c]"
          >
            {/* Benefits of Using Learn Labz content */}
          </motion.div>
        </div>
      </div>
      {/* After scrollYProgress > 0.85, sticky unpins and next section scrolls in */}
    </section>
  );
};

export default About;
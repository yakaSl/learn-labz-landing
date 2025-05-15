import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Gallery = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Slide-in parallax transform for images
  const x1 = useTransform(scrollYProgress, [0, 0.5], ["-100px", "0px"]);
  const x2 = useTransform(scrollYProgress, [0, 0.5], ["100px", "0px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      ref={ref}
      id="gallery"
      className="w-full bg-[#004c4c] py-16 px-4 text-center overflow-hidden"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#ffffff] mb-2">
        Learn Labz UI Showcase
      </h2>
      <p className="text-[#ffffff] mb-10">
        Take a glimpse into our smart educational platform
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Image 1 */}
        <motion.div
          style={{ x: x1, opacity }}
          className="group perspective relative overflow-hidden rounded-2xl shadow-xl transform-gpu"
        >
          <div className="transition-transform duration-700 group-hover:-translate-y-4 group-hover:scale-105 group-hover:rotate-1">
            <img
              src="/images/ui-1.jpeg"
              alt="Signup"
              className="w-full rounded-2xl"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Image 2 */}
        <motion.div
          style={{ x: x2, opacity }}
          className="group perspective relative overflow-hidden rounded-2xl shadow-xl transform-gpu"
        >
          <div className="transition-transform duration-700 group-hover:translate-y-4 group-hover:scale-105 group-hover:-rotate-1">
            <img
              src="/images/ui-2.jpeg"
              alt="Tutor Dashboard"
              className="w-full rounded-2xl"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;

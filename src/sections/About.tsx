import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const About = () => {
  return (
    <section className="relative w-screen bg-[#004c4c] py-24">
      <div className="max-w-3xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16"
        >
          Cloud-based SaaS for tutors
        </motion.h2>

        {/* Card 1 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
          className="bg-white p-6 md:p-8 rounded-2xl shadow-lg mb-16 border border-[#004c4c]"
        >
          <h3 className="text-xl font-bold mb-2 text-[#004c4c]">
            What Is Learn Labz?
          </h3>
          <p>
            Learn Labz is a cloud-based platform that empowers tutors with
            modern tools to manage classes, track student progress, and deliver
            better outcomes — all in one place.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ amount: 0.3 }}
          className="bg-white p-6 md:p-8 rounded-2xl shadow-lg mb-16 border border-[#004c4c]"
        >
          <h3 className="text-xl font-bold mb-2 text-[#004c4c]">
            Why Tutors Choose Learn Labz
          </h3>
          <p>
            With intuitive interfaces, automated scheduling, and smart
            analytics, tutors save time and engage students more effectively —
            increasing retention and satisfaction.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ amount: 0.3 }}
          className="bg-white p-6 md:p-8 rounded-2xl shadow-lg mb-16 border border-[#004c4c]"
        >
          <h3 className="text-xl font-bold mb-2 text-[#004c4c]">
            Benefits of Using Learn Labz
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Real-time student insights</li>
            <li>Easy course material uploads</li>
            <li>Streamlined payments and communication</li>
          </ul>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ amount: 0.3 }}
          className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-[#004c4c]"
        >
          <h3 className="text-xl font-bold mb-2 text-[#004c4c]">
            The Future of Tutoring
          </h3>
          <p>
            Learn Labz continues to innovate — integrating AI recommendations,
            adaptive learning paths, and global collaboration tools to transform
            the tutoring experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

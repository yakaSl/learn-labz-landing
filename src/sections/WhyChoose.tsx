// sections/WhyChoose.tsx
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const WhyChoose = () => {
  const items = [
    {
      title: "For Tutors",
      description: "Manage batches, track student progress, and get paid faster.",
      icon: "school", // 👩‍🏫
    },
    {
      title: "For Students",
      description: "Gamified dashboards and reminders help students stay motivated and organized.",
      icon: "emoji_events", // 🏆
    },
    {
      title: "For Parents",
      description: "Get real-time insights into your child’s attendance, progress, and payments.",
      icon: "supervisor_account", // 👪
    },
    {
      title: "For Investors",
      description: "Limited equity slots with solid 5-year ROI — own a part of EdTech’s future.",
      icon: "trending_up", // 📈
    },
  ];

  return (
    <section
      id="why-choose"
      className="w-full bg-white py-20 px-6 text-center text-[#004c4c] overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-4"
      >
        Why Choose Learn Labz?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-gray-600 max-w-3xl mx-auto mb-6 text-base leading-relaxed"
      >
        <strong>Learn Labz</strong> is designed to empower private tutors across Sri Lanka by giving them digital tools to manage their classes, reach students both online and offline, and grow their teaching businesses with ease.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-gray-600 max-w-3xl mx-auto mb-12 text-base leading-relaxed"
      >
        Our platform offers a low-cost, easy-to-use solution for both academic and non-academic tutors — including language instructors, exam prep mentors, and skills trainers — particularly in underserved rural and urban areas.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="group perspective relative overflow-hidden rounded-2xl bg-[#e0f7fa] p-6 shadow-xl transform-gpu hover:shadow-2xl hover:scale-105 transition-transform"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="material-icons text-4xl text-[#004c4c] mb-3 block">
              {item.icon}
            </span>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-700">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;

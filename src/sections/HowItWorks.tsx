import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Sign Up & Set Up Your Profile',
    description:
      'Tutors quickly register and create their profile, adding subjects, batch details, and schedule.',
  },
  {
    title: 'Link Zoom & Set Fees',
    description:
      'Easily connect your Zoom Pro account (securely via OAuth) and set your batch fees and payment details.',
  },
  {
    title: 'Enroll Students',
    description:
      'Invite students to join your batches. Students/parents register, pay online, and get instant access.',
  },
  {
    title: 'Conduct Classes & Track Attendance',
    description:
      'Run your classes online or offline. Attendance is recorded in real-time using QR codes, ensuring accuracy.',
  },
  {
    title: 'Monitor Performance',
    description:
      "Track your students' progress with automatic reports on attendance, test scores, and engagement.",
  },
  {
    title: 'Get Paid Easily',
    description:
      'Payments are processed securely. Learn Labz automatically calculates commissions and deposits your earnings.',
  },
  {
    title: 'Keep Growing',
    description:
      'Use insights, performance reports, and built-in tools to expand your classes and manage your business smoothly.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-[#004c4c]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-[#ffffff] font-bold text-center mb-12">
          How Learn Labz Works
        </h2>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-[#ffffff] text-[#004c4c] flex items-center justify-center text-lg font-bold">
                  {idx + 1}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#ffffff]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[#ffffff] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;

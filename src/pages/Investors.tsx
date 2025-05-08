import { motion } from 'framer-motion';

export default function Investors() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-primary p-8">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold mb-4"
      >
        Investors & Partnerships
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-2xl text-center"
      >
        Learn Labz is seeking strategic partners to scale our innovative LMS. Our secure, scalable infrastructure and advanced features set us apart in the booming online education market.
      </motion.p>
    </main>
  );
}

import React, { useState } from 'react';
import { Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate API or email service
    console.log('Contact form submitted', formData);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-[#004c4c] mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>

        <motion.p
          className="text-center text-gray-700 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          We’d love to hear from you! Whether you're a tutor looking to join Learn Labz, a parent with questions, or an investor interested in opportunities, our team is ready to help.
        </motion.p>

        {/* Two-column layout: details on left, form on right - manu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Details */}
          <div className="space-y-8">
            <motion.div
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Mail size={28} className="text-[#004c4c]" />
              <div>
                <h3 className="text-xl font-semibold text-[#004c4c]">General Inquiries</h3>
                <p className="mt-2 text-gray-600">
                  <a href="mailto:info@learnlabz.com" className="hover:underline">
                    info@learnlabz.com
                  </a>
                  <br />
                  <a href="tel:+94722496028" className="hover:underline">
                    +94 72 249 6028
                  </a>
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Mail size={28} className="text-[#004c4c]" />
              <div>
                <h3 className="text-xl font-semibold text-[#004c4c]">Investor Relations</h3>
                <p className="mt-2 text-gray-600">
                  Reach our business team for investment details.
                  <br />
                  <a href="mailto:learnlabzlk@gmail.com" className="hover:underline">
                    learnlabzlk@gmail.com
                  </a>
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <MapPin size={28} className="text-[#004c4c]" />
              <div>
                <h3 className="text-xl font-semibold text-[#004c4c]">Our Office</h3>
                <p className="mt-2 text-gray-600">
                  Learn Labz HQ<br />
                  No. 94/1, Main Street, Colombo, Sri Lanka.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Clock size={28} className="text-[#004c4c]" />
              <div>
                <h3 className="text-xl font-semibold text-[#004c4c]">Business Hours</h3>
                <p className="mt-2 text-gray-600">
                  Monday – Friday: 9:00 AM – 5:00 PM<br />
                  Saturday: 9:00 AM – 1:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-[#004c4c] mb-4 text-center">Send Us a Message</h3>
            {submitted ? (
              <p className="text-green-600 text-center">Thank you! We'll get back to you soon.</p>
            ) : (
              <>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 w-full bg-[#004c4c] text-white py-2 rounded hover:bg-[#003737] transition"
                >
                  Submit
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
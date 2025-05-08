const Contact = () => {
  return (
    <section
      id="contact"
      data-scroll-section
      className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center bg-white text-[#212129] font-heading"
    >
      <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
      <form className="flex flex-col space-y-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 rounded px-4 py-2"
        />
        <textarea
          placeholder="Your Message"
          className="border border-gray-300 rounded px-4 py-2"
          rows={4}
        />
        <button className="bg-[#15ae89] text-white py-2 px-6 rounded hover:bg-[#13a07f] transition">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;

const About = () => {
  return (
    <section
      className="relative w-screen min-h-screen bg-[#004c4c] overflow-hidden flex justify-center items-center p-8"
      data-scroll-section
    >
      <div className="flex flex-col gap-8 mt-[6rem] md:mt-[8rem] "> 
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center leading-tight">
        Cloud-based SaaS for tutors
        </h2>

        {/* Section 1 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full border border-[#004c4c] space-y-6">
          

          {/* Section 2 */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-[#004c4c] text-center mb-2">What Is Learn Labz?</h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify break-words whitespace-normal">
              Learn Labz is a comprehensive online platform designed to streamline the tutoring experience for educators and students alike. Whether you're managing a single student or an entire batch, Learn Labz empowers tutors with the tools they need to enhance their teaching, optimize student performance, and ensure smooth class operations. The platform is user-friendly and focused on providing convenience, security, and reliability, allowing tutors to focus on what truly matters — teaching.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-[#004c4c] text-center mb-2">Why Tutors Choose Learn Labz</h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify break-words whitespace-normal">
              Tutors choose Learn Labz because it simplifies and enhances their day-to-day teaching process. Whether you're a private tutor or part of a larger institution, Learn Labz supports your need for secure, streamlined class management. We save you time and effort while offering a professional, transparent, and secure way to interact with students and parents. Plus, Learn Labz provides easy access to performance tracking, payment processing, and attendance management, making it the ideal platform for educators who want to focus on teaching rather than administrative tasks.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-[#004c4c] text-center mb-2">Benefits of Using Learn Labz</h3>
            <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 space-y-2">
              <li><strong>Increased Efficiency:</strong> Spend less time on administrative tasks and more time on what matters — teaching.</li>
              <li><strong>Enhanced Student Engagement:</strong> Monitor student progress and tailor your approach with insightful analytics.</li>
              <li><strong>Flexible Learning Environment:</strong> Whether online or in-person, manage your classes effortlessly with a secure and efficient platform.</li>
              <li><strong>Professional Transparency:</strong> Keep both parents and students in the loop with easy-to-access reports and performance metrics.</li>
              <li><strong>Financial Simplification:</strong> Easily track payments and fees, and manage commissions, all within the same platform.</li>
              <li><strong>Scalable Growth:</strong> With Learn Labz, you can grow your student base while keeping your operations running smoothly and efficiently.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
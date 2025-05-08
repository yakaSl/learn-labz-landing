const features = [
  {
    icon: "groups",
    title: "Batch & Class Management",
    description:
      "Easily create and manage multiple batches, schedule classes, and enroll students effortlessly.",
  },
  {
    icon: "qr_code_scanner",
    title: "QR Code Attendance Tracking",
    description:
      "Real-time attendance logging using secure, time-sensitive QR codes with optional GPS verification.",
  },
  {
    icon: "videocam",
    title: "Secure Zoom Integration",
    description:
      "Link your own Zoom Pro account with full OAuth security, ensuring only verified, paid students can access your sessions.",
  },
  {
    icon: "insights",
    title: "Performance Analytics",
    description:
      "Track student progress with dynamic dashboards showing attendance, test scores, and engagement.",
  },
  {
    icon: "payments",
    title: "Payment Processing",
    description:
      "Built-in payment gateways (Stripe & PayHere) for smooth fee collection and automatic commission tracking.",
  },
  {
    icon: "people",
    title: "Parent & Student Portals",
    description:
      "Dedicated access for students and parents to check attendance, performance, and payment status transparently.",
  },
  {
    icon: "video_library",
    title: "Secure Video Hosting",
    description:
      "Upload and share lessons safely using DRM protection to prevent unauthorized downloads and recordings.",
  },
  {
    icon: "description",
    title: "Customizable Reports",
    description:
      "Generate detailed performance and financial reports to keep your classes organized and accountable.",
  },
  {
    icon: "devices",
    title: "Multi-Device Access",
    description:
      "Access Learn Labz from desktop, tablet, or mobile — with a responsive, user-friendly design.",
  },
  {
    icon: "verified_user",
    title: "Admin Oversight & Compliance",
    description:
      "Ensures data privacy, regulatory compliance (GDPR/COPPA), and built-in fraud monitoring.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="relative w-screen min-h-screen bg-[#ffffff] overflow-hidden flex justify-center items-center p-8"
      data-scroll-section
    >
      <div className="flex flex-col gap-8 mt-[6rem] md:mt-[8rem] w-full">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#004c4c] text-center leading-tight">
          Key Features of Learn Labz
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
          {features.map((feature, index) => (
            <div
            key={index}
            className="bg-[#66b2b2] p-4 md:p-5 rounded-xl shadow-md border border-[#ffffff] space-y-3 flex flex-col items-center text-center min-h-[280px] justify-start"
          >
              <span className="material-icons text-[#ffffff] text-6xl mb-1">
                {feature.icon}
              </span>
              <h3 className="text-base md:text-lg font-semibold text-[#ffffff]">
                {feature.title}
              </h3>
              <p className="text-xs md:text-sm text-[#ffffff] leading-relaxed text-justify break-words whitespace-normal">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

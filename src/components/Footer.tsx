import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full py-6 px-6 mt-auto bg-gray-900 text-white flex justify-between items-center">
      <p className="text-sm">© {new Date().getFullYear()} Learn Labz</p>
      <div className="space-x-4 text-sm">
        <Link to="/investors" className="hover:underline">Investors</Link>
        <Link to="/services" className="hover:underline">Services</Link>
      </div>
    </footer>
  );
};

export default Footer;

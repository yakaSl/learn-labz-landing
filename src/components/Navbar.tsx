import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/learn-labz-logo.png";
import { Menu, X } from "lucide-react"; // icons from lucide-react

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollTo = useCallback((selector: string) => {
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false); // Close mobile menu after navigation
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center" aria-label="Go to homepage">
        <img
          src={logo}
          alt="Learn Labz Logo"
          className="w-[150px] sm:w-[200px] md:w-[250px] h-auto"
        />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 font-medium text-gray-800">
        <li><button onClick={() => handleScrollTo("#hero")} className="hover:text-primary">Home</button></li>
        <li><button onClick={() => handleScrollTo("#about")} className="hover:text-primary">About</button></li>
        <li><button onClick={() => handleScrollTo("#features")} className="hover:text-primary">Features</button></li>
        <li><button onClick={() => handleScrollTo("#how-it-works")} className="hover:text-primary">How It Works</button></li>
        <li><button onClick={() => handleScrollTo("#contact")} className="hover:text-primary">Contact</button></li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          className="text-gray-800"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg md:hidden z-40 transition-all duration-300">
          <ul className="flex flex-col items-start px-6 py-4 space-y-4 font-medium text-gray-800">
            <li><button onClick={() => handleScrollTo("#hero")}>Home</button></li>
            <li><button onClick={() => handleScrollTo("#about")}>About</button></li>
            <li><button onClick={() => handleScrollTo("#features")}>Features</button></li>
            <li><button onClick={() => handleScrollTo("#how-it-works")}>How It Works</button></li>
            <li><button onClick={() => handleScrollTo("#contact")}>Contact</button></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// Navbar.jsx
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // You'll need to install react-icons

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { name: "How it works", href: "how-it-works" },
    { name: "Pricing & Services", href: "#pricing&services" },
    { name: "About us", href: "#about-us" },
    { name: "For business", href: "#business" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white py-4 shadow-sm" : "bg-transparent py-10"
      }`}
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="md:flex gap-10 items-center flex-shrink-0">
            <a
              href="/"
              className={`text-3xl font-bold ${isScrolled ? "text-[#080808]" : "text-[#FFD06D]"} mr-10`}
            >
              LaundryHeap
            </a>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`transition-colors duration-200 font-montserrat ${
                  isScrolled ? "text-[#080808]" : "text-white"
                } hover:text-[#FFD06D] hidden md:flex`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              className={`${isScrolled ? "text-[#080808]" : "text-white"} font-montserrat font-semibold px-4 py-2 rounded-md transition-colors duration-200`}
            >
              Log in
            </button>
            <button
              className={`${isScrolled ? "bg-blue-600 text-white" : "bg-white text-blue-900"} font-montserrat font-bold px-6 py-2 rounded-md transition-colors duration-200`}
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-gray hover:text-blue-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            isMobileMenuOpen ? "block" : "hidden"
          } mt-4 pb-4 `}
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-gray hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 w-full">
              Book Now
            </button>
            <button className="text-slate-gray hover:text-blue-600 border border-gray-300 px-4 py-2 rounded-md transition-colors duration-200 w-full">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

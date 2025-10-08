import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", href: "#home", type: "scroll" },
  { name: "About", href: "#about", type: "scroll" },
  { name: "Features", href: "#features", type: "scroll" },
  { name: "Contact", href: "#contact", type: "scroll" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img
            src="./logo.png"
            alt="TNS Trading Logo"
            className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="relative text-gray-300 hover:text-yellow-400 font-medium text-base transition-colors duration-300 group"
            >
              {item.name}
              {/* Underline effect */}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-gray-300 hover:text-yellow-400 transition-colors duration-300 relative z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl"></div>

          <div className="flex flex-col space-y-6 text-center relative z-10">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-2xl font-bold text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:scale-110 transform"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
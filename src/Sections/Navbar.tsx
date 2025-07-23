import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Beranda", href: "#hero" },
    { name: "Tentang", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Proyek", href: "#projects" },
    { name: "Kontak", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-24 py-4">
        <a
          href="#hero"
          className={`text-xl font-bold transition-colors duration-300 ${
            scrolled ? "text-blue-600" : "text-white"
          }`}
        >
          MTSetiawan
        </a>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-all duration-300 hover:scale-110 relative group ${
                scrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white hover:text-blue-300"
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`transition-colors duration-300 ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md px-6 pb-4 shadow-lg animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import { useEffect, useState } from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-12 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden"
      id="hero"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Text Section */}
      <div
        className={`flex-1 space-y-6 relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            MUHAMAD TEGAR SETIAWAN
          </span>{" "}
          <span className="inline-block animate-bounce">👋</span>
        </h1>
        <p className="text-lg text-blue-100 max-w-lg">
          Saya seorang pemula di bidang pengembang FullStack yang tinggal di
          [Jombang], dan saat ini belajar di perguruan tinggi.
        </p>

        <div className="flex items-center gap-4">
          <span className="text-blue-200 flex items-center gap-2">
            <span className="animate-ping w-2 h-2 bg-green-400 rounded-full"></span>
            📍 [Indonesia]
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="CV.MuhamadTegarSetiawan.pdf"
            download
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-blue-500/25"
          >
            Download CV
          </a>

          <div className="flex gap-4 text-2xl">
            <a
              href="https://github.com/MTSetiawan"
              target="_blank"
              className="hover:text-blue-300 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/mt.setiawan?igsh=MTRvaDRqdWkwdWNzeA=="
              target="_blank"
              className="hover:text-pink-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Profile Image */}
      <div
        className={`flex-1 mt-10 md:mt-0 flex justify-center relative z-10 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-lg animate-pulse"></div>
          <img
            src="/image.jpeg"
            alt="Profile Muhamad Tegar Setiawan"
            className="relative w-60 h-60 object-cover rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

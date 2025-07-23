import { FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      className="px-6 md:px-24 py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-center text-white relative overflow-hidden"
      id="contact"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="relative z-10">
        <p className="text-sm font-semibold text-blue-300 uppercase tracking-wider mb-2">
          Contact
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          Hubungi Saya
        </h2>
        <p className="text-blue-100 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
          Tertarik untuk bekerja sama atau sekadar ingin ngobrol? Jangan ragu
          untuk menghubungi saya melalui email atau media sosial berikut.
        </p>

        <a
          href="mailto:mt.dev022@email.com"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-blue-500/25 mb-12"
        >
          Kirim Email
        </a>

        <div className="flex justify-center gap-8 text-3xl">
          <a
            href="https://github.com/MTSetiawan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 hover:text-blue-300 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/mt.setiawan?igsh=MTRvaDRqdWkwdWNzeA=="
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 hover:text-pink-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

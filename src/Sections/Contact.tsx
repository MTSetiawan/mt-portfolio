import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section
      className="px-6 md:px-24 py-20 bg-white text-center text-black"
      id="contact"
    >
      <p className="text-sm font-semibold text-blue-600 uppercase">Contact</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Hubungi Saya</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-8">
        Tertarik untuk bekerja sama atau sekadar ingin ngobrol? Jangan ragu
        untuk menghubungi saya melalui email atau media sosial berikut.
      </p>

      {/* Tombol Kirim Email */}
      <a
        href="mailto:mt.dev@email.com"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition mb-8"
      >
        Kirim Email
      </a>

      {/* Social Media */}
      <div className="flex justify-center gap-6 mt-6 text-2xl text-gray-600">
        <a
          href="https://github.com/MTSetiawan"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/mt.setiawan?igsh=MTRvaDRqdWkwdWNzeA=="
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-600 transition"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
};

export default Contact;

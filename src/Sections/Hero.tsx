import { FaGithub, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-12 bg-white text-black"
      id="hero"
    >
      {/* Text Section */}
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold">
          Hi, I’m <span className="text-blue-600">MUHAMAD TEGAR SETIAWAN</span>{" "}
          👋
        </h1>
        <p className="text-lg text-gray-600 max-w-lg">
          Saya seorang pemula di bidang pengembang FullStack yang tinggal di
          [Jombang], dan saat ini belajar di perguruan tinggi.
        </p>

        <div className="flex items-center gap-4">
          <span className="text-gray-600">📍 [Indonesia]</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="CV.MuhamadTegarSetiawan.pdf.pdf"
            download
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Download CV
          </a>

          <div className="flex gap-4 text-2xl">
            <a
              href="https://github.com/MTSetiawan"
              target="_blank"
              className="hover:text-gray-800"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/mt.setiawan?igsh=MTRvaDRqdWkwdWNzeA=="
              target="_blank"
              className="hover:text-pink-400"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Profile Image */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        <img
          src="/image.jpeg"
          alt="Your Profile"
          className="w-60 h-60 object-cover rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;

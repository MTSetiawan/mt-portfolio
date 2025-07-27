import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Website pribadi yang saya bangun menggunakan React, Vite, dan TailwindCSS.",
      github: "https://github.com/MTSetiawan/mt-portfolio",
      image: "portfolio.png",
      stack: ["React", "Tailwind", "Typescript"],
    },
    {
      title: "Sosial Media Website",
      description:
        "Website yang mirip dengan sosial media, yang saya buat secara otodidak dengan bantuan AI.",
      github: "https://github.com/MTSetiawan/mtapp",
      image: "sosmed.png",
      stack: ["Nodejs", "Express", "Mysql", "React", "TailwindCSS"],
    },
    {
      title: "Movie App Laravel & Flutter",
      description:
        "Aplikasi Tugas Akhir yang mengintegrasikan Laravel sebagai backend dan Flutter sebagai frontend untuk menampilkan data film.",
      github: "https://github.com/MTSetiawan/movielist",
      image: "movie.png",
      stack: ["Laravel", "PHP", "MySQL", "Flutter"],
    },
    {
      title: "Pemesanan tiket kereta menggunakan python flask",
      description:
        "Aplikasi pemesanan tiket kereta api yang saya buat menggunakan Python Flask sebagai backend dan MySQL sebagai database.",
      github: "https://github.com/MTSetiawan/pemesanan-tiket-ka",
      image: "ka.png",
      stack: ["Flask", "MySQL"],
    },
    {
      title: "Horror Game Unity",
      description:
        "Tugas Akhir Game Development yang saya buat menggunakan Unity. Game ini mengusung tema horor yang saya buat secara berkelompok 3 orang.",
      github: "https://github.com/MTSetiawan/the-jawir-studio",
      image: "image.png",
      stack: ["Unity", "C#"],
    },
    {
      title: "MTrain - Aplikasi Pemesanan Tiket Kereta Fullstack",
      description:
        "Aplikasi pemesanan tiket kereta api fullstack yang saya buat menggunakan Laravel sebagai backend dan Nextjs sebagai frontend.",
      github: "https://github.com/MTSetiawan/booking-tiket",
      image: "Start.png",
      stack: ["Laravel", "Nextjs", "Mysql"],
    },
  ];

  return (
    <section
      className="px-6 md:px-24 py-20 bg-gradient-to-br from-gray-50 to-blue-50 text-black relative"
      id="projects"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-40 h-40 bg-blue-300/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-purple-300/20 rounded-full blur-2xl"></div>
      </div>

      <div className="text-center mb-16 relative z-10">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
          Projects
        </p>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Beberapa Proyek Saya
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Berikut adalah beberapa proyek yang telah saya kerjakan dan tersedia
          di GitHub.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6 flex flex-col justify-between h-64">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-4 space-y-4">
                <div className="flex gap-2 flex-wrap">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-3 py-1 rounded-full border border-blue-200/50 hover:from-blue-200 hover:to-purple-200 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-purple-600 font-medium group-hover:underline transition-all duration-300"
                >
                  <FaGithub className="transform group-hover:rotate-12 transition-transform duration-300" />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

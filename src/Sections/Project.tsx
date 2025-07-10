import React from "react";
import { FaGithub } from "react-icons/fa";

type Project = {
  title: string;
  description: string;
  github: string;
  image: string;
  stack: string[];
};

const projects: Project[] = [
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
];

const Projects: React.FC = () => {
  return (
    <section
      className="px-6 md:px-24 py-20 bg-gray-50 text-black"
      id="projects"
    >
      <div className="text-center mb-12">
        <p className="text-sm font-semibold text-blue-600 uppercase">
          Projects
        </p>
        <h2 className="text-3xl font-bold">Beberapa Proyek Saya</h2>
        <p className="mt-2 text-gray-600">
          Berikut adalah beberapa proyek yang telah saya kerjakan dan tersedia
          di GitHub.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-6 flex flex-col justify-between h-[220px]">
              <div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  {project.description}
                </p>
              </div>

              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-2 flex-wrap text-xs text-gray-500">
                  {project.stack.map((tech) => (
                    <span key={tech} className="bg-gray-200 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                >
                  <FaGithub /> GitHub
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

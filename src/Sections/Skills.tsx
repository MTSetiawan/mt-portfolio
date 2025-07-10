import React from "react";
import {
  SiNextdotjs,
  SiLaravel,
  SiReact,
  SiTailwindcss,
  SiMysql,
  SiUnity,
  SiFlask,
  SiFlutter,
  SiExpress,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiPython,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: (
      <SiHtml5 className="text-4xl text-gray-400 group-hover:text-orange-500 transition-colors duration-300" />
    ),
  },
  {
    name: "CSS3",
    icon: (
      <SiCss3 className="text-4xl text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
    ),
  },
  {
    name: "Python",
    custom: true,
    icon: (
      <SiPython className="text-4xl text-gray-400 group-hover:text-yellow-300 transition-colors duration-300" />
    ),
  },

  {
    name: "Next.js",
    icon: (
      <SiNextdotjs className="text-4xl text-gray-400 group-hover:text-black transition-colors duration-300" />
    ),
  },
  {
    name: "Express.js",
    icon: (
      <SiExpress className="text-4xl text-gray-400 group-hover:text-black transition-colors duration-300" />
    ),
  },
  {
    name: "Node.js",
    icon: (
      <SiNodedotjs className="text-4xl text-gray-400 group-hover:text-green-500 transition-colors duration-300" />
    ),
  },
  {
    name: "Laravel",
    icon: (
      <SiLaravel className="text-4xl text-gray-400 group-hover:text-red-600 transition-colors duration-300" />
    ),
  },
  {
    name: "React",
    icon: (
      <SiReact className="text-4xl text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <SiTailwindcss className="text-4xl text-gray-400 group-hover:text-teal-500 transition-colors duration-300" />
    ),
  },
  {
    name: "MySQL",
    icon: (
      <SiMysql className="text-4xl text-gray-400 group-hover:text-blue-700 transition-colors duration-300" />
    ),
  },
  {
    name: "Unity",
    icon: (
      <SiUnity className="text-4xl text-gray-400 group-hover:text-gray-800 transition-colors duration-300" />
    ),
  },
  {
    name: "Flask",
    icon: (
      <SiFlask className="text-4xl text-gray-400 group-hover:text-green-700 transition-colors duration-300" />
    ),
  },
  {
    name: "Flutter",
    icon: (
      <SiFlutter className="text-4xl text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
    ),
  },
];

const Skills: React.FC = () => {
  return (
    <section className="px-6 md:px-24 py-20 bg-white text-black" id="skills">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold text-blue-600 uppercase">Skills</p>
        <h2 className="text-3xl font-bold">Teknologi yang Saya Kuasai</h2>
        <p className="mt-2 text-gray-600">
          Berikut adalah tools dan framework yang biasa saya gunakan.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center group">
            <div
              className={`p-6 rounded-xl border border-gray-200 shadow transition-transform duration-300 transform group-hover:scale-110 group-hover:rotate-6 ${
                skill.custom ? "group-hover:bg-blue-600 bg-white" : "bg-white"
              }`}
            >
              {skill.icon}
            </div>
            <p className="mt-2 text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

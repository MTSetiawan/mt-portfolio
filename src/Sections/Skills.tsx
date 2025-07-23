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

const Skills = () => {
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

  return (
    <section
      className="px-6 md:px-24 py-20 bg-gradient-to-br from-white to-gray-50 text-black relative overflow-hidden"
      id="skills"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="text-center mb-16 relative z-10">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
          Skills
        </p>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Teknologi yang Saya Kuasai
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Berikut adalah tools dan framework yang biasa saya gunakan untuk
          menciptakan solusi digital yang inovatif.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center relative z-10">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="flex flex-col items-center group cursor-pointer"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative p-6 rounded-2xl bg-white shadow-lg border border-gray-100 transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 rounded-2xl transition-all duration-500"></div>
              <div className="relative z-10">{skill.icon}</div>
            </div>
            <p className="mt-3 text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

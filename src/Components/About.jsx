import React from "react";
import { motion } from "framer-motion";
import {  FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiWordpress, SiBootstrap, SiFigma} from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { FaCode } from "react-icons/fa"; // for OOP
import { GiBrain } from "react-icons/gi"; // for Problem Solving

function AboutUs() {
  const skills = [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "JavaScript", icon: IoLogoJavascript },
    { name: "React", icon: FaReact },
    { name: "TailwindCSS", icon: RiTailwindCssFill },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "GitHub", icon: FaGitAlt },
    { name: "Figma", icon: SiFigma },
     { name: "Node.js", icon: DiNodejs },
  { name: "WordPress", icon: SiWordpress },
  { name: "OOP", icon: FaCode },
  { name: "Problem Solving", icon: GiBrain },
  ];

  const experience = [
    {
      title: "Frontend Developer Intern",
      company: "Sisai Technology",
      duration: "2024",
      description:
        "Worked on frontend projects using React, JavaScript, and GitHub. Contributed to the company website and other client projects.",
    },
    {
      title: "College Projects",
      company: "BCA Final Semester",
      duration: "2025",
      description:
        "Built multiple web applications including e-commerce, portfolio sites, and AI-powered apps using React and TailwindCSS.",
    },
  ];

  return (
    <div id="about" className="max-w-screen-2xl mx-auto px-4 md:px-20 my-20">
      {/* About Me Section */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-bold text-green-500 mb-4 text-left">
          About Me
        </h1>
        <p className="text-gray-600 text-justify md:text-left max-w-3xl">
          Enthusiastic and self-motivated frontend developer with a strong
          foundation in HTML, CSS, JavaScript, React, TailwindCSS, and Bootstrap. Passionate about building responsive, interactive, and user-friendly web applications. Always eager to learn new technologies like TypeScript, Next.js, and Django to become a full-stack developer. Strong communication, critical thinking, and collaboration skills make me an effective team player ready to contribute to innovative projects.
        </p>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-semibold text-green-500 mb-6 text-left">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2, rotate: 5, color: "#22c55e" }}
                className="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition duration-300 cursor-pointer"
              >
                <Icon className="text-4xl mb-2" />
                <span className="font-medium">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-semibold text-green-500 mb-6 text-left">
          Experience 
        </h2>
        <div className="relative border-l-2 border-gray-200 ml-4">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              className="mb-8 ml-6 p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition duration-300 relative"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute -left-6 top-4 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              <h3 className="text-xl font-semibold text-gray-800">
                {exp.title} - {exp.company}
              </h3>
              <span className="text-gray-500 text-sm">{exp.duration}</span>
              <p className="text-gray-600 mt-2">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default AboutUs;

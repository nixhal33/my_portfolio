import React from "react";
import { motion } from "framer-motion";
import project1 from "../assets/Images/p1.png";
import project2 from "../assets/Images/p2.png";
import project3 from "../assets/Images/p3.png";
import project4 from "../assets/Images/p4.png";
import project5 from "../assets/Images/p5.png";
import project6 from "../assets/Images/p6.png";

function Projects() {
  // Add your projects here
  const projects = [
    {
      id: 1,
      title: "Babel Buddy - Medical AI Chatbot",
      description:
        "Babble Buddy is an AI-powered chatbot designed to provide users with easily accessible, non-judgmental and interactive support regarding breast cancer",
      image: project1, 
      github: "https://github.com/narendra-kumarr",
    },
    {
      id: 2,
      title: "TODO using Redux Toolkit",
      description:
        "I developed a Todo Application using React and Redux Toolkit to efficiently manage tasks with a clean and responsive UI. The app allows users to add, edit, and delete tasks while maintaining state management through Redux Toolkit’s slice-based architecture.",
      image: project2,
      github: "https://github.com/narendra-kumarr",
    },
    {
      id: 3,
      title: "Password Generator",
      description:
        "Developed a dynamic password generator that allows users to create secure, customizable passwords by selecting options such as length uppercase and lowercase letters, numbers, and special characters",
      image: project3,
      github: "https://github.com/narendra-kumarr",
    },
    {
      id: 4,
      title: "E-commerce Website",
      description:
        "It is an e-commerce website focused on selling eco-friendly paper products, such as paper bags and other sustainable goods. The platform aims to promote environmentally conscious shopping by offering a range of biodegradable and recyclable products",
      image: project4,
      github: "https://github.com/narendra-kumarr",
    },
    {
      id: 5,
      title: "Spotify Clone",
      description:
        "ADeveloped a Spotify clone replicating the platform’s design . Created an interactive music player with play, pause, and seek controls. Designed a fully responsive user interface for smooth experience across all devices. Demonstrated strong frontend skills by writing clean, well-structured code",
      image: project5,
      github: "https://github.com/narendra-kumarr",
    },
    {
      id: 6,
      title: "Currency Converter",
      description:
        "I built a Currency Converter Application using React and Redux Toolkit, integrated with a Currency API to provide real-time exchange rates. The app allows users to convert between multiple currencies instantly, with a simple and responsive interface.",
      image: project6,
      github: "https://github.com/narendra-kumarr",
    },
  ];

  return (
    <div id="projects" className="max-w-screen-2xl mx-auto px-6 md:px-20 my-20">
  {/* Heading */}
  <motion.div
    className="mb-12"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <h1 className="text-4xl font-bold text-green-500 text-left">
      My Projects
    </h1>
    <p className="text-gray-600 mt-2 text-left">
      Here are some of my projects showcasing my skills and experience.
    </p>
  </motion.div>

  {/* Projects Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {projects.map((project) => (
      <motion.div
        key={project.id}
        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
        whileHover={{ scale: 1.05 }}
      >
        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />

        {/* Project Content */}
        <div className="p-6 flex flex-col">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {project.title}
          </h2>
          <p className="text-gray-600 text-sm">{project.description}</p>

          {/* See More Button */}
          <motion.a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="mt-4 bg-green-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300 text-center"
            whileHover={{ scale: 1.05 }}
          >
            See More
          </motion.a>
        </div>
      </motion.div>
    ))}
  </div>
</div>

  );
}

export default Projects;

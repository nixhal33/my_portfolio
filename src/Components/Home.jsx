import React from "react";
import picture from "../assets/Images/walpaper.png";
import { FaFacebook, FaLinkedin, FaInstagram, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiBootstrap } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <div
        name="Home"
        id="home" 
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <motion.div
            className="md:w-1/2 mt-12 md:mt-24 space-y-4 order-2 md:order-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gray-700"
            >
              Welcome to my Feed
            </motion.span>

            <motion.div
              className="flex space-x-1 text-2xl md:text-4xl font-semibold"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            >
              <h1>Hello, I&apos;m a </h1>
              <ReactTyped
                className="text-green-500 bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </motion.div>

            <motion.p
              className="text-sm md:text-md text-justify text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              DevOps Engineer & Infrastructure Enthusiast. I am a self-motivated engineer dedicated to the "Infrastructure as Code" philosophy. I focus on bridging the gap between code and production by building automated, scalable, and resilient deployment pipelines. With a strong foundation in Linux environments and containerization, I specialize in optimizing the software development lifecycle through automation and rigorous troubleshooting. I thrive on solving complex configuration challenges and am passionate about moving beyond manual setups toward fully automated, "self-healing" systems.
            </motion.p>

            {/* Social media & Skills */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              {/* Social Media */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <h1 className="font-bold">Available on</h1>
                <ul className="flex space-x-5">
                  {[
                    { icon: <FaFacebook />, link: "https://www.https://www.facebook.com/Nixhalk" },
                    { icon: <FaLinkedin />, link: "https://www.https://www.linkedin.com/in/nischal-koirala-231ab824b/" },
                    { icon: <FaInstagram />, link: "https://www.instagram.com/filthy.nix" },
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      whileHover={{
                        scale: 1.2,
                        rotate: 5,
                        color: "#2563eb",
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="text-2xl cursor-pointer"
                    >
                      <a href={item.link} target="_blank" rel="noreferrer">
                        {item.icon}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Skills */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <h1 className="font-bold">Currently Working on</h1>
                <div className="flex space-x-5">
                  {[FaReact, IoLogoJavascript, RiTailwindCssFill, SiBootstrap].map(
                    (Icon, i) => (
                      <motion.div
                        key={i}
                        whileHover={{
                          scale: 1.2,
                          rotate: 8,
                          color: "#22c55e",
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icon className="text-xl md:text-3xl cursor-pointer" />
                      </motion.div>
                    )
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="md:w-1/2 md:ml-48 md:mt-10 order-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={picture}
              className="rounded-full md:w-[400px] md:h-[450px] shadow-lg"
              alt="Profile"
            />
          </motion.div>
        </div>
      </div>
      
    </>
  );
}

export default Home;

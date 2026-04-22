import React, { useState } from "react";
import pic from "../assets/Images/image.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll"; // ✅ Import react-scroll

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const Navitem = [
    { id: 1, text: "Home", link: "home" },
    { id: 2, text: "About", link: "about" },
    { id: 3, text: "Projects", link: "projects" },
    { id: 4, text: "Contact", link: "contact" },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md fixed top-0 left-0 right-0 bg-white z-50">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <motion.div className="flex space-x-2" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}>
          <motion.img src={pic} alt="logo" className="w-12 h-12 rounded-full" />
          <div>
            <h1 className="font-semibold text-xl cursor-pointer leading-tight">
              Narendr<span className="text-green-500 text-2xl">a</span>
            </h1>
            <p className="text-sm font-semibold text-gray-900">Web Developer</p>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div>
          <ul className="hidden md:flex space-x-8">
            {Navitem.map(({ id, text, link }) => (
              <li key={id} className="cursor-pointer font-medium">
                <Link
                  to={link}
                  smooth={true}
                  duration={500}
                  offset={-70} // adjust for navbar height
                  spy={true}
                  activeClass="text-green-500 font-bold"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? <IoCloseSharp size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div className="md:hidden flex flex-col items-center space-y-6 py-6 bg-white shadow-lg rounded-b-2xl">
            {Navitem.map(({ id, text, link }) => (
              <li key={id} className="cursor-pointer font-medium list-none">
                <Link
                  to={link}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setShowMenu(false)} // close menu after click
                >
                  {text}
                </Link>
              </li>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;

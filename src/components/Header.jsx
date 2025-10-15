import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import resumeFile from "../assets/header/resume.pdf";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const refreshPage = () => {
    window.location.reload();
  };

  const openResume = () => {
    if (resumeFile) {
      window.open(resumeFile, "_blank", "noopener,noreferrer");
    } else {
      alert("Resume file not found!");
    }
  };

  return (
    <header className="fixed w-full top-0 left-0 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-gray-900 dark:to-black text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        {/* LOGO */}
        <motion.div
          onClick={refreshPage}
          whileHover={{
            scale: 1.2,
            textShadow: "0px 0px 10px rgba(255,255,255,0.9)",
            boxShadow: "0px 0px 20px rgba(168,85,247,0.8)",
          }}
          whileTap={{ scale: 0.9, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-3xl font-extrabold tracking-wide cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-400 to-purple-600 drop-shadow-lg border-2 border-purple-400 px-3 py-1 rounded-lg"
          title="Click to refresh"
        >
          mcb
        </motion.div>

        {/* Navigation + Resume (centered together) */}
        <div className="flex items-center space-x-6">
          <nav className="flex space-x-6 md:space-x-8 items-center">
            <a href="#home" className="hover:underline hover:animate-pulse">Home</a>
            <a href="#skills" className="hover:underline hover:animate-pulse">Skills</a>
            <a href="#projects" className="hover:underline hover:animate-pulse">Projects</a>
            <a href="#achievements" className="hover:underline hover:animate-pulse">Achievements</a>
            <a href="#contact" className="hover:underline hover:animate-pulse">Contact</a>

            {/* Resume button next to navigation */}
            <motion.button
              onClick={openResume}
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(168,85,247,0.8)" }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 bg-gradient-to-r from-pink-400 to-pink-300 text-white font-semibold rounded-full shadow-md border-2 border-transparent hover:border-purple-600 transition-all duration-300"
            >
              Resume
            </motion.button>
          </nav>
        </div>

        {/* Light/Dark Toggle (far right) */}
        <motion.button
          onClick={() => setDarkMode(!darkMode)}
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(255,255,255,0.6)" }}
          whileTap={{ scale: 0.95, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="px-3 py-1 bg-white text-purple-600 font-semibold rounded shadow-md"
        >
          {darkMode ? "Dark" : "Light"}
        </motion.button>

        {/* Mobile menu toggle */}
        <div className="flex items-center space-x-2 md:hidden">
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="text-white bg-purple-700 dark:bg-gray-700 px-2 py-1 rounded"
          >
            ☰
          </motion.button>

          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(255,255,255,0.6)" }}
            whileTap={{ scale: 0.95, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="px-3 py-1 bg-white text-purple-600 font-semibold rounded shadow-md"
          >
            {darkMode ? "Dark" : "Light"}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.nav
          className="flex flex-col space-y-4 p-4 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-gray-900 dark:to-black md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#achievements" onClick={() => setMenuOpen(false)}>Achievements</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <button
            onClick={() => { openResume(); setMenuOpen(false); }}
            className="px-4 py-2 bg-gradient-to-r from-pink-400 to-pink-300 text-white font-semibold rounded-full shadow-md border-2 border-transparent hover:border-purple-600 transition-all duration-300"
          >
            Resume
          </button>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;

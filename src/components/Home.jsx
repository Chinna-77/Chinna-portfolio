import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Home = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  // ✅ Opens Gmail compose page with your email
  const handleEmailClick = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=mamidichinna7@gmail.com&su=Contact%20from%20Portfolio&body=Hi%20Chinnababu,%0D%0A%0D%0AI%20would%20like%20to%20connect%20with%20you!",
      "_blank"
    );
  };

  return (
    <motion.section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-purple-100 via-pink-100 to-pink-200 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white px-6 relative pt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={fadeInUp}
    >
      <div className="max-w-3xl text-center md:text-left space-y-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          variants={fadeInUp}
          whileHover={{ scale: 1.05, color: "#9333ea" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Hi, my name is <span className="text-purple-600">Chinnababu M</span>
        </motion.h1>

        <motion.h2
          className="text-3xl md:text-5xl font-semibold text-gray-700 dark:text-gray-300"
          variants={fadeInUp}
          whileHover={{ scale: 1.05, color: "#ec4899" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          I build things for the web.
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          I’m an Electronics and Communication student passionate about
          software development. I love combining hardware and programming to
          create innovative, efficient, and user-friendly applications while
          continuously exploring new technologies.
        </motion.p>

        <motion.a
          href="https://github.com/chinna-77"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-6 px-6 py-3 border-2 border-purple-600 text-purple-600 dark:text-white font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
        >
          Check my works →
        </motion.a>
      </div>

      {/* --- Social Icons (left side desktop only) --- */}
      <motion.div
        className="hidden md:flex flex-col items-center space-y-5 absolute left-6 bottom-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.6 } }}
      >
        {/* GitHub */}
        <motion.a
          href="https://github.com/chinna-77"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.3,
            rotate: 10,
            textShadow: "0px 0px 10px rgba(147,51,234,0.8)",
          }}
          className="text-gray-700 dark:text-gray-300 hover:text-purple-600 text-2xl"
        >
          <FaGithub />
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/chinnababu-m-84a149299"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.3,
            rotate: 10,
            textShadow: "0px 0px 10px rgba(59,130,246,0.8)",
          }}
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 text-2xl"
        >
          <FaLinkedin />
        </motion.a>

        {/* ✅ Email (Works perfectly now + hover animation) */}
        <motion.div
          onClick={handleEmailClick}
          whileHover={{
            scale: 1.3,
            rotate: 10,
            color: "#ef4444",
            textShadow: "0px 0px 15px rgba(239,68,68,0.8)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
          className="cursor-pointer text-gray-700 dark:text-gray-300 text-2xl"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <FaEnvelope />
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute left-8 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg shadow-md"
            >
              Email Me 📧
            </motion.div>
          )}
        </motion.div>

        <div className="w-[2px] h-20 bg-gray-400 mt-3"></div>
      </motion.div>
    </motion.section>
  );
};

export default Home;

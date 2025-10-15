import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    title: "Frontend",
    color: "from-pink-500 to-red-400",
    items: ["HTML", "CSS", "React / Angular", "Flutter"],
  },
  {
    title: "Backend",
    color: "from-green-500 to-emerald-400",
    items: ["Firebase", "Python", "JavaScript", "Supabase"],
  },
  {
    title: "Tools",
    color: "from-purple-500 to-indigo-400",
    items: ["VS Code", "Git & GitHub", "Android Studio", "UI Path"],
  },
  {
    title: "Languages",
    color: "from-yellow-400 to-orange-400",
    items: ["Python", "Dart", "HTML / CSS", "JavaScript"],
  },
];

const Skills = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { when: "beforeChildren", staggerChildren: 0.2, duration: 0.6 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 12 },
    },
  };

  return (
    <motion.section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 py-20 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={sectionVariants}
    >
      {/* --- FIXED Animated Gradient Background --- */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(-45deg, #ffdee9, #b5fffc, #f8c6ff, #e4fbff)",
          backgroundSize: "400% 400%",
          animation: "gradientMove 15s ease infinite",
          transition: "background 0.5s ease-in-out",
        }}
      ></div>

      {/* --- Dark Mode Overlay --- */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-black opacity-0 dark:opacity-100 transition-opacity duration-500 z-0"></div>

      {/* --- Title --- */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold mb-12 text-gray-800 dark:text-white text-center z-10 relative"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h2>

      {/* --- Skills Grid --- */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl z-10 relative"
        variants={sectionVariants}
      >
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className={`rounded-2xl p-6 sm:p-8 text-white shadow-lg cursor-pointer 
                        bg-gradient-to-br ${skill.color} flex flex-col items-center 
                        transition-transform duration-300`}
            variants={cardVariants}
            whileHover={{
              scale: 1.07,
              rotate: 2,
              boxShadow: "0px 0px 30px rgba(255,255,255,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">
              {skill.title}
            </h3>
            <ul className="space-y-2 text-center text-base sm:text-lg font-medium">
              {skill.items.map((item, idx) => (
                <motion.li
                  key={idx}
                  className="bg-white/20 rounded-lg py-2 px-3 hover:bg-white/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* --- Gradient Animation Keyframes --- */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </motion.section>
  );
};

export default Skills;

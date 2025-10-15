import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

// Import your images
import fairamount from "../assets/projects/fairamount.jpg";
import healthcare from "../assets/projects/healthcare.png";
import solartracking from "../assets/projects/solartracking.jpg";
import lightmonitor from "../assets/projects/lightmonitor.jpg";

const projects = [
  {
    id: 1,
    name: "Fair Amount",
    image: fairamount,
    description:
      "Fair Amount is a fully functional Android app that allows users to verify GST amounts from any bill by simply entering the GST percentage. It provides instant, accurate results ensuring transparency in billing.",
    github: "https://github.com/Chinna-77/Fair-Amount-Android-app",
  },
  {
    id: 2,
    name: "Data Wiring in Healthcare System",
    image: healthcare,
    description:
      "An automated UiPath system that reads patient data from Excel, calculates BMI, and updates results automatically. A complete hands-free automation for hospital data processing.",
    github: "https://github.com/Chinna-77/Data-Wiring-in-HealthCare-systems",
  },
  {
    id: 3,
    name: "Dual Axis Solar Tracking System",
    image: solartracking,
    description:
      "An embedded project that improves solar panel efficiency by dynamically adjusting angles based on sunlight direction using LDRs, humidity, and temperature sensors. It automatically tilts to 90° during rain for protection, and software integration via Supabase ensures logging and monitoring. The project combines hardware precision with intelligent software to optimize solar power output throughout the day, enhancing renewable energy usage.",
  },
  {
    id: 4,
    name: "Light Intensity Monitor",
    image: lightmonitor,
    description:
      "A real-time embedded system that monitors ambient light and warns vehicle drivers about low visibility due to fog or pollution. The system uses sensors to detect light intensity and provides visual and audio cues for drivers to slow down and drive safely, especially in early mornings or high-pollution areas. This project significantly contributes to road safety in hazardous conditions.",
  },
];

const fadeSlide = (direction) => ({
  hidden: { opacity: 0, x: direction === "left" ? -80 : 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
});

const Projects = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => setExpanded(expanded === id ? null : id);

  return (
    <section
      id="projects"
      className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white py-20 px-6 overflow-hidden"
    >
      <motion.h2
        className="text-4xl font-bold text-purple-700 dark:text-purple-400 mb-16 text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      <div className="w-full max-w-6xl space-y-16">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            variants={fadeSlide(idx % 2 === 0 ? "left" : "right")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className={`flex flex-col md:flex-row items-center gap-8`}
          >
            {/* Project Image */}
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(168,85,247,0.6)" }}
              transition={{ duration: 0.3 }}
              className="relative w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg border-2 border-transparent hover:border-purple-400 bg-white/10 dark:bg-gray-800/30"
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-2xl"
                />
              ) : (
                <div className="p-10 text-center">{project.name}</div>
              )}

              {/* GitHub Icon */}
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 z-20 text-4xl text-gray-800 dark:text-white"
                  whileHover={{
                    scale: 1.4,
                    rotate: 15,
                    textShadow: "0 0 15px rgba(147,51,234,0.8)",
                    color: "#9333ea",
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    textShadow: [
                      "0 0 8px rgba(147,51,234,0.4)",
                      "0 0 15px rgba(236,72,153,0.6)",
                      "0 0 8px rgba(147,51,234,0.4)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FaGithub />
                </motion.a>
              )}
            </motion.div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-semibold mb-3 text-purple-700 dark:text-purple-400"
              >
                {project.name}
              </motion.h3>
              <motion.p whileHover={{ scale: 1.02 }} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {expanded === project.id
                  ? project.description
                  : project.description.slice(0, 140) + "..."}
              </motion.p>

              {project.description.length > 140 && (
                <motion.button
                  onClick={() => toggleExpand(project.id)}
                  whileHover={{
                    scale: 1.15,
                    color: "#9333ea",
                    textShadow: "0px 0px 10px rgba(168,85,247,0.8)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="mt-2 text-purple-600 dark:text-purple-400 font-semibold underline"
                >
                  {expanded === project.id ? "View Less" : "View More"}
                </motion.button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

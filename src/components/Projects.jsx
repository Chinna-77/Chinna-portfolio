import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

// Images
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

const Projects = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => setExpanded(expanded === id ? null : id);

  return (
    <motion.section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:to-black py-20 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-4xl font-bold mb-16 text-gray-800 dark:text-white"
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      <div className="flex flex-col gap-20 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`relative flex flex-col md:flex-row items-center justify-between rounded-2xl shadow-xl overflow-hidden bg-white dark:bg-gray-800 p-6 transition-all duration-700 hover:shadow-purple-500/60 ${
              index % 2 === 0
                ? "md:ml-[15%] md:mr-[25%]"
                : "md:ml-[25%] md:mr-[15%]"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -250 : 250 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 20,
              duration: 1.2,
            }}
            whileHover={{
              scale: 1.03,
              boxShadow:
                "0 0 25px rgba(168, 85, 247, 0.4), 0 0 45px rgba(236, 72, 153, 0.4)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Image Section */}
            <div className="relative w-full md:w-1/2 h-64 rounded-xl overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = "none";
                    e.target.parentNode.innerHTML = `<div class='text-xl font-semibold text-gray-700 dark:text-gray-300 flex justify-center items-center h-full'>${project.name}</div>`;
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              ) : (
                <div className="flex justify-center items-center h-full text-xl text-gray-700 dark:text-gray-300 font-semibold">
                  {project.name}
                </div>
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
            </div>

            {/* Text Section */}
            <div className="mt-6 md:mt-0 md:w-1/2 px-4 flex flex-col justify-center space-y-4">
              <motion.h3
                className="text-2xl font-bold text-purple-700 dark:text-purple-400"
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 10px rgba(147,51,234,0.6)",
                }}
              >
                {project.name}
              </motion.h3>

              {project.github ? (
                <motion.p
                  className="text-gray-700 dark:text-gray-300 leading-relaxed"
                  whileHover={{
                    scale: 1.03,
                    textShadow: "0 0 8px rgba(168,85,247,0.4)",
                  }}
                >
                  {project.description}
                </motion.p>
              ) : (
                <>
                  <motion.div
                    initial={{
                      height: expanded === project.id ? "auto" : 60,
                      opacity: expanded === project.id ? 1 : 0.9,
                    }}
                    animate={{
                      height: expanded === project.id ? "auto" : 60,
                      opacity: expanded === project.id ? 1 : 0.9,
                    }}
                    className="overflow-hidden"
                  >
                    <motion.p
                      className="text-gray-700 dark:text-gray-300 leading-relaxed"
                      whileHover={{
                        scale: 1.03,
                        textShadow: "0 0 8px rgba(168,85,247,0.4)",
                      }}
                    >
                      {expanded === project.id
                        ? project.description
                        : project.description.slice(0, 140) + "..."}
                    </motion.p>
                  </motion.div>

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
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;

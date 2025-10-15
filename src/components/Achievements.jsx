import React, { useRef, useEffect, useCallback } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

// Import certificate and course images
import projectExpo from "../assets/certificates/project-expo.jpg";
import sensorsActuators from "../assets/certificates/sensors-actuators.jpg";
import uiDeveloper from "../assets/certificates/ui-developer.jpg";
import iotSystems from "../assets/certificates/iot-systems.jpg";

// Import 10 more certificates dynamically
const moreCertificates = Array.from({ length: 10 }, (_, i) => {
  try {
    return require(`../assets/certificates/certificate${i + 1}.jpg`);
  } catch {
    return null;
  }
});

const fadeSlide = (direction) => ({
  hidden: { opacity: 0, x: direction === "left" ? -80 : 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
});

const Achievements = () => {
  const sliderRef = useRef(null);
  const x = useMotionValue(0);
  const animationRef = useRef(null);
  const speed = 120; // pixels per second

  const startSlider = useCallback(() => {
    if (!sliderRef.current) return;
    const sliderWidth = sliderRef.current.scrollWidth / 2;

    const animateSlider = () => {
      const currentX = x.get();
      const remainingDistance = sliderWidth - Math.abs(currentX % sliderWidth);
      const duration = remainingDistance / speed;

      animationRef.current = animate(x, currentX - remainingDistance, {
        duration,
        ease: "linear",
        onUpdate: (latest) => {
          if (Math.abs(latest) >= sliderWidth) {
            x.set(latest + sliderWidth); // seamless loop
          }
        },
        onComplete: animateSlider,
      });
    };

    animateSlider();
  }, [x, speed]);

  const pauseSlider = () => {
    if (animationRef.current) animationRef.current.stop();
  };

  useEffect(() => {
    startSlider();
    return pauseSlider;
  }, [startSlider]);

  const achievements = [
    {
      title: "Project Expo",
      image: projectExpo,
      desc: "Won second prize in Project Expo conducted at REC Symposium for the Dual Axis Solar Tracking System and Weather Monitoring project.",
    },
    {
      title: "Sensors and Actuators",
      image: sensorsActuators,
      desc: "Completed the NPTEL course on Sensors and Actuators, gaining strong knowledge on embedded interfacing, automation, and practical applications.",
    },
  ];

  const courses = [
    {
      title: "UI Developer - ICT Academy",
      image: uiDeveloper,
      desc: "Completed the UI Developer course by ICT Academy with an A grade. Learned front-end design principles, responsive UI building, and modern frameworks.",
    },
    {
      title: "IoT Systems - Spark Invotech",
      image: iotSystems,
      desc: "Completed an internship in IoT systems at Spark Invotech. Developed a real-time environmental monitoring system using sensors, controllers, and cloud APIs.",
    },
  ];

  return (
    <section
      id="achievements"
      className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white py-20 px-6 overflow-hidden"
    >
      <motion.h2
        className="text-4xl font-bold text-purple-700 dark:text-purple-400 mb-16 text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Achievements
      </motion.h2>

      <div className="w-full max-w-6xl space-y-16">
        {/* Certificates */}
        {achievements.map((item, idx) => (
          <motion.div
            key={idx}
            variants={fadeSlide(idx % 2 === 0 ? "left" : "right")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className={`flex flex-col md:flex-row items-center ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            } gap-8`}
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(168,85,247,0.6)" }}
              transition={{ duration: 0.3 }}
              className="relative w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg border-2 border-transparent hover:border-purple-400 bg-white/10 dark:bg-gray-800/30"
            >
              {item.image ? (
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover rounded-2xl" />
              ) : (
                <div className="p-10 text-center">{item.title}</div>
              )}
            </motion.div>

            <div className="w-full md:w-1/2 text-center md:text-left">
              <motion.h3 whileHover={{ scale: 1.05 }} className="text-2xl font-semibold mb-3 text-purple-700 dark:text-purple-400">
                {item.title}
              </motion.h3>
              <motion.p whileHover={{ scale: 1.02 }} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.desc}
              </motion.p>
            </div>
          </motion.div>
        ))}

        {/* Courses */}
        <motion.h2
          className="text-3xl font-bold text-purple-700 dark:text-purple-400 text-center mt-20 mb-10 underline decoration-purple-400 underline-offset-8"
          whileHover={{ scale: 1.05 }}
        >
          Courses
        </motion.h2>

        {courses.map((course, idx) => (
          <motion.div
            key={idx}
            variants={fadeSlide(idx % 2 === 0 ? "left" : "right")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className={`flex flex-col md:flex-row items-center ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            } gap-8`}
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(168,85,247,0.6)" }}
              transition={{ duration: 0.3 }}
              className="relative w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg border-2 border-transparent hover:border-purple-400 bg-white/10 dark:bg-gray-800/30"
            >
              {course.image ? (
                <img src={course.image} alt={course.title} className="w-full h-64 object-cover rounded-2xl" />
              ) : (
                <div className="p-10 text-center">{course.title}</div>
              )}
            </motion.div>

            <div className="w-full md:w-1/2 text-center md:text-left">
              <motion.h3 whileHover={{ scale: 1.05 }} className="text-2xl font-semibold mb-3 text-purple-700 dark:text-purple-400">
                {course.title}
              </motion.h3>
              <motion.p whileHover={{ scale: 1.02 }} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {course.desc}
              </motion.p>
            </div>
          </motion.div>
        ))}

        {/* Continuous Responsive Slider */}
        <motion.h2
          className="text-3xl font-bold text-purple-700 dark:text-purple-400 text-center mt-20 mb-10 underline decoration-purple-400 underline-offset-8"
          whileHover={{ scale: 1.05 }}
        >
          Few More Certifications
        </motion.h2>

        <div className="w-full overflow-hidden" onMouseEnter={pauseSlider} onMouseLeave={startSlider}>
          <motion.div
            ref={sliderRef}
            className="flex w-max space-x-4 md:space-x-6"
            style={{ x }}
          >
            {moreCertificates.concat(moreCertificates).map((cert, idx) => (
              <motion.div
                key={idx}
                className="flex-shrink-0 w-36 sm:w-44 md:w-52 h-28 sm:h-32 md:h-36 rounded-xl overflow-hidden shadow-md border border-transparent hover:border-purple-400 bg-white/10 dark:bg-gray-800/30"
                whileHover={{ scale: 1.15, boxShadow: "0px 0px 30px rgba(168,85,247,0.6)" }}
                transition={{ duration: 0.4 }}
              >
                {cert ? (
                  <img src={cert} alt={`Certificate ${idx + 1}`} className="w-full h-full object-cover rounded-xl" />
                ) : (
                  <div className="p-5 sm:p-7 text-center">Certificate {idx + 1}</div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

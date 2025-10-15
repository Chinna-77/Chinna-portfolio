import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // new state for exact error
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!/^[A-Za-z\s]+$/.test(formData.name))
      newErrors.name = "Please enter a valid name.";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email.";
    if (formData.message.trim().length < 5)
      newErrors.message = "Please enter a longer message.";
    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setStatus("");
    setErrorMessage("");

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    emailjs
      .send(
        "service_9aheoio", // your service ID
        "template_wm67pdi", // your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "DQ5RNUj3Qp6S4q2Vl" // your public key
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response.status, response.text);
          setLoading(false);
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setStatus(""), 5000);
        },
        (error) => {
          console.error("Email sending failed:", error);
          setLoading(false);
          setStatus("error");
          // Show the exact error returned by EmailJS
          setErrorMessage(
            error?.text ||
              error?.message ||
              "Unknown error. Check your EmailJS configuration."
          );
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen flex flex-col justify-between px-6 py-16 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Main content */}
      <div className="flex flex-col items-center flex-grow">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-10 text-center"
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Get In Touch
        </motion.h2>

        <motion.form
          onSubmit={sendEmail}
          className="w-full max-w-lg bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-purple-400/40"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Name */}
          <motion.div className="mb-6" whileHover={{ scale: 1.03 }}>
            <label className="block mb-2 font-semibold">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="w-full p-3 rounded-lg border border-purple-400/60 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
          </motion.div>

          {/* Email */}
          <motion.div className="mb-6" whileHover={{ scale: 1.03 }}>
            <label className="block mb-2 font-semibold">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full p-3 rounded-lg border border-purple-400/60 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </motion.div>

          {/* Message */}
          <motion.div className="mb-6" whileHover={{ scale: 1.03 }}>
            <label className="block mb-2 font-semibold">Your Message</label>
            <textarea
              name="message"
              placeholder="Hello! I'm interested in connecting — let's create something amazing together or discuss potential opportunities."
              className="w-full p-3 h-32 rounded-lg border border-purple-400/60 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
            )}
          </motion.div>

          {/* Status Message */}
          {status === "success" && (
            <motion.div
              className="text-center text-green-400 font-semibold mb-4"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                textShadow: [
                  "0 0 5px #22c55e",
                  "0 0 10px #22c55e",
                  "0 0 5px #22c55e",
                ],
              }}
              transition={{
                duration: 2,
                repeat: 1,
                repeatType: "reverse",
              }}
            >
              ✅ Message sent successfully! I’ll get back to you soon.
            </motion.div>
          )}
          {status === "error" && (
            <motion.div
              className="text-center text-red-400 font-semibold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ❌ Failed to send message.
              {errorMessage && <span> ({errorMessage})</span>}
            </motion.div>
          )}

          {/* Send Button */}
          <motion.button
            type="submit"
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 20px rgba(168,85,247,0.6)",
            }}
            whileTap={{ scale: 0.9 }}
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 flex justify-center items-center"
          >
            {loading ? (
              <motion.div
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                transition={{ repeat: Infinity, duration: 1 }}
              ></motion.div>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </motion.form>
      </div>

      {/* Footer */}
      <motion.footer
        className="w-full text-center py-4 bg-black text-gray-300 text-sm mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        whileHover={{
          scale: 1.05,
          textShadow: "0px 0px 8px rgba(255,255,255,0.6)",
        }}
      >
        © Chinnababu M 2025
      </motion.footer>
    </motion.section>
  );
};

export default Contact;

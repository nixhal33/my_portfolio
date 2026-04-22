import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lr59pcn",   // your Service ID
        "template_kk38ec7",  // your Template ID
        form.current,
        "veCWeXHjzdGgTlNfi" // your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
          e.target.reset(); // clear form
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      {/* Heading */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-bold text-green-500">Contact Me</h1>
        <p className="text-gray-600 mt-2">
          Feel free to contact me for any project collaboration or inquiries.
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col space-y-4 bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="p-3 border border-gray-300 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <motion.button
          type="submit"
          className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>

        {messageSent && (
          <motion.p
            className="text-green-600 font-medium mt-2 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Your message has been sent successfully!
          </motion.p>
        )}
      </motion.form>
    </div>
  );
}

export default Contact;

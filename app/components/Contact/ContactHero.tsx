"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden py-20 bg-[#f9fafb]">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute right-0 top-0 w-64 h-64 rounded-full opacity-10"
          style={{
            backgroundColor: "#1075BB",
            transform: "translate(30%, -30%)",
          }}
        ></div>
        <div
          className="absolute left-0 bottom-0 w-96 h-96 rounded-full opacity-10"
          style={{
            backgroundColor: "#30C86B",
            transform: "translate(-30%, 30%)",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <div
              className="inline-flex items-center gap-2 py-1 px-3 rounded-full text-sm font-medium"
              style={{ backgroundColor: "#EBF8FF", color: "#1075BB" }}
            >
              Get In Touch
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "#1075BB" }}
          >
            Contact Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-8"
            style={{ color: "#4B5563" }}
          >
            Have questions about our programs or how you can get involved?
            We&apos;d love to hear from you.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;

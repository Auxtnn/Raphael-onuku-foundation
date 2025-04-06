"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const RegisterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="register" ref={ref} className="py-10 bg-[#f9fafb]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10" style={{ backgroundColor: "#30C86B" }}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.7 }}
                >
                  <h2 className="text-3xl font-bold mb-6 text-white">
                    Register for Digital Literacy Training
                  </h2>
                  <p className="text-white/90 mb-8">
                    Our digital literacy program is open to all Nigerian youth
                    with limited or no prior computer experience. Registration
                    is free, and training materials are provided.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 p-1 rounded-full bg-white/20 mr-3">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 13L9 17L19 7"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-white/90">
                        No prior computer experience needed
                      </p>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 p-1 rounded-full bg-white/20 mr-3">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 13L9 17L19 7"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-white/90">
                        Training materials provided
                      </p>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 p-1 rounded-full bg-white/20 mr-3">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 13L9 17L19 7"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-white/90">
                        Flexible scheduling options
                      </p>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 p-1 rounded-full bg-white/20 mr-3">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 13L9 17L19 7"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-white/90">
                        Certificate upon completion
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="p-10">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                  }
                  transition={{ duration: 0.7 }}
                >
                  <h3
                    className="text-xl font-bold mb-6"
                    style={{ color: "#111827" }}
                  >
                    Registration Form
                  </h3>

                  <form className="space-y-6">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block mb-2 font-medium text-[#374151]"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:outline-none focus:ring-2 focus:ring-[#30C86B]"
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 font-medium text-[#374151]"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:outline-none focus:ring-2 focus:ring-[#30C86B]"
                        placeholder="Your email address"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block mb-2 font-medium text-[#374151]"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:outline-none focus:ring-2 focus:ring-[#30C86B]"
                        placeholder="Your phone number"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="experience"
                        className="block mb-2 font-medium text-[#374151]"
                      >
                        Computer Experience Level
                      </label>
                      <select
                        id="experience"
                        className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:outline-none focus:ring-2 focus:ring-[#30C86B]"
                        required
                      >
                        <option value="" disabled selected>
                          Select your experience level
                        </option>
                        <option value="none">No prior experience</option>
                        <option value="basic">Basic familiarity</option>
                        <option value="intermediate">
                          Some experience but need more training
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="training"
                        className="block mb-2 font-medium text-[#374151]"
                      >
                        Preferred Training
                      </label>
                      <select
                        id="training"
                        className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:outline-none focus:ring-2 focus:ring-[#30C86B]"
                        required
                      >
                        <option value="" disabled selected>
                          Select a training option
                        </option>
                        <option value="basic">
                          Basic Computer Skills Workshop (June 15-16)
                        </option>
                        <option value="office">
                          Microsoft Office Intensive (July 10-12)
                        </option>
                        <option value="internet">
                          Internet Safety & Research Skills (August 5)
                        </option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-3 rounded-lg text-white font-medium transition-all duration-300"
                      style={{ backgroundColor: "#30C86B" }}
                    >
                      Submit Registration
                    </button>
                  </form>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;

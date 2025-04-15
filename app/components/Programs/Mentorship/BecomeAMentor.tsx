"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const BecomeMentor = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="find-mentor" ref={ref} className="py-10 bg-[#f9fafb]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.7 }}
            >
              <h2
                className="text-3xl font-bold mb-6"
                style={{ color: "#1075BB" }}
              >
                Find a Mentor
              </h2>

              <p className="text-lg mb-6" style={{ color: "#4B5563" }}>
                Connect with experienced professionals who can guide you on your
                educational and career journey. Our mentors are committed to
                helping young Nigerians develop skills, gain confidence, and
                achieve their goals.
              </p>

              <h3
                className="text-xl font-semibold mb-4"
                style={{ color: "#111827" }}
              >
                Benefits of Having a Mentor:
              </h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div
                    className="flex-shrink-0 p-1 rounded-full mr-3 mt-1"
                    style={{ backgroundColor: "rgba(16, 117, 187, 0.1)" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13L9 17L19 7"
                        stroke="#1075BB"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p style={{ color: "#4B5563" }}>
                    Personalized guidance from industry professionals
                  </p>
                </li>
                <li className="flex items-start">
                  <div
                    className="flex-shrink-0 p-1 rounded-full mr-3 mt-1"
                    style={{ backgroundColor: "rgba(16, 117, 187, 0.1)" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13L9 17L19 7"
                        stroke="#1075BB"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p style={{ color: "#4B5563" }}>
                    Access to networks and opportunities
                  </p>
                </li>
                <li className="flex items-start">
                  <div
                    className="flex-shrink-0 p-1 rounded-full mr-3 mt-1"
                    style={{ backgroundColor: "rgba(16, 117, 187, 0.1)" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13L9 17L19 7"
                        stroke="#1075BB"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p style={{ color: "#4B5563" }}>
                    Support in setting and achieving educational goals
                  </p>
                </li>
                <li className="flex items-start">
                  <div
                    className="flex-shrink-0 p-1 rounded-full mr-3 mt-1"
                    style={{ backgroundColor: "rgba(16, 117, 187, 0.1)" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13L9 17L19 7"
                        stroke="#1075BB"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p style={{ color: "#4B5563" }}>
                    Development of crucial professional and life skills
                  </p>
                </li>
              </ul>

              <div className="bg-blue-50 p-4 rounded-lg mb-8">
                <p className="text-sm italic" style={{ color: "#1075BB" }}>
                  &quot;A mentor is someone who allows you to see the hope
                  inside yourself and helps you navigate the path to reach your
                  potential.&quot;
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3
                className="text-xl font-bold mb-6 text-center"
                style={{ color: "#1075BB" }}
              >
                Mentor Request Form
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
                    className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:outline-none focus:ring-2 focus:ring-[#1075B]"
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
                    className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:outline-none focus:ring-2 focus:ring-[#1075B]"
                    placeholder="Your email address"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="education"
                    className="block mb-2 font-medium text-[#374151]"
                  >
                    Current Education Level
                  </label>
                  <select
                    id="education"
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:outline-none focus:ring-2 focus:ring-[#1075B]"
                    required
                  >
                    <option value="" disabled>
                      Select your education level
                    </option>
                    <option value="secondary">Secondary School</option>
                    <option value="undergraduate">Undergraduate</option>
                    <option value="graduate">Graduate/Postgraduate</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="block mb-2 font-medium text-[#374151]"
                  >
                    Area of Interest
                  </label>
                  <input
                    type="text"
                    id="interest"
                    className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:outline-none focus:ring-2 focus:ring-[#1075B]"
                    placeholder="e.g., Science, Technology, Business"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="goals"
                    className="block mb-2 font-medium text-[#374151]"
                  >
                    What are your goals for mentorship?
                  </label>
                  <textarea
                    id="goals"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:outline-none focus:ring-2 focus:ring-[#1075B]"
                    placeholder="Tell us about your educational/career goals and what you hope to gain from mentorship"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg text-white font-medium transition-all duration-300"
                  style={{ backgroundColor: "#1075BB" }}
                >
                  Submit Request
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeMentor;

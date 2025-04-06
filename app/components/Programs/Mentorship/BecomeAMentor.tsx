"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const BecomeMentor = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="become-mentor" ref={ref} className="py-10 bg-[#f9fafb]">
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
                Become a Mentor
              </h2>

              <p className="text-lg mb-6" style={{ color: "#4B5563" }}>
                Share your knowledge, skills, and experience to help shape the
                future of young Nigerians. By becoming a mentor, you&apos;ll
                make a lasting impact on a young person&apos;s life while
                developing your own leadership abilities.
              </p>

              <h3
                className="text-xl font-semibold mb-4"
                style={{ color: "#111827" }}
              >
                What We Look For:
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
                    Professional experience in your field
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
                    Commitment to youth development
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
                    Good communication and listening skills
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
                    Ability to commit at least 4 hours per month
                  </p>
                </li>
              </ul>

              <div className="bg-blue-50 p-4 rounded-lg mb-8">
                <p className="text-sm italic" style={{ color: "#1075BB" }}>
                  &quot;Being a mentor isn&apos;t just about giving advice;
                  it&apos;s about believing in someone&apos;s potential and
                  helping them see it for themselves.&quot;
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
                Mentor Application Form
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
                    htmlFor="profession"
                    className="block mb-2 font-medium text-[#374151]"
                  >
                    Profession/Area of Expertise
                  </label>
                  <input
                    type="text"
                    id="profession"
                    className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:outline-none focus:ring-2 focus:ring-[#1075B]"
                    placeholder="e.g., Education, Engineering, Medicine"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="experience"
                    className="block mb-2 font-medium text-[#374151]"
                  >
                    Mentoring Experience
                  </label>
                  <select
                    id="experience"
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:outline-none focus:ring-2 focus:ring-[#1075B]"
                    required
                  >
                    <option value="" disabled>
                      Select your experience level
                    </option>
                    <option value="none">No prior experience</option>
                    <option value="some">Some informal experience</option>
                    <option value="experienced">Experienced mentor</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="motivation"
                    className="block mb-2 font-medium text-[#374151]"
                  >
                    Why do you want to become a mentor?
                  </label>
                  <textarea
                    id="motivation"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:outline-none focus:ring-2 focus:ring-[#1075B]"
                    placeholder="Tell us about your motivation and what you hope to achieve"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg text-white font-medium transition-all duration-300"
                  style={{ backgroundColor: "#1075BB" }}
                >
                  Submit Application
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

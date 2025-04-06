"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const JoinProgram = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="join-program" ref={ref} className="py-20 relative bg-gray-50">
      <div
        className="absolute top-0 left-0 w-full h-20"
        style={{ background: "linear-gradient(180deg, white, transparent)" }}
      ></div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10" style={{ backgroundColor: "#1075BB" }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-white">
                  Join IgnitedFuture Community
                </h2>
                <p className="text-white/90 mb-8">
                  Take the first step towards achieving your educational dreams.
                  Apply to join our community and get matched with a mentor who
                  will guide you on your scholarship journey.
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
                      Access to experienced mentors
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
                      Regular workshops and training sessions
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
                      Scholarship application support
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
                      Supportive community network
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
                  className="text-2xl font-bold mb-6"
                  style={{ color: "#111827" }}
                >
                  Application Form
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
                      className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
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
                      className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                      placeholder="Your email address"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="education"
                      className="block mb-2 font-medium text-[#374151]"
                    >
                      Current Level of Education
                    </label>
                    <select
                      id="education"
                      className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                      required
                    >
                      <option value="" disabled selected>
                        Select your education level
                      </option>
                      <option value="secondary">Secondary School</option>
                      <option value="undergraduate">Undergraduate</option>
                      <option value="graduate">Graduate</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="goals"
                      className="block mb-2 font-medium text-[#374151]"
                    >
                      Educational Goals
                    </label>
                    <textarea
                      id="goals"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                      placeholder="Briefly describe your educational goals and what you hope to achieve through this program"
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
      </div>
    </section>
  );
};

export default JoinProgram;

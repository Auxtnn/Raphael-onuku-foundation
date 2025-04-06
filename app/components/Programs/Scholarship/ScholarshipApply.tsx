"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const ApplySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="apply-now" ref={ref} className="py-10 relative bg-white">
      <div className="container lg:w-11/12 mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl overflow-hidden shadow-lg p-2"
          >
            <div className="bg-white rounded-lg p-8 md:p-12">
              <div className="text-center mb-10">
                <h2
                  className="text-3xl font-bold mb-4"
                  style={{ color: "#30C86B" }}
                >
                  Apply for a Scholarship
                </h2>
                <p
                  className="text-lg max-w-2xl mx-auto"
                  style={{ color: "#4B5563" }}
                >
                  Take the first step towards furthering your education. Our
                  application process is simple and straightforward.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <div className="text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "rgba(48, 200, 107, 0.1)" }}
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                        stroke="#30C86B"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.995 13.7H12.005M8.294 13.7H8.304M8.294 16.7H8.304"
                        stroke="#30C86B"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: "#111827" }}
                  >
                    Application Deadline
                  </h3>
                  <p style={{ color: "#4B5563" }}>July 31, 2025</p>
                </div>

                <div className="text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "rgba(16, 117, 187, 0.1)" }}
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12H15M9 16H15M9 8H11M17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3Z"
                        stroke="#1075BB"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: "#111827" }}
                  >
                    Required Documents
                  </h3>
                  <p style={{ color: "#4B5563" }}>
                    Academic records, financial information, ID
                  </p>
                </div>

                <div className="text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "rgba(48, 200, 107, 0.1)" }}
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="#30C86B"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01"
                        stroke="#30C86B"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: "#111827" }}
                  >
                    Need Help?
                  </h3>
                  <p style={{ color: "#4B5563" }}>
                    Contact us for application assistance
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-medium transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: "#30C86B" }}
                >
                  Start Application
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApplySection;

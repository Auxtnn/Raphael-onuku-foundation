"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const ScholarhipProgramOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container lg:w-11/12 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: "#30C86B" }}
            >
              Program Overview
            </h2>

            <p className="text-lg mb-6" style={{ color: "#4B5563" }}>
              The ROF Scholarship Program provides financial assistance to
              qualified underprivileged Nigerian students. We cover tuition,
              examination fees, and in some cases, essential learning materials
              and living expenses.
            </p>

            <p className="text-lg mb-8" style={{ color: "#4B5563" }}>
              What sets our scholarship apart is the holistic support we
              provide. Beyond financial aid, all scholarship recipients join our
              mentorship program, receiving guidance throughout their academic
              journey to ensure they succeed.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div
                  className="flex-shrink-0 p-2 rounded-full mr-3"
                  style={{ backgroundColor: "rgba(48, 200, 107, 0.1)" }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 13L9 17L19 7"
                      stroke="#30C86B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p style={{ color: "#4B5563" }}>Tuition fees coverage</p>
              </div>

              <div className="flex items-start">
                <div
                  className="flex-shrink-0 p-2 rounded-full mr-3"
                  style={{ backgroundColor: "rgba(48, 200, 107, 0.1)" }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 13L9 17L19 7"
                      stroke="#30C86B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p style={{ color: "#4B5563" }}>Examination fees</p>
              </div>

              <div className="flex items-start">
                <div
                  className="flex-shrink-0 p-2 rounded-full mr-3"
                  style={{ backgroundColor: "rgba(48, 200, 107, 0.1)" }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 13L9 17L19 7"
                      stroke="#30C86B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p style={{ color: "#4B5563" }}>Learning materials</p>
              </div>

              <div className="flex items-start">
                <div
                  className="flex-shrink-0 p-2 rounded-full mr-3"
                  style={{ backgroundColor: "rgba(48, 200, 107, 0.1)" }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 13L9 17L19 7"
                      stroke="#30C86B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p style={{ color: "#4B5563" }}>Mentorship support</p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/assets/images/logo5.png"
                alt="ROF Scholarship recipients"
                width={600}
                height={400}
                className="w-full"
              />
            </div>

            {/* Stats card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute -bottom-10 md:-right-5 right-0 bg-white p-6 rounded-lg shadow-xl"
            >
              <div
                className="text-3xl font-bold mb-2"
                style={{ color: "#30C86B" }}
              >
                10+
              </div>
              <div className="text-lg font-medium">Students Supported</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScholarhipProgramOverview;

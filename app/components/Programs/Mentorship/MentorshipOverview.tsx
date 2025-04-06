"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const ProgramOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:w-11/12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: "#1075BB" }}
            >
              Program Overview
            </h2>

            <p className="text-base mb-6" style={{ color: "#4B5563" }}>
              Our Mentorship Programs provide structured guidance to help
              Nigerian youth navigate their educational and career paths. We
              match students with experienced mentors who offer personalized
              support, encouragement, and practical advice.
            </p>

            <p className="text-base mb-8" style={{ color: "#4B5563" }}>
              Through one-on-one sessions, group workshops, and specialized
              bootcamps, we help mentees develop critical skills, build
              confidence, and expand their networks. Our goal is to empower
              young people to overcome barriers and achieve their full
              potential.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div
                  className="flex-shrink-0 p-2 rounded-full mr-3"
                  style={{ backgroundColor: "rgba(16, 117, 187, 0.1)" }}
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
                      stroke="#1075BB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p style={{ color: "#4B5563" }}>Personal guidance</p>
              </div>

              <div className="flex items-start">
                <div
                  className="flex-shrink-0 p-2 rounded-full mr-3"
                  style={{ backgroundColor: "rgba(16, 117, 187, 0.1)" }}
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
                      stroke="#1075BB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p style={{ color: "#4B5563" }}>Skills development</p>
              </div>

              <div className="flex items-start">
                <div
                  className="flex-shrink-0 p-2 rounded-full mr-3"
                  style={{ backgroundColor: "rgba(16, 117, 187, 0.1)" }}
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
                      stroke="#1075BB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p style={{ color: "#4B5563" }}>Group workshops</p>
              </div>

              <div className="flex items-start">
                <div
                  className="flex-shrink-0 p-2 rounded-full mr-3"
                  style={{ backgroundColor: "rgba(16, 117, 187, 0.1)" }}
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
                      stroke="#1075BB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p style={{ color: "#4B5563" }}>Career guidance</p>
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
                src="/assets/images/her-mentor.jpg"
                alt="Mentorship session"
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
              <div className="flex items-center space-x-4">
                <div>
                  <div
                    className="text-3xl font-bold"
                    style={{ color: "#1075BB" }}
                  >
                    100+
                  </div>
                  <div className="text-sm">Mentorship Sessions</div>
                </div>
                <div
                  style={{
                    width: "1px",
                    height: "40px",
                    backgroundColor: "#E5E7EB",
                  }}
                ></div>
                <div>
                  <div
                    className="text-3xl font-bold"
                    style={{ color: "#1075BB" }}
                  >
                    20+
                  </div>
                  <div className="text-sm">Active Mentors</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;

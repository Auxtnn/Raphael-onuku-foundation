"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const ProgramOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="pt-20 pb-10 bg-white">
      <div className="container mx-auto lg:w-11/12 px-4">
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

            <p className="text-lg mb-6" style={{ color: "#4B5563" }}>
              Launched in 2021, the IgnitedFuture Community is a mentorship
              forum dedicated to making scholarship opportunities more
              accessible for Nigerian youth. The community provides guidance,
              resources, and support to help students navigate the complex world
              of scholarship applications and higher education.
            </p>

            <p className="text-lg mb-8" style={{ color: "#4B5563" }}>
              Through personalized mentorship, workshops, and a supportive
              network, we empower young Nigerians to pursue their educational
              dreams despite financial constraints. Our mentors, many of whom
              are scholarship recipients themselves, provide invaluable insights
              and encouragement.
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
                <p style={{ color: "#4B5563" }}>One-on-one mentorship</p>
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
                <p style={{ color: "#4B5563" }}>Scholarship guidance</p>
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
                <p style={{ color: "#4B5563" }}>Application review</p>
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
                <p style={{ color: "#4B5563" }}>Peer support network</p>
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
                src="/assets/images/logo3.png"
                alt="IgnitedFuture mentorship session"
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
              className="absolute -bottom-10 md:-right-5 right-0 bg-white p-6 rounded-lg shadow-xl max-w-xs"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className="text-3xl font-bold"
                  style={{ color: "#1075BB" }}
                >
                  500+
                </div>
                <div className="text-lg font-medium">Community Members</div>
              </div>
              <div className="flex items-center justify-between">
                <div
                  className="text-3xl font-bold"
                  style={{ color: "#30C86B" }}
                >
                  10+
                </div>
                <div className="text-lg font-medium">Successful Applicants</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;

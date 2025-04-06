"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const GetInvolvedHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/start.jpg"
          alt="Get Involved with Raphael Onuku Foundation"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(16, 117, 187, 0.85), rgba(16, 117, 187, 0.7))",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative lg:w-11/12">
        <div className="min-h-[60vh] flex flex-col justify-center py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/20 text-white text-sm font-medium">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#30C86B" }}
                ></div>
                Make a Difference
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Get Involved
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/90 mb-8 max-w-2xl"
            >
              Join us in our mission to empower underprivileged Nigerian youth
              through education, mentorship, and community development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#donate"
                className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-opacity-90"
                style={{ color: "#1075BB" }}
              >
                Make a Donation
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
              </a>

              <a
                href="#volunteer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-lg font-medium border-2 border-white text-white transition-all duration-300 hover:bg-white/10"
              >
                Volunteer
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedHero;

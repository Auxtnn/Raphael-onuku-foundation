"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const ScholarshipHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/hero-scholar.png"
          alt="ROF Scholarship Program"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(48, 200, 107, 0.9), rgba(48, 200, 107, 0.7))",
          }}
        ></div>
      </div>

      <div className="container mx-auto lg:w-11/12 px-4 relative">
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
                  style={{ backgroundColor: "#1075BB" }}
                ></div>
                Our Programs
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              ROF Scholarship Program
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/90 mb-8 max-w-2xl"
            >
              Direct financial assistance for indigent youth to attend secondary
              and tertiary education, combined with ongoing mentorship support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="#apply-now"
                className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-opacity-90"
                style={{ color: "#30C86B" }}
              >
                Apply Now
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipHero;

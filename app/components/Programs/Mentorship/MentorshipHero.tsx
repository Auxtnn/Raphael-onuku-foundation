"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const MentorshipHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 ">
        <Image
          src="/assets/images/ceo.jpg"
          alt="Mentorship Program"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(16, 117, 187, 0.9), rgba(16, 117, 187, 0.7))",
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
                Our Programs
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Mentorship Programs
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/90 mb-8 max-w-2xl"
            >
              One-on-one guidance, workshops, and bootcamps to develop academic
              skills, career readiness, and leadership potential in Nigerian
              youth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="#become-mentor"
                className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-opacity-90"
                style={{ color: "#1075BB" }}
              >
                Become a Mentor
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

              <Link
                href="/programs/ignited-future"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-lg font-medium border-2 border-white text-white transition-all duration-300 hover:bg-white/10"
              >
                Find a Mentor
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
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

export default MentorshipHero;

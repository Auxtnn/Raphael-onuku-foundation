"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const AboutUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-white overflow-hidden">
      <div className="container lg:w-11/12 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            className="relative order-last lg:order-first"
          >
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/assets/banner/banner.jpg"
                alt="Students being mentored by ROF"
                className="object-cover w-full"
                width={600}
                height={450}
              />
            </div>
          </motion.div>

          {/* Right column - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span
              className="inline-block py-1 px-3 rounded-full text-sm font-medium mb-4"
              style={{ backgroundColor: "#EBF8FF", color: "#1075BB" }}
            >
              About Us
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Breaking barriers through
              <span style={{ color: "#1075BB" }}> education.</span>
            </h2>

            <p className="text-[#4b5563] mb-6">
              The Raphael Onuku Foundation was born from a deeply personal
              journey. Our founder witnessed firsthand the barriers to education
              faced by underprivileged families in Nigeria, including his own
              mother who was denied the chance to study.
            </p>

            <p className="text-[#4b5563] mb-6">
              Today, through mentorship and scholarships, we help
              underprivileged Nigerian youth access quality education and unlock
              their full potential, creating pathways to success and sustainable
              community development.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-white font-medium transition-all duration-300"
              style={{ backgroundColor: "#1075BB" }}
            >
              Learn More About Our Story
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
    </section>
  );
};

export default AboutUsSection;

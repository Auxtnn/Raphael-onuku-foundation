"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const CurriculumSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-[#f9fafb]">
      <div className="container mx-auto px-4 lg:w-11/12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4"
            style={{ color: "#30C86B" }}
          >
            Our Curriculum
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg"
            style={{ color: "#4B5563" }}
          >
            Our comprehensive curriculum is designed to progressively build
            digital skills from basic to advanced levels.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-16 top-0 bottom-0 w-1"
              style={{ backgroundColor: "rgba(48, 200, 107, 0.2)" }}
            ></div>

            {/* Curriculum Levels */}
            {[
              {
                level: "Level 1",
                title: "Computer Basics",
                description:
                  "Introduction to computer hardware, operating systems, file management, and basic troubleshooting.",
              },
              {
                level: "Level 2",
                title: "Essential Applications",
                description:
                  "Microsoft Office or equivalent: Word processing, spreadsheets, presentation software, and email communication.",
              },
              {
                level: "Level 3",
                title: "Internet & Research",
                description:
                  "Web navigation, search techniques, evaluating online information, and internet safety.",
              },
              {
                level: "Level 4",
                title: "Advanced Skills",
                description:
                  "Cloud storage, collaborative tools, basic graphic design, and introduction to coding concepts.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                }
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="relative flex items-start mb-12 last:mb-0"
              >
                <div className="flex-shrink-0 w-32 text-right pr-8">
                  <span
                    className="text-sm font-bold"
                    style={{ color: "#30C86B" }}
                  >
                    {item.level}
                  </span>
                </div>

                <div
                  className="absolute left-16 w-8 h-8 rounded-full border-4 border-white transform -translate-x-1/2"
                  style={{ backgroundColor: "#30C86B", top: "0" }}
                ></div>

                <div className="pl-10">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "#111827" }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: "#4B5563" }}>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default CurriculumSection;

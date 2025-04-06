"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const ApplicationProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const steps = [
    {
      title: "Submit Application",
      description:
        "Complete our online application form with your personal details, academic history, and financial information.",
    },
    {
      title: "Initial Screening",
      description:
        "Applications are reviewed to ensure all eligibility criteria are met.",
    },
    {
      title: "Interview",
      description:
        "Selected candidates are invited for an interview to assess their motivation, character, and needs.",
    },
    {
      title: "Selection & Notification",
      description:
        "Final decisions are made and successful applicants are notified of their award.",
    },
    {
      title: "Mentorship Matching",
      description:
        "Scholarship recipients are matched with mentors who will support them throughout their academic journey.",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4"
            style={{ color: "#30C86B" }}
          >
            Application Process
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg"
            style={{ color: "#4B5563" }}
          >
            Our scholarship selection process is thorough to ensure we identify
            candidates who will benefit most from our support.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-16 top-0 bottom-0 w-1"
              style={{ backgroundColor: "rgba(48, 200, 107, 0.2)" }}
            ></div>

            {/* Steps */}
            {steps.map((step, index) => (
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
                    STEP {index + 1}
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
                    {step.title}
                  </h3>
                  <p style={{ color: "#4B5563" }}>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;

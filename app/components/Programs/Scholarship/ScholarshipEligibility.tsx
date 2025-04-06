"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const EligibilitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const eligibilityCriteria = [
    {
      title: "Academic Merit",
      description:
        "Demonstrated academic potential through school records and examination results.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4.35418C12.7329 3.52375 13.8053 3 15 3C17.2091 3 19 4.79086 19 7C19 9.20914 17.2091 11 15 11C13.8053 11 12.7329 10.4762 12 9.64582M12 4.35418C11.2671 3.52375 10.1947 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11C10.1947 11 11.2671 10.4762 12 9.64582M12 4.35418V20M12 9.64582V20"
            stroke="#1075BB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Financial Need",
      description:
        "Demonstrated financial hardship that would prevent pursuing education without assistance.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C14.3869 2 16.6761 2.94821 18.364 4.63604C20.0518 6.32387 21 8.61305 21 11V21H3V11C3 8.61305 3.94821 6.32387 5.63604 4.63604C7.32387 2.94821 9.61305 2 12 2ZM12 2V5M8 12H10M14 12H16"
            stroke="#1075BB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Character & Leadership",
      description:
        "Evidence of good character, community involvement, and leadership potential.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 7L12 12M12 12L7 7M12 12V21M18 21H6"
            stroke="#1075BB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 4C19 5.10457 15.866 6 12 6C8.13401 6 5 5.10457 5 4C5 2.89543 8.13401 2 12 2C15.866 2 19 2.89543 19 4Z"
            stroke="#1075BB"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      title: "Nigerian Citizenship",
      description:
        "Must be a Nigerian citizen or permanent resident, with preference given to students from underserved communities.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 12H6L9 20L15 4L18 12H21"
            stroke="#1075BB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-[#f9fafb]">
      <div className="container lg:w-11/12 mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4"
            style={{ color: "#30C86B" }}
          >
            Eligibility Criteria
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg"
            style={{ color: "#4B5563" }}
          >
            Scholarships are awarded based on a combination of academic merit,
            financial need, and personal qualities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {eligibilityCriteria.map((criterion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="flex items-start">
                <div
                  className="p-3 rounded-full mr-5"
                  style={{ backgroundColor: "rgba(16, 117, 187, 0.1)" }}
                >
                  {criterion.icon}
                </div>
                <div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "#111827" }}
                  >
                    {criterion.title}
                  </h3>
                  <p style={{ color: "#4B5563" }}>{criterion.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;

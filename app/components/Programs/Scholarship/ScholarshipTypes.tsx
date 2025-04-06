"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const ScholarshipTypes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const scholarshipTypes = [
    {
      title: "Secondary School Scholarships",
      description:
        "Covers tuition, examination fees, and essential learning materials for qualifying secondary school students.",
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
            stroke="#30C86B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Undergraduate Scholarships",
      description:
        "Provides financial support for indigent students pursuing undergraduate degrees at Nigerian universities.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 10V15C22 17.2091 20.2091 19 18 19H15L18 22M22 10L18 6M22 10H19.5C18.1193 10 17 8.88071 17 7.5V6M6 19H9L6 22M2 10V15C2 17.2091 3.79086 19 6 19M2 10L6 6M2 10H4.5C5.88071 10 7 8.88071 7 7.5V6M18 6H17M6 6H7M12 22V12M15.5 6H8.5C8.5 6 8 3 12 3C16 3 15.5 6 15.5 6Z"
            stroke="#30C86B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Technical Training Scholarships",
      description:
        "Supports vocational and technical training for students pursuing careers in trades and technical fields.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.8179 15.2179C13.4274 15.6084 12.7943 15.6084 12.4038 15.2179C12.0132 14.8274 12.0132 14.1942 12.4038 13.8037C12.7943 13.4132 13.4274 13.4132 13.8179 13.8037C14.2085 14.1942 14.2085 14.8274 13.8179 15.2179Z"
            fill="#30C86B"
          />
          <path
            d="M4 4L2 6M6 8L4.5 9.5M20 4L22 6M18 8L19.5 9.5M10.5 1.5L12 3M4 15H3M5 10.5V10M19 15H20M19 10.5V10M13.5 18.5L12 20M9 19.5L7.5 21M16.5 18L18 19.5M12 15V12M12 6C12 6 12 3 9 3M15 6C15 6 15 3 12 3M9 3C6 3 6 6 6 6M12 3C9 3 9 6 9 6M18 6C18 9 15 12 15 12M18 6C18 6 18 3 15 3M6 6C6 9 9 12 9 12M9 12C9 12 12 9 12 12M15 12C15 12 12 9 12 12M15 12C15 12 12 15 12 15M9 12C9 12 12 15 12 15"
            stroke="#30C86B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Graduate Study Support",
      description:
        "Limited support for exceptional students pursuing graduate studies with demonstrated financial need.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 14L12.7602 14.5268C12.2869 15.2218 11.7131 15.2218 11.2398 14.5268L12 14ZM12 14L16 11.5M12 14L8 11.5M5 9.5H19M12 4L19 8L12 12L5 8L12 4ZM5 14V9.5M19 14V9.5M5 14C5 15.6569 8.13401 17 12 17C15.866 17 19 15.6569 19 14M5 17.5V14M19 17.5V14M5 17.5C5 19.1569 8.13401 20.5 12 20.5C15.866 20.5 19 19.1569 19 17.5"
            stroke="#30C86B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section ref={ref} className="pb-20 pt-10 bg-gray-50">
      <div className="container mx-auto lg:w-11/12 px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4"
            style={{ color: "#30C86B" }}
          >
            Scholarship Types
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg"
            style={{ color: "#4B5563" }}
          >
            We offer different types of scholarships to support students at
            various educational levels.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {scholarshipTypes.map((type, index) => (
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
                  style={{ backgroundColor: "rgba(48, 200, 107, 0.1)" }}
                >
                  {type.icon}
                </div>
                <div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "#111827" }}
                  >
                    {type.title}
                  </h3>
                  <p style={{ color: "#4B5563" }}>{type.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScholarshipTypes;

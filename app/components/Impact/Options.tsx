"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const GetInvolvedOptions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const options = [
    {
      title: "Donate",
      description:
        "Support our programs financially to help more underprivileged Nigerian youth access education and mentorship.",
      icon: (
        <svg
          width="40"
          height="40"
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
      link: "#donate",
      color: "#1075BB",
    },
    {
      title: "Volunteer",
      description:
        "Share your time, skills, and expertise by volunteering for our mentorship programs, events, or administrative support.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
            stroke="#30C86B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 12L11 14L15 10"
            stroke="#30C86B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      link: "#volunteer",
      color: "#30C86B",
    },
    {
      title: "Become a Partner",
      description:
        "Create strategic partnerships with us to amplify our collective impact on youth education and development in Nigeria.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 16C15 14.3431 13.6569 13 12 13C10.3431 13 9 14.3431 9 16M12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10C15 11.6569 13.6569 13 12 13ZM21 10C21 8.34315 19.6569 7 18 7C16.3431 7 15 8.34315 15 10C15 11.6569 16.3431 13 18 13C19.6569 13 21 11.6569 21 10ZM9 10C9 8.34315 7.65685 7 6 7C4.34315 7 3 8.34315 3 10C3 11.6569 4.34315 13 6 13C7.65685 13 9 11.6569 9 10ZM18 13C19.0688 13 20.0549 13.3519 20.8475 13.9676C21.6401 14.5833 22.1807 15.4324 22.3759 16.3795C21.1414 17.3848 19.6132 18 18 18C16.3868 18 14.8586 17.3848 13.6241 16.3795C13.8193 15.4324 14.3599 14.5833 15.1525 13.9676C15.9451 13.3519 16.9312 13 18 13ZM6 13C7.06881 13 8.05486 13.3519 8.84751 13.9676C9.64016 14.5833 10.1807 15.4324 10.3759 16.3795C9.14138 17.3848 7.61323 18 6 18C4.38677 18 2.85862 17.3848 1.62411 16.3795C1.81933 15.4324 2.35984 14.5833 3.15249 13.9676C3.94514 13.3519 4.93119 13 6 13Z"
            stroke="#1075BB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      link: "#partner",
      color: "#1075BB",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto lg:w-11/12 px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4"
            style={{ color: "#1075BB" }}
          >
            Ways to Get Involved
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg"
            style={{ color: "#4B5563" }}
          >
            There are many ways you can contribute to our mission of empowering
            underprivileged Nigerian youth.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {options.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md text-center"
                style={{ borderTop: `4px solid ${option.color}` }}
              >
                <div className="flex justify-center mb-6">
                  <div
                    className="p-4 rounded-full"
                    style={{ backgroundColor: `${option.color}10` }}
                  >
                    {option.icon}
                  </div>
                </div>

                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: option.color }}
                >
                  {option.title}
                </h3>
                <p className="mb-6" style={{ color: "#4B5563" }}>
                  {option.description}
                </p>

                <a
                  href={option.link}
                  className="inline-flex items-center gap-2 text-lg font-medium transition-colors"
                  style={{ color: option.color }}
                >
                  Learn More
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedOptions;

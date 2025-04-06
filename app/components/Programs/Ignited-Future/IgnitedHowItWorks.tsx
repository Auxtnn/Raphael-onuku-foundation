"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const steps = [
    {
      number: "01",
      title: "Application & Matching",
      description:
        "Complete our online application form. We'll review your academic background, goals, and interests to match you with a suitable mentor.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 21V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V21M19 21L21 21M19 21H14M5 21L3 21M5 21H10M14 16H10M14 16C14 18.2091 15.7909 20 18 20V20C20.2091 20 22 18.2091 22 16V12C22 9.79086 20.2091 8 18 8V8C15.7909 8 14 9.79086 14 12V16ZM10 16C10 18.2091 8.20914 20 6 20V20C3.79086 20 2 18.2091 2 16V12C2 9.79086 3.79086 8 6 8V8C8.20914 8 10 9.79086 10 12V16Z"
            stroke="#1075BB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Personal Mentorship",
      description:
        "Connect with your assigned mentor for regular one-on-one sessions. They'll provide guidance on scholarship opportunities, application strategies, and academic planning.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z"
            stroke="#1075BB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 21C3 18.2386 5.23858 16 8 16H16C18.7614 16 21 18.2386 21 21"
            stroke="#1075BB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Workshops & Resources",
      description:
        "Participate in group workshops covering topics like essay writing, interview preparation, and finding the right scholarship opportunities. Access our resource library for additional support.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6V12M12 12V18M12 12H18M12 12H6"
            stroke="#1075BB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Application Support",
      description:
        "Receive feedback on your scholarship applications, personal statements, and other materials. Your mentor will help you refine your application to increase your chances of success.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 12H15M9 16H15M9 8H11M17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3Z"
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
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto lg:w-11/12 px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4"
            style={{ color: "#1075BB" }}
          >
            How It Works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg"
            style={{ color: "#4B5563" }}
          >
            Our structured approach ensures you receive the guidance and support
            needed to successfully navigate the scholarship application process.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md flex"
            >
              <div className="mr-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(16, 117, 187, 0.1)" }}
                >
                  {step.icon}
                </div>
              </div>
              <div>
                <div
                  className="text-sm font-bold mb-2"
                  style={{ color: "#1075BB" }}
                >
                  {step.number}
                </div>
                <h3
                  className="text-xl font-bold mb-3"
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
    </section>
  );
};

export default HowItWorks;

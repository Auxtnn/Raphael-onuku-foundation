"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const MentorshipBenefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const benefits = [
    {
      title: "For Mentees",
      items: [
        "Personalized guidance and support",
        "Development of academic and life skills",
        "Access to networks and opportunities",
        "Increased confidence and motivation",
        "Better educational outcomes",
      ],
    },
    {
      title: "For Mentors",
      items: [
        "Opportunity to give back to the community",
        "Development of leadership and coaching skills",
        "Connection with motivated young people",
        "Personal fulfillment and satisfaction",
        "Being part of positive social change",
      ],
    },
  ];

  return (
    <section
      ref={ref}
      className="py-4 bg-gradient-to-r from-blue-50 to-[#f9fafb]"
    >
      <div className="container lg:w-11/12 mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4"
            style={{ color: "#1075BB" }}
          >
            Benefits of Mentorship
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg"
            style={{ color: "#4B5563" }}
          >
            Mentorship creates value for both mentees and mentors, fostering
            growth and community connection.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: index === 0 ? -30 : 30 }
              }
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-6">
                <div
                  className="p-3 rounded-full mr-4"
                  style={{ backgroundColor: "rgba(16, 117, 187, 0.1)" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="#1075BB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: "#1075BB" }}>
                  {benefit.title}
                </h3>
              </div>

              <ul className="space-y-4">
                {benefit.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div
                      className="flex-shrink-0 p-1 rounded-full mr-3 mt-1"
                      style={{ backgroundColor: "rgba(16, 117, 187, 0.1)" }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 13L9 17L19 7"
                          stroke="#1075BB"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p style={{ color: "#4B5563" }}>{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorshipBenefits;

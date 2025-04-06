"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const MentorshipApproach = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const approaches = [
    {
      title: "One-on-One Mentorship",
      description:
        "Personalized guidance from an experienced mentor who is matched to the mentee's academic interests, career goals, and personal background.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5 7.5C15.5 9.433 13.933 11 12 11C10.067 11 8.5 9.433 8.5 7.5C8.5 5.567 10.067 4 12 4C13.933 4 15.5 5.567 15.5 7.5Z"
            stroke="#1075BB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 19.5C5 16.4624 8.13401 14 12 14C15.866 14 19 16.4624 19 19.5V20H5V19.5Z"
            stroke="#1075BB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Group Workshops",
      description:
        "Interactive sessions covering topics like study skills, time management, career planning, and leadership development.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M14 7C14 8.65685 13.1046 10 12 10C10.8954 10 10 8.65685 10 7C10 5.34315 10.8954 4 12 4C13.1046 4 14 5.34315 14 7ZM20 7C20 8.10457 19.5 9 19 9C18.5 9 18 8.10457 18 7C18 5.89543 18.5 5 19 5C19.5 5 20 5.89543 20 7ZM6 7C6 8.10457 5.5 9 5 9C4.5 9 4 8.10457 4 7C4 5.89543 4.5 5 5 5C5.5 5 6 5.89543 6 7Z"
            stroke="#1075BB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Bootcamps & Seminars",
      description:
        "Intensive training events focusing on specific skills or knowledge areas, such as scholarship applications, interview preparation, or digital literacy.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 19L17.5 17.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="#1075BB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 12L12 8M12 12L16 12"
            stroke="#1075BB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Peer Learning Circles",
      description:
        "Facilitated group discussions where mentees learn from each other's experiences, challenges, and successes under the guidance of a mentor.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
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
    <section ref={ref} className="py-10 bg-[#f9fafb]">
      <div className="container mx-auto lg:w-11/12 px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4"
            style={{ color: "#1075BB" }}
          >
            Our Mentorship Approach
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg"
            style={{ color: "#4B5563" }}
          >
            We employ multiple mentoring formats to provide comprehensive
            support tailored to different needs and learning styles.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md flex items-start"
            >
              <div
                className="p-3 rounded-lg mr-5"
                style={{ backgroundColor: "rgba(16, 117, 187, 0.1)" }}
              >
                {approach.icon}
              </div>
              <div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "#111827" }}
                >
                  {approach.title}
                </h3>
                <p style={{ color: "#4B5563" }}>{approach.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default MentorshipApproach;

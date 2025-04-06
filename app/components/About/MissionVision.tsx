"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const MissionVision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Core values with icons
  const coreValues = [
    {
      title: "Equity",
      description:
        "We strive to level the playing field for all youths, regardless of gender, ethnicity, or socioeconomic status.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 6H21M3 12H21M3 18H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Integrity",
      description:
        "Honesty and ethical behavior are non-negotiable in all our dealings and operations.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Compassion",
      description:
        "We approach our work with genuine care, understanding the struggles indigent youth face.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 8.25C21 12.5302 12 19.5 12 19.5C12 19.5 3 12.5302 3 8.25C3 5.32804 5.32804 3 8.25 3C9.84389 3 11.2506 3.75182 12 4.93335C12.7494 3.75182 14.1561 3 15.75 3C18.672 3 21 5.32804 21 8.25Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Community Empowerment",
      description:
        "We believe in empowering communities from within to sustain positive change.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 21L3 8M3 8C5.20914 8 7 6.20914 7 4C7 6.20914 8.79086 8 11 8C8.79086 8 7 9.79086 7 12C7 9.79086 5.20914 8 3 8ZM21 3L21 16M21 16C18.7909 16 17 17.7909 17 20C17 17.7909 15.2091 16 13 16C15.2091 16 17 14.2091 17 12C17 14.2091 18.7909 16 21 16Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={ref}
      id="mission-vision"
      className="py-12 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50"></div>
        <div className="absolute left-0 bottom-0 w-1/2 h-full bg-gradient-to-t from-green-50 to-transparent opacity-50"></div>
      </div>

      <div className="container mx-auto lg:w-11/12 px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block py-1 px-3 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: "#EBF8FF", color: "#1075BB" }}
          >
            Our Purpose
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Mission & Vision
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg"
            style={{ color: "#4B5563" }}
          >
            Driven by purpose and guided by our core values, we strive to create
            lasting impact in the lives of underprivileged Nigerian youth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-stretch">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 h-full flex flex-col"
            style={{ borderTopColor: "#1075BB" }}
          >
            <div className="p-8">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: "rgba(16, 117, 187, 0.1)" }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V13"
                    stroke="#1075BB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 22V16M17.5 16L15 18.5M17.5 16L20 18.5"
                    stroke="#1075BB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 8H21M7 4V2M17 4V2"
                    stroke="#1075BB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "#1075BB" }}
              >
                Our Mission
              </h3>

              <p className="text-lg mb-6" style={{ color: "#4B5563" }}>
                To empower underprivileged Nigerian children and youth through
                education, mentorship, and community development, unlocking
                their potential to become leaders in their communities.
              </p>

              <div className="bg-[#eff6ff] p-4 rounded-lg">
                <p className="italic" style={{ color: "#1075BB" }}>
                  &quot;We provide guidance, resources, and financial support to
                  those who need it most, thereby breaking the cycle of poverty
                  and bridging gender or socioeconomic gaps in education.&quot;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 h-full flex flex-col"
            style={{ borderTopColor: "#30C86B" }}
          >
            <div className="p-8">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: "rgba(48, 200, 107, 0.1)" }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z"
                    stroke="#30C86B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="#30C86B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5V9M12 15V19"
                    stroke="#30C86B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 12H9M15 12H19"
                    stroke="#30C86B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "#30C86B" }}
              >
                Our Vision
              </h3>

              <p className="text-lg mb-6" style={{ color: "#4B5563" }}>
                A Nigeria where no child or young person is hindered from
                achieving their full potential due to poverty or lack of
                guidance.
              </p>

              <div className="bg-[#f0fdf4] p-4 rounded-lg">
                <p className="italic" style={{ color: "#30C86B" }}>
                  &quot;We envision a future in which every indigent young
                  person has equal access to quality education and dedicated
                  mentorship, creating a self-sustaining cycle of empowerment –
                  educated and empowered children and youths uplifting
                  others.&quot;
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            Our Core Values
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex bg-white p-5 rounded-lg shadow-sm"
              >
                <div
                  className="mr-4 p-3 rounded-full"
                  style={{
                    backgroundColor:
                      index % 2 === 0
                        ? "rgba(16, 117, 187, 0.1)"
                        : "rgba(48, 200, 107, 0.1)",
                    color: index % 2 === 0 ? "#1075BB" : "#30C86B",
                  }}
                >
                  {value.icon}
                </div>
                <div>
                  <h4
                    className="text-lg font-semibold mb-2"
                    style={{ color: index % 2 === 0 ? "#1075BB" : "#30C86B" }}
                  >
                    {value.title}
                  </h4>
                  <p style={{ color: "#4B5563" }}>{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;

"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { HeartHandshake, Users, HandCoins, CalendarCheck } from "lucide-react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const involvementOptions = [
    {
      title: "Become a Mentor",
      description:
        "Share your knowledge and experience with ambitious Nigerian youth",
      icon: <Users className="h-8 w-8" />,
      link: "/get-involved",
      color: "#1075BB",
      bgColor: "#EBF8FF",
    },
    {
      title: "Make a Donation",
      description:
        "Support our scholarship programs and help break educational barriers",
      icon: <HandCoins className="h-8 w-8" />,
      link: "/get-involved",
      color: "#30C86B",
      bgColor: "#F0FDF4",
    },
    {
      title: "Volunteer with Us",
      description:
        "Help organize events, workshops, and community outreach activities",
      icon: <CalendarCheck className="h-8 w-8" />,
      link: "/get-involved",
      color: "#1075BB",
      bgColor: "#EBF8FF",
    },
    {
      title: "Partner with ROF",
      description:
        "Create strategic partnerships that amplify our collective impact",
      icon: <HeartHandshake className="h-8 w-8" />,
      link: "/get-involved",
      color: "#30C86B",
      bgColor: "#F0FDF4",
    },
  ];

  return (
    <section
      className="py-20 relative overflow-hidden" // Added overflow-hidden here
      ref={ref}
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, #f9fafb, #ffffff, #f0fdf4, #ebf8ff)",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="smallGrid"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 8 0 L 0 0 0 8"
                fill="none"
                stroke="rgba(16, 117, 187, 0.05)"
                strokeWidth="0.5"
              ></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)"></rect>
        </svg>
      </div>

      <div className="container lg:w-11/12 mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span
            className="inline-block py-1 px-3 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: "#EBF8FF", color: "#1075BB" }}
          >
            Join Our Mission
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How You Can{" "}
            <span style={{ color: "#1075BB" }}>Make a Difference</span>
          </h2>
          <p className="text-[#4b5563]">
            There are many ways to contribute to our mission of empowering
            underprivileged Nigerian youth through education and mentorship.
          </p>
        </motion.div>

        <div className="mx-auto overflow-hidden">
          {" "}
          {/* Added overflow-hidden here */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {involvementOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }} // Changed x offset to y offset
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="flex flex-col md:flex-row items-start gap-6 group"
              >
                <div
                  className="flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center text-white md:mt-3"
                  style={{ backgroundColor: option.color }}
                >
                  {option.icon}
                </div>
                <div>
                  <Link href={option.link} className="group-hover:underline">
                    <h3
                      className="text-xl font-bold mb-3 transition-colors"
                      style={{ color: option.color }}
                    >
                      {option.title}
                    </h3>
                  </Link>
                  <p className="text-[#4b5563] mb-4">{option.description}</p>
                  <Link
                    href={option.link}
                    className="inline-flex items-center gap-2 font-medium transition-all duration-300 group-hover:gap-3"
                    style={{ color: option.color }}
                  >
                    Get Involved
                    <svg
                      width="18"
                      height="18"
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-6 rounded-lg shadow-lg bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-green-50 opacity-50"></div>
            <div className="relative">
              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: "#1075BB" }}
              >
                Ready to transform a young Nigerian&apos;s future?
              </h3>
              <p className="text-[#4b5563] mb-6 max-w-2xl mx-auto">
                Your contribution, no matter how small, can make a significant
                difference in the life of an underprivileged student.
              </p>
              <Link
                href="/get-involved/#volunteer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                style={{ backgroundColor: "#1075BB" }}
              >
                Donate Today
                <HandCoins className="h-5 w-5 ml-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

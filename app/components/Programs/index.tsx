"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { BookOpen, GraduationCap, Users } from "lucide-react";
import { FaLaptopCode, FaUserFriends } from "react-icons/fa";

export default function ProgramsHighlight() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const programs = [
    {
      title: "IgnitedFuture Community",
      description:
        "A mentorship forum dedicated to making scholarship opportunities accessible for Nigerian youth.",
      icon: <Users className="h-6 w-6" />,
      link: "/programs/ignited-future",
      color: "#1075BB",
    },
    {
      title: "ROF Scholarship Program",
      description:
        "Direct financial assistance for indigent youth to attend secondary and tertiary education.",
      icon: <GraduationCap className="h-6 w-6" />,
      link: "/programs/scholarship",
      color: "#30C86B",
    },
    {
      title: "Mentorship Programs",
      description:
        "One-on-one guidance, workshops and bootcamps to develop academic and leadership skills.",
      icon: <FaUserFriends className="h-6 w-6" />,
      link: "/programs/mentorship",
      color: "#1075BB",
    },
    {
      title: "Digital Literacy Training",
      description:
        "Equipping underprivileged students with essential computer and internet skills for the modern world.",
      icon: <FaLaptopCode className="h-6 w-6" />,
      link: "/programs/digital-literacy",
      color: "#30C86B",
    },
  ];

  return (
    <section className="py-10 bg-[#f9fafb]" ref={ref}>
      <div className="container lg:w-11/12 mx-auto px-4">
        <div className=" max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our <span style={{ color: "#1075BB" }}>Programs</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#4b5563]"
          >
            Each program addresses specific challenges faced by underprivileged
            Nigerian youth, creating pathways to success through education and
            mentorship.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div
                className="h-2"
                style={{ backgroundColor: program.color }}
              ></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div
                    className="p-2 rounded-md mr-3 text-white"
                    style={{ backgroundColor: program.color }}
                  >
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-bold">{program.title}</h3>
                </div>

                <p className="text-[#4b5563] mb-5">{program.description}</p>

                <Link
                  href={program.link}
                  className="inline-flex items-center text-sm font-medium transition-colors gap-2"
                  style={{ color: program.color }}
                >
                  Learn more
                  <svg
                    width="16"
                    height="16"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-white font-medium transition-all duration-300"
            style={{ backgroundColor: "#1075BB" }}
          >
            View All Programs
            <BookOpen className="h-5 w-5 ml-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

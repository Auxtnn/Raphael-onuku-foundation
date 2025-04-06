"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// MENTORS DATA
interface Mentor {
  id: number;
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
}

const mentors: Mentor[] = [
  {
    id: 1,
    name: "Raphael Onuku",
    role: "Founder & Executive Director",
    imageSrc: "/assets/mentor/boy3.svg",
    imageAlt: "Raphael Onuku - Founder & Executive Director",
  },
  {
    id: 2,
    name: "Dr. Adebayo Johnson",
    role: "Academic Mentor",
    imageSrc: "/assets/mentor/boy3.svg",
    imageAlt: "Dr. Adebayo Johnson - Academic Mentor",
  },
  {
    id: 3,
    name: "Chioma Okafor",
    role: "Scholarship Program Director",
    imageSrc: "/assets/mentor/boy3.svg",
    imageAlt: "Chioma Okafor - Scholarship Program Director",
  },
  {
    id: 4,
    name: "Emmanuel Nwachukwu",
    role: "Digital Literacy Instructor",
    imageSrc: "/assets/mentor/boy3.svg",
    imageAlt: "Emmanuel Nwachukwu - Digital Literacy Instructor",
  },
];

const MentorsSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const sectionVariants = {
    offscreen: {
      opacity: 0,
      y: 50,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.section
      className="py-12 bg-white"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container lg:w-11/12 mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span
            className="text-sm font-medium uppercase tracking-wider text-[#2563eb]"
            variants={itemVariants}
          >
            Our Team
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mt-2 mb-4"
            variants={itemVariants}
          >
            Meet Our <span style={{ color: "#1075BB" }}>Mentors</span>
          </motion.h2>
          <motion.p className="text-[#4b5563]" variants={itemVariants}>
            Our dedicated mentors are committed to guiding Nigerian youth toward
            academic excellence and career success.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {mentors.map((mentor) => (
            <motion.div
              key={mentor.id}
              className="group"
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 400 },
              }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <div className="aspect-w-1 aspect-h-1 w-full">
                  <Image
                    src={mentor.imageSrc}
                    alt={mentor.imageAlt}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-[#111827] mb-1">
                  {mentor.name}
                </h3>
                <p className="text-sm font-medium" style={{ color: "#1075BB" }}>
                  {mentor.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MentorsSection;

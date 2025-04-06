"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const MentorSpotlight = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-10 bg-white">
      <div className="container mx-auto lg:w-11/12 px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4"
            style={{ color: "#1075BB" }}
          >
            Mentor Spotlight
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg"
            style={{ color: "#4B5563" }}
          >
            Meet some of our dedicated mentors who are making a difference in
            the lives of Nigerian youth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-64 relative">
                <Image
                  src={`/assets/images/ceo-${index}.jpg`}
                  alt={`Mentor ${index}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3
                  className="text-xl font-bold mb-1"
                  style={{ color: "#111827" }}
                >
                  {index === 1
                    ? "Dr. Adebayo Johnson"
                    : index === 2
                    ? "Ngozi Okonkwo"
                    : "Samuel Adeyemi"}
                </h3>
                <p className="text-sm mb-4" style={{ color: "#1075BB" }}>
                  {index === 1
                    ? "Academic Mentor"
                    : index === 2
                    ? "Career Development Coach"
                    : "Technology Mentor"}
                </p>
                <p style={{ color: "#4B5563" }}>
                  {index === 1
                    ? "With over 15 years in academia, Dr. Johnson guides students through the complexities of higher education and research."
                    : index === 2
                    ? "A human resources professional who helps mentees identify career paths and develop essential workplace skills."
                    : "A software engineer who mentors students interested in technology careers and digital literacy."}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        ></motion.div>
      </div>
    </section>
  );
};
export default MentorSpotlight;

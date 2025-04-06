"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const SuccessStories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-10 bg-[#f9fafb]">
      <div className="container lg:w-11/12 mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4"
            style={{ color: "#30C86B" }}
          >
            Success Stories
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg"
            style={{ color: "#4B5563" }}
          >
            See how our Digital Literacy Program has impacted the lives of our
            students.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                name: "Daniel Nwachukwu",
                achievement:
                  "Created his first personal website after completing our program",
                quote:
                  "Before the training, I had never used a computer. Now I can create documents, search for information online, and even apply for opportunities independently.",
                image: "/assets/mentor/boy3.svg",
              },
              {
                name: "Faith Adeyemi",
                achievement:
                  "Secured an administrative role requiring computer skills",
                quote:
                  "The digital literacy training opened doors for me. I've been able to apply the skills I learned to get a job that requires computer knowledge, which wouldn't have been possible before.",
                image: "/assets/mentor/boy3.svg",
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="grid grid-cols-3">
                  <div className="col-span-1 relative">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="col-span-2 p-6">
                    <h3
                      className="text-xl font-bold mb-1"
                      style={{ color: "#111827" }}
                    >
                      {story.name}
                    </h3>
                    <p
                      className="text-sm font-medium mb-4"
                      style={{ color: "#30C86B" }}
                    >
                      {story.achievement}
                    </p>
                    <div className="mb-4">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mb-2 opacity-20"
                      >
                        <path
                          d="M10 11H6C6 6.58172 9.58172 3 14 3V5C10.6863 5 8 7.68629 8 11V13H10V11Z"
                          fill="#30C86B"
                        />
                        <path
                          d="M19 11H15C15 6.58172 18.5817 3 23 3V5C19.6863 5 17 7.68629 17 11V13H19V11Z"
                          fill="#30C86B"
                        />
                      </svg>
                      <p className="italic" style={{ color: "#4B5563" }}>
                        {story.quote}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;

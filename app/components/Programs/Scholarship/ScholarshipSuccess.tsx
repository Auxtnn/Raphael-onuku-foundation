"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const ScholarshipSuccess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-0 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-05">
        <div
          className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full opacity-10"
          style={{ backgroundColor: "#30C86B" }}
        ></div>
        <div
          className="absolute -left-20 -top-20 w-96 h-96 rounded-full opacity-10"
          style={{ backgroundColor: "#1075BB" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/assets/mentor/boy1.svg"
                  alt="ROF Scholarship recipient"
                  width={600}
                  height={450}
                  className="w-full"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2
                className="text-3xl font-bold mb-6"
                style={{ color: "#30C86B" }}
              >
                Success Story
              </h2>

              <div
                className="mb-6 p-6 rounded-lg"
                style={{ backgroundColor: "rgba(48, 200, 107, 0.05)" }}
              >
                <div className="flex items-start mb-4">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3 mt-1 opacity-50"
                  ></svg>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3 mt-1 opacity-50"
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
                  <p className="italic text-lg" style={{ color: "#4B5563" }}>
                    The ROF Scholarship changed my life. I was about to drop out
                    of school due to financial constraints when I received
                    support. Now I&apos;m pursuing my dream of becoming a
                    doctor.
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/assets/mentor/boy1.svg"
                      alt="Scholarship recipient"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Chioma Okafor</h4>
                    <p className="text-sm" style={{ color: "#4B5563" }}>
                      Medical Student, University of Lagos
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg mb-8" style={{ color: "#4B5563" }}>
                Our scholarship recipients have gone on to excel in various
                fields, from medicine to engineering to education. We take pride
                in their achievements and the positive impact they&apos;re
                making in their communities.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipSuccess;

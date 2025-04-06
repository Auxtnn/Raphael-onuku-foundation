"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Banner = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="relative overflow-hidden py-20 min-h-screen flex items-center"
      style={{
        background:
          "linear-gradient(135deg, #f0f9ff 0%, #e6f7ff 50%, #e6f5f0 100%)",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="smallGrid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="rgba(16, 117, 187, 0.07)"
                strokeWidth="0.5"
              ></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)"></rect>
        </svg>

        {/* Animated gradient circles */}
        <motion.div
          className="absolute rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
            transition: { duration: 15, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            width: "600px",
            height: "600px",
            left: "10%",
            top: "20%",
            background: "radial-gradient(circle, #1075BB 0%, transparent 70%)",
          }}
        />
        <motion.div
          className="absolute rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, -70, 0],
            y: [0, 30, 0],
            scale: [1, 1.05, 1],
            transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            width: "500px",
            height: "500px",
            right: "15%",
            bottom: "10%",
            background: "radial-gradient(circle, #30C86B 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto lg:w-11/12 px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Text Content */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div
                className="inline-flex items-center gap-2 py-1 px-3 rounded-full mb-4"
                style={{ backgroundColor: "rgba(48, 200, 107, 0.1)" }}
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: "#30C86B" }}
                ></div>
                <span
                  className="text-sm font-medium"
                  style={{ color: "#30C86B" }}
                >
                  Empowering Nigerian Youth
                </span>
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                style={{ color: "#1075BB" }}
              >
                Breaking{" "}
                <span className="relative">
                  <span className="relative ">barriers</span>
                  <motion.span
                    className="absolute bottom-1 left-0 right-0 h-3 rounded-sm"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 0.8 }}
                    style={{ backgroundColor: "rgba(48, 200, 107, 0.2)" }}
                  ></motion.span>
                </span>
                , creating <br />
                <span
                  style={{
                    color: "transparent",
                    backgroundImage:
                      "linear-gradient(to right, #1075BB, #30C86B)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }}
                >
                  futures
                </span>
              </h1>

              <p className="text-xl mb-8 max-w-xl" style={{ color: "#4B5563" }}>
                The Raphael Onuku Foundation provides scholarships, mentorship,
                and community support to help underprivileged Nigerian youth
                unlock their full potential.
              </p>
            </motion.div>

            {/* Impact Stats - Animated counters */}
            <motion.div
              className="grid grid-cols-3 gap-6 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {[
                {
                  number: "500+",
                  label: "Community Members",
                  color: "#1075BB",
                },
                {
                  number: "10+",
                  label: "Scholarship Recipients",
                  color: "#30C86B",
                },
                { number: "3+", label: "Active Programs", color: "#1075BB" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <motion.div
                    className="text-3xl font-bold mb-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.8 + index * 0.1,
                      duration: 0.5,
                      type: "spring",
                    }}
                    style={{ color: stat.color }}
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-sm" style={{ color: "#4B5563" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <motion.a
                href="/get-involved"
                className="px-8 py-4 rounded-full font-medium text-white shadow-lg"
                style={{ backgroundColor: "#1075BB" }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(16, 117, 187, 0.4)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Get Involved
              </motion.a>

              <motion.a
                href="/about"
                className="px-8 py-4 rounded-full font-medium border-2 shadow-lg"
                style={{ borderColor: "#30C86B", color: "#30C86B" }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(48, 200, 107, 0.1)",
                  boxShadow: "0 10px 25px -5px rgba(48, 200, 107, 0.2)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image Section with 3D effect */}
          <motion.div
            className="lg:col-span-6 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{
              perspective: "1000px",
            }}
          >
            <motion.div
              className="relative w-full h-full"
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateY(${mousePosition.x / 100}deg) rotateX(${
                  -mousePosition.y / 100
                }deg)`,
              }}
            >
              {/* Main image */}
              <div
                className="relative rounded-2xl overflow-hidden border-8 border-white shadow-2xl"
                style={{ height: "500px" }}
              >
                <Image
                  src="/assets/banner/banner3.jpg"
                  alt="Students being mentored"
                  fill
                  className="object-cover"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top right, rgba(16, 117, 187, 0.3), transparent)",
                  }}
                ></div>

                {/* Floating achievement badge */}
                <motion.div
                  className="absolute -right-6 -bottom-2 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
                  style={{ width: "220px", zIndex: 20 }}
                >
                  <div
                    className="p-2 rounded-full"
                    style={{ backgroundColor: "rgba(48, 200, 107, 0.1)" }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 15L8.5359 9.5359L3.0718 4.0718C2.6432 3.6432 2.9945 2.9945 3.5736 3.0433L20.9264 4.9567C21.5055 5.0055 21.684 5.7354 21.1924 6.1005L12 15Z"
                        fill="#30C86B"
                      />
                      <path
                        d="M12 15L14.5 20.5C14.8368 21.1739 15.75 21 16 20.5L21 3.5"
                        stroke="#30C86B"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs" style={{ color: "#6B7280" }}>
                      Achievement
                    </div>
                    <div
                      className="font-bold text-sm"
                      style={{ color: "#1075BB" }}
                    >
                      10+ Scholarship Recipients
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div
                className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full"
                style={{
                  backgroundColor: "rgba(48, 200, 107, 0.1)",
                  //   zIndex: -1,
                }}
              ></div>
              <div
                className="absolute -top-10 -left-10 w-20 h-20 rounded-full"
                style={{
                  backgroundColor: "rgba(16, 117, 187, 0.1)",
                  //   zIndex: -1,
                }}
              ></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

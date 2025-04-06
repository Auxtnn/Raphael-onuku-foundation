"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (3.5 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  // Generate multiple particles with different sizes, colors and delays
  const generateParticles = (count: number) => {
    return Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * 4 + 2; // Random size between 2-6px
      const angle = Math.random() * Math.PI * 2; // Random angle
      const distance = 70 + Math.random() * 60; // Random distance from center
      const delay = Math.random() * 1.5; // Random delay
      const duration = 2 + Math.random() * 2; // Random duration

      // Determine color based on index
      let color;
      if (i % 3 === 0) color = "#0EA5E9"; // Blue
      else if (i % 3 === 1) color = "#10B981"; // Green
      else color = "#94A3B8"; // Gray

      return { size, angle, distance, delay, duration, color };
    });
  };

  const particles = generateParticles(24);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 overflow-hidden opacity-5">
            <div className="absolute h-full w-full bg-[linear-gradient(to_right,#0EA5E9_1px,transparent_1px),linear-gradient(to_bottom,#0EA5E9_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>

          {/* Animated floating elements */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-10 h-10 rounded bg-[#10B981]/10"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 45, 0],
              transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          />

          <motion.div
            className="absolute bottom-1/4 left-1/3 w-16 h-16 rounded-full bg-[#0EA5E9]/10"
            animate={{
              y: [0, 30, 0],
              x: [0, -20, 0],
              transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
          />

          <motion.div
            className="absolute top-1/3 left-1/4 w-12 h-12 rounded-lg border border-[#10B981]/30"
            animate={{
              y: [0, 15, 0],
              x: [0, 15, 0],
              rotate: [0, 90, 0],
              transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
          />

          <motion.div
            className="absolute bottom-1/3 right-1/4 w-14 h-14 rounded-full border border-[#0EA5E9]/30"
            animate={{
              scale: [1, 1.1, 1],
              transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          />

          {/* Main centered animation container */}
          <div className="flex flex-col items-center justify-center">
            {/* Central animation */}
            <div className="relative w-80 h-80 flex items-center justify-center">
              {/* Pulsing outer ring */}
              <motion.div
                className="absolute w-64 h-64 rounded-full border-2 border-[#0EA5E9]/30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              />

              {/* Rotating rings */}
              <motion.div
                className="absolute w-56 h-56 rounded-full border border-[#10B981]/40"
                animate={{
                  rotate: 360,
                  transition: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {/* Dots on the ring */}
                <motion.div className="absolute top-0 left-1/2 w-3 h-3 -ml-1.5 rounded-full bg-[#10B981]" />
                <motion.div className="absolute bottom-0 left-1/2 w-3 h-3 -ml-1.5 rounded-full bg-[#10B981]" />
                <motion.div className="absolute left-0 top-1/2 w-3 h-3 -mt-1.5 rounded-full bg-[#10B981]" />
                <motion.div className="absolute right-0 top-1/2 w-3 h-3 -mt-1.5 rounded-full bg-[#10B981]" />
              </motion.div>

              <motion.div
                className="absolute w-48 h-48 rounded-full border border-[#0EA5E9]/40"
                animate={{
                  rotate: -360,
                  transition: {
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {/* Dots on the counter-rotating ring */}
                <motion.div className="absolute top-0 left-1/2 w-2 h-2 -ml-1 rounded-full bg-[#0EA5E9]" />
                <motion.div className="absolute bottom-0 left-1/2 w-2 h-2 -ml-1 rounded-full bg-[#0EA5E9]" />
                <motion.div className="absolute left-0 top-1/2 w-2 h-2 -mt-1 rounded-full bg-[#0EA5E9]" />
                <motion.div className="absolute right-0 top-1/2 w-2 h-2 -mt-1 rounded-full bg-[#0EA5E9]" />
              </motion.div>

              {/* Center elements */}
              <div className="relative">
                {/* Center circle */}
                <motion.div
                  className="w-28 h-28 rounded-full bg-gradient-to-br from-[#0EA5E9]/90 to-[#0EA5E9]/70 flex items-center justify-center"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 0.8, ease: "easeOut" },
                  }}
                >
                  {/* Inner rotating square */}
                  <motion.div
                    className="w-14 h-14 border-2 border-white/60"
                    initial={{ scale: 0, rotate: 45 }}
                    animate={{
                      scale: 1,
                      rotate: 0,
                      transition: {
                        duration: 0.8,
                        delay: 0.2,
                        ease: "easeOut",
                      },
                    }}
                  />
                </motion.div>

                {/* Outer spinning square */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-36 h-36 border-2 border-[#10B981] -translate-x-1/2 -translate-y-1/2"
                  initial={{ scale: 0, opacity: 0, rotate: 45 }}
                  animate={{
                    scale: 1,
                    opacity: 0.7,
                    rotate: 0,
                    transition: { duration: 1, delay: 0.3, ease: "easeOut" },
                  }}
                />

                {/* Particles */}
                {particles.map((particle, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 rounded-full"
                    style={{
                      width: `${particle.size}px`,
                      height: `${particle.size}px`,
                      backgroundColor: particle.color,
                    }}
                    initial={{
                      x: 0,
                      y: 0,
                      opacity: 0,
                    }}
                    animate={{
                      x: Math.cos(particle.angle) * particle.distance,
                      y: Math.sin(particle.angle) * particle.distance,
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      transition: {
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        repeatDelay: Math.random() * 1,
                        ease: "easeInOut",
                      },
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Text animation */}
            <div className="overflow-hidden mt-8">
              <motion.div
                className="text-center"
                initial={{ y: 50, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.7, delay: 0.6, ease: "easeOut" },
                }}
              >
                <h2 className="text-4xl font-bold tracking-wide">
                  <span className="text-[#10B981]">RAPHAEL</span>
                  <span className="text-[#0EA5E9]"> ONUKU</span>
                </h2>
                <h3 className="text-2xl font-medium text-gray-700 mt-1 tracking-widest">
                  FOUNDATION
                </h3>
              </motion.div>
            </div>

            {/* Highlights */}
            <motion.div
              className="mt-6 flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.9, duration: 0.7 },
              }}
            >
              <motion.div
                className="w-3 h-3 bg-[#10B981] rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  },
                }}
              />
              <motion.div
                className="w-3 h-3 bg-[#0EA5E9] rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  transition: {
                    duration: 1.5,
                    delay: 0.5,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  },
                }}
              />
              <motion.div
                className="w-3 h-3 bg-gray-400 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  transition: {
                    duration: 1.5,
                    delay: 1,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  },
                }}
              />
            </motion.div>

            {/* Progress bar */}
            <div className="mt-8 w-80 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#10B981] to-[#0EA5E9]"
                initial={{ width: 0 }}
                animate={{
                  width: "100%",
                  transition: { duration: 3, ease: "easeInOut" },
                }}
              />
            </div>

            {/* Loading text */}
            <motion.p
              className="mt-4 text-gray-500 font-medium tracking-[0.3em]"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.3, duration: 0.5 },
              }}
            >
              <motion.span
                animate={{
                  opacity: [1, 0.4, 1],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                LOADING
              </motion.span>
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;

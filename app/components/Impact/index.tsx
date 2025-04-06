"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Users, GraduationCap } from "lucide-react";
import { FaHandHoldingHeart, FaLightbulb } from "react-icons/fa";

// Types
type ImpactStat = {
  value: number;
  label: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
};

// Constants
const impactStats: ImpactStat[] = [
  {
    value: 500,
    label: "Community Members",
    icon: <Users className="h-8 w-8" />,
    color: "#1075BB",
    bgColor: "#EBF8FF",
  },
  {
    value: 10,
    label: "Scholarship Recipients",
    icon: <GraduationCap className="h-8 w-8" />,
    color: "#30C86B",
    bgColor: "#F0FDF4",
  },
  {
    value: 100,
    label: "Mentorship Sessions",
    icon: <FaLightbulb className="h-7 w-7" />,
    color: "#1075BB",
    bgColor: "#EBF8FF",
  },
  {
    value: 3,
    label: "Supported Communities",
    icon: <FaHandHoldingHeart className="h-7 w-7" />,
    color: "#30C86B",
    bgColor: "#F0FDF4",
  },
];

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const counterVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function ImpactSection() {
  const statsRef = useRef(null);

  const isInView = useInView(statsRef, { once: true, amount: 0.3 });
  const controls = useAnimation();
  const [countedStats, setCountedStats] = useState<number[]>(
    impactStats.map(() => 0)
  );

  useEffect(() => {
    if (isInView) {
      controls.start("animate");

      // Animate the stat counters
      impactStats.forEach((stat, index) => {
        const duration = 2000; // 2 seconds for the animation
        const steps = 50; // Number of steps to take
        const increment = stat.value / steps;
        let count = 0;
        let step = 0;

        const timer = setInterval(() => {
          step++;
          // Use easeOutQuad for smoother deceleration at the end
          const progress = 1 - Math.pow(1 - step / steps, 2);
          count = Math.min(progress * stat.value, stat.value);

          setCountedStats((prev) => {
            const newStats = [...prev];
            newStats[index] = Math.floor(count);
            return newStats;
          });

          if (step >= steps) {
            clearInterval(timer);
          }
        }, duration / steps);
      });
    }
  }, [isInView, controls]);

  return (
    <section className="relative w-full overflow-hidden bg-white py-20">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>

      <div ref={statsRef} className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={controls}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span style={{ color: "#1075BB" }}>Impact</span> So Far
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Through mentorship, scholarships, and community engagement,
            we&apos;re breaking barriers and creating pathways to success for
            Nigerian youth.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              variants={counterVariants}
              className="flex flex-col items-center p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              style={{ backgroundColor: stat.bgColor }}
            >
              <div
                className="p-4 rounded-full mb-5 text-white"
                style={{ backgroundColor: stat.color }}
              >
                {stat.icon}
              </div>
              <h3
                className="text-5xl font-bold mb-3"
                style={{ color: stat.color }}
              >
                {countedStats[index]}
                <span className="text-4xl">+</span>
              </h3>
              <p className="text-gray-700 text-center font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <a
            href="/success-stories"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 rounded-full transition-all duration-300 font-medium"
            style={{ borderColor: "#1075BB", color: "#1075BB" }}
          >
            See Success Stories
            <svg
              width="20"
              height="20"
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
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
}

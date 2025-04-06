"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const TrainingModules = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [activeTab, setActiveTab] = useState("basics");

  const modules = {
    basics: {
      title: "Computer Basics",
      content: [
        "Understanding computer components and peripherals",
        "Navigating operating systems (Windows/MacOS)",
        "File management and organization",
        "Basic troubleshooting skills",
        "Keyboard shortcuts and efficiency tips",
      ],
    },
    office: {
      title: "Office Applications",
      content: [
        "Word processing for academic papers",
        "Spreadsheet basics for data management",
        "Creating effective presentations",
        "Email communication best practices",
        "Document formatting and styling",
      ],
    },
    internet: {
      title: "Internet & Research",
      content: [
        "Web browser navigation and features",
        "Effective search techniques",
        "Evaluating online sources and information",
        "Cybersecurity and online safety",
        "Downloading and uploading files safely",
      ],
    },
    advanced: {
      title: "Advanced Skills",
      content: [
        "Cloud storage and file sharing",
        "Collaborative online tools",
        "Basic graphic design principles",
        "Introduction to coding concepts",
        "Digital citizenship and ethics",
      ],
    },
  };

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4"
            style={{ color: "#30C86B" }}
          >
            Training Modules
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg"
            style={{ color: "#4B5563" }}
          >
            Explore the specific skills covered in each of our training modules.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center mb-8"
          >
            {Object.entries(modules).map(([key, module]) => (
              <button
                key={key}
                className={`px-6 py-3 mx-2 mb-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === key
                    ? "text-white"
                    : "text-gray-600 hover:text-green-600"
                }`}
                style={{
                  backgroundColor: activeTab === key ? "#30C86B" : "#F3F4F6",
                }}
                onClick={() => setActiveTab(key)}
              >
                {module.title}
              </button>
            ))}
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-8 rounded-lg shadow-md"
            style={{ borderTop: "4px solid #30C86B" }}
          >
            <h3 className="text-xl font-bold mb-6" style={{ color: "#30C86B" }}>
              {modules[activeTab].title}
            </h3>

            <ul className="space-y-4">
              {modules[activeTab].content.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div
                    className="flex-shrink-0 p-1 rounded-full mr-3 mt-1"
                    style={{ backgroundColor: "rgba(48, 200, 107, 0.1)" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13L9 17L19 7"
                        stroke="#30C86B"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p style={{ color: "#4B5563" }}>{item}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default TrainingModules;

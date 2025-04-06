"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const ScholarshipFAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "When is the application period for ROF scholarships?",
      answer:
        "Our main application period runs annually from May to July. However, we occasionally offer special scholarship opportunities throughout the year. Check our website regularly or join our mailing list to stay informed of all opportunities.",
    },
    {
      question: "How are scholarship recipients selected?",
      answer:
        "Selection is based on a combination of academic merit, financial need, character, and leadership potential. After initial screening, shortlisted candidates are invited for interviews before final decisions are made.",
    },
    {
      question: "Is the scholarship renewable?",
      answer:
        "Yes, scholarships are typically renewable for the duration of the academic program, subject to maintaining satisfactory academic performance and adherence to our scholarship terms and conditions.",
    },
    {
      question: "Can international students apply?",
      answer:
        "Our scholarships primarily target Nigerian citizens and residents. However, we occasionally partner with other organizations to support Nigerian students studying abroad.",
    },
    {
      question: "How can I donate to the scholarship fund?",
      answer:
        "You can donate through our website's donation page. We accept one-time donations and recurring contributions. All donations go directly to supporting our scholarship recipients.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4"
            style={{ color: "#30C86B" }}
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg"
            style={{ color: "#4B5563" }}
          >
            Find answers to common questions about our scholarship program.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="mb-4"
            >
              <button
                className={`w-full text-left p-6 rounded-lg ${
                  activeIndex === index ? "bg-white shadow-lg" : "bg-white/50"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3
                    className="text-lg font-semibold"
                    style={{
                      color: activeIndex === index ? "#30C86B" : "#111827",
                    }}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className={`p-1 rounded-full transform transition-transform ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    style={{
                      backgroundColor:
                        activeIndex === index
                          ? "rgba(48, 200, 107, 0.1)"
                          : "rgba(75, 85, 99, 0.1)",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 9L12 16L5 9"
                        stroke={activeIndex === index ? "#30C86B" : "#4B5563"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {activeIndex === index && (
                  <div
                    className="mt-4 pt-4 border-t"
                    style={{ borderColor: "rgba(48, 200, 107, 0.2)" }}
                  >
                    <p style={{ color: "#4B5563" }}>{faq.answer}</p>
                  </div>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScholarshipFAQ;

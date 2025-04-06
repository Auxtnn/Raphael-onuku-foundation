"use client";

import { SetStateAction, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How does the scholarship program work?",
      answer:
        "The ROF Scholarship Program provides financial assistance to qualified underprivileged Nigerian students. We cover tuition, exam fees, and in some cases, living expenses. Recipients are selected based on academic potential, financial need, and commitment to community service.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 16L12 8M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5"
            stroke="#1075BB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      question: "How can I join the IgnitedFuture mentorship community?",
      answer:
        "To join our IgnitedFuture Community, simply complete the application form on our website. We'll review your application and match you with a suitable mentor based on your educational goals and career interests. The community provides guidance on scholarship applications, academic planning, and personal development.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z"
            stroke="#1075BB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 21C3 18.2386 5.23858 16 8 16H16C18.7614 16 21 18.2386 21 21"
            stroke="#1075BB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      question: "What does the Digital Literacy Training cover?",
      answer:
        "Our Digital Literacy Training program teaches essential computer and internet skills to students with limited technology exposure. The curriculum includes basic computer operations, Microsoft Office applications, internet research, email communication, and online learning resources. Training sessions are held in community centers or schools with computer access.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 17H15M9 13H15M9 9H10M7 3H17C18.1046 3 19 3.89543 19 5V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3Z"
            stroke="#1075BB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      question: "How can I volunteer with the Raphael Onuku Foundation?",
      answer:
        "We welcome volunteers in various capacities including mentorship, event organization, administrative support, and fundraising. Visit our 'Get Involved' page to fill out a volunteer application form specifying your skills and availability. Our team will contact you to discuss opportunities that match your interests and our current needs.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 11V18C7 19.1046 7.89543 20 9 20H18M17 7L11 13M11 7H17H17V13"
            stroke="#1075BB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      question: "How are donations used by the foundation?",
      answer:
        "Your donations directly support our programs: 70% funds scholarships and educational materials, 20% supports mentorship programs and digital literacy training, and 10% covers administrative costs. We maintain full transparency with annual reports detailing how funds are utilized. Every donation, regardless of size, helps transform the future of underprivileged Nigerian youth.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.06 7.25C3.02 7.17 3 7.09 3 7C3 6.45 3.45 6 4 6H20C20.55 6 21 6.45 21 7C21 7.09 20.98 7.17 20.94 7.25C20.36 8.91 19 11.5 19 13C19 15.42 16.63 17.32 14.46 17.83C14.2 17.89 14 18.13 14 18.39V18.95C14 18.98 14 19 14 19C14 20.11 13.11 21 12 21C10.89 21 10 20.11 10 19C10 19 10 18.98 10 18.95V18.39C10 18.13 9.8 17.89 9.54 17.83C7.37 17.32 5 15.42 5 13C5 11.5 3.64 8.91 3.06 7.25Z"
            stroke="#1075BB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  const decorativeCircles = [
    { size: 300, top: "5%", left: "10%", color: "rgba(16, 117, 187, 0.03)" },
    {
      size: 200,
      bottom: "10%",
      right: "5%",
      color: "rgba(48, 200, 107, 0.03)",
    },
    { size: 150, top: "40%", right: "20%", color: "rgba(16, 117, 187, 0.02)" },
  ];

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
    hidden: { opacity: 0, y: 20 },
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
      className="relative py-20 overflow-hidden"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {/* Background pattern and decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {decorativeCircles.map((circle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${circle.size}px`,
              height: `${circle.size}px`,
              top: circle.top,
              left: circle.left,
              right: circle.right,
              bottom: circle.bottom,
              backgroundColor: circle.color,
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.3 + i * 0.1,
              type: "spring",
              stiffness: 50,
            }}
          />
        ))}

        {/* Honeycomb pattern */}
        <motion.svg
          className="absolute top-0 left-0 h-full opacity-5"
          width="100%"
          height="100%"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <pattern
            id="hexagons"
            width="50"
            height="43.4"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(2)"
          >
            <path
              d="M25 0L50 25 25 50 0 25z"
              fill="none"
              stroke="#1075BB"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </motion.svg>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
            style={{ backgroundColor: "rgba(16, 117, 187, 0.1)" }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 19V19.01M12 15H12.01M8.21 10.2C8.21 8.73 9.24 7.7 10.24 7.7H13.77C14.77 7.7 15.8 8.73 15.8 10.2C15.8 11.27 15.28 11.97 14.51 12.42C13.15 13.17 12 14.12 12 15.5M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                stroke="#1075BB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#1075BB" }}
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg"
            style={{ color: "#4B5563" }}
          >
            Find answers to common questions about our programs and how you can
            get involved.
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="grid grid-cols-1 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div
                  className={`bg-white rounded-xl shadow-md overflow-hidden border transition-all duration-300 ${
                    activeIndex === index
                      ? "border-[#93c5fd]"
                      : "border-[#f3f4f6]"
                  }`}
                  style={{
                    boxShadow:
                      activeIndex === index
                        ? "0 10px 25px -5px rgba(16, 117, 187, 0.1)"
                        : "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-center justify-between"
                    aria-expanded={activeIndex === index}
                  >
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="flex-shrink-0 p-2 rounded-lg"
                        style={{ backgroundColor: "rgba(16, 117, 187, 0.1)" }}
                        whileHover={{ rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {faq.icon}
                      </motion.div>
                      <span
                        className="text-left text-lg font-medium"
                        style={{
                          color: activeIndex === index ? "#1075BB" : "#111827",
                        }}
                      >
                        {faq.question}
                      </span>
                    </div>
                    <motion.div
                      className={`flex-shrink-0 ml-4 rounded-full p-2 transition-all duration-300 ${
                        activeIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                      style={{
                        backgroundColor:
                          activeIndex === index
                            ? "#1075BB"
                            : "rgba(16, 117, 187, 0.1)",
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 9L12 16L5 9"
                          stroke={activeIndex === index ? "#FFFFFF" : "#1075BB"}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          transition: {
                            height: { duration: 0.3, ease: "easeOut" },
                            opacity: { duration: 0.2, delay: 0.1 },
                          },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: {
                            height: { duration: 0.2 },
                            opacity: { duration: 0.1 },
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <div
                          className="px-6 pb-5"
                          style={{
                            borderTop: "1px solid rgba(16, 117, 187, 0.1)",
                          }}
                        >
                          <motion.div
                            className="pt-4"
                            style={{ color: "#4B5563" }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            {faq.answer}
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Decorative element */}
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="absolute -right-4 -top-4 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#30C86B" }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12L10 17L19 8"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Still have questions section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl max-w-3xl mx-auto text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(16, 117, 187, 0.08) 0%, rgba(48, 200, 107, 0.08) 100%)",
          }}
          whileHover={{
            y: -5,
            transition: { type: "spring", stiffness: 300 },
          }}
        >
          <h3
            className="text-xl font-semibold mb-4"
            style={{ color: "#1075BB" }}
          >
            Still have questions?
          </h3>
          <p className="mb-6" style={{ color: "#4B5563" }}>
            We&apos;re here to help. Contact us directly and we&apos;ll get back
            to you as soon as possible.
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white"
            style={{ backgroundColor: "#1075BB" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
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
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FAQSection;

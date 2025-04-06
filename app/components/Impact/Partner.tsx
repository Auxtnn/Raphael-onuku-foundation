"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const PartnerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const partnershipTypes = [
    {
      title: "Corporate Partnerships",
      description:
        "Engage your company in meaningful social responsibility initiatives that align with your values and make a tangible impact.",
      benefits: [
        "Employee volunteer opportunities",
        "Brand visibility",
        "CSR fulfillment",
        "Community impact",
      ],
    },
    {
      title: "Educational Institutions",
      description:
        "Collaborate with us to create pathways for underprivileged students to access quality education and mentorship.",
      benefits: [
        "Student volunteer opportunities",
        "Community engagement",
        "Increased diversity",
        "Social impact initiatives",
      ],
    },
    {
      title: "NGOs & Foundations",
      description:
        "Partner with us to amplify our collective impact through shared resources, knowledge, and networks.",
      benefits: [
        "Resource sharing",
        "Expanded reach",
        "Knowledge exchange",
        "Collaborative programming",
      ],
    },
  ];

  return (
    <section id="partner" ref={ref} className="pb-20 pt-10 bg-[#f9fafb]">
      <div className="container mx-auto lg:w-11/12 px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4"
            style={{ color: "#1075BB" }}
          >
            Become a Partner
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg"
            style={{ color: "#4B5563" }}
          >
            Create strategic partnerships with us to amplify our collective
            impact on youth education and development in Nigeria.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col"
              >
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: "#1075BB" }}
                >
                  {type.title}
                </h3>
                <p className="mb-6 text-gray-600 flex-grow">
                  {type.description}
                </p>

                <div>
                  <h4
                    className="text-sm font-medium mb-3"
                    style={{ color: "#1075BB" }}
                  >
                    Partnership Benefits:
                  </h4>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <div
                          className="p-1 rounded-full mr-3 mt-1"
                          style={{ backgroundColor: "rgba(16, 117, 187, 0.1)" }}
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 13L9 17L19 7"
                              stroke="#1075BB"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span className="text-sm" style={{ color: "#4B5563" }}>
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ color: "#1075BB" }}
                >
                  Partnership Inquiry
                </h3>
                <p className="mb-6" style={{ color: "#4B5563" }}>
                  Interested in partnering with us? Fill out the form to start a
                  conversation about how we can work together to make a
                  difference.
                </p>

                <div className="bg-[#eff6ff] p-6 rounded-lg mb-6">
                  <h4
                    className="text-lg font-semibold mb-4"
                    style={{ color: "#1075BB" }}
                  >
                    Current Partners
                  </h4>
                  <p className="mb-4" style={{ color: "#4B5563" }}>
                    We&apos;re proud to partner with organizations that share
                    our commitment to youth empowerment through education:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div
                        className="p-1 rounded-full mr-3"
                        style={{ backgroundColor: "rgba(16, 117, 187, 0.1)" }}
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
                            stroke="#1075BB"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span style={{ color: "#4B5563" }}>
                        University of Nigeria, Nsukka
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div
                        className="p-1 rounded-full mr-3"
                        style={{ backgroundColor: "rgba(16, 117, 187, 0.1)" }}
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
                            stroke="#1075BB"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span style={{ color: "#4B5563" }}>
                        TechBridge Nigeria
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div
                        className="p-1 rounded-full mr-3"
                        style={{ backgroundColor: "rgba(16, 117, 187, 0.1)" }}
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
                            stroke="#1075BB"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span style={{ color: "#4B5563" }}>
                        Nsukka Community Development Association
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="organization"
                      className="block mb-2 font-medium text-[#374151]"
                    >
                      Organization Name
                    </label>
                    <input
                      type="text"
                      id="organization"
                      className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:outline-none focus:ring-2 focus:ring-[#1075BB]"
                      placeholder="Your organization name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contactPerson"
                      className="block mb-2 font-medium text-[#374151]"
                    >
                      Contact Person
                    </label>
                    <input
                      type="text"
                      id="contactPerson"
                      className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:outline-none focus:ring-2 focus:ring-[#1075BB]"
                      placeholder="Full name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 font-medium text-[#374151]"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:outline-none focus:ring-2 focus:ring-[#1075BB]"
                      placeholder="Email address"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 font-medium text-[#374151]"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:outline-none focus:ring-2 focus:ring-[#1075BB]"
                      placeholder="Phone number"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="partnershipType"
                      className="block mb-2 font-medium text-[#374151]"
                    >
                      Partnership Type
                    </label>
                    <select
                      id="partnershipType"
                      defaultValue=""
                      className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:outline-none focus:ring-2 focus:ring-[#1075BB]"
                      required
                    >
                      <option value="" disabled>
                        Select partnership type
                      </option>
                      <option value="corporate">Corporate Partnership</option>
                      <option value="educational">
                        Educational Institution
                      </option>
                      <option value="ngo">NGO/Foundation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-2 font-medium text-[#374151]"
                    >
                      How would you like to partner with us?
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:outline-none focus:ring-2 focus:ring-[#1075BB]"
                      placeholder="Tell us about your partnership ideas"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg text-white font-medium transition-all duration-300"
                    style={{ backgroundColor: "#1075BB" }}
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default PartnerSection;

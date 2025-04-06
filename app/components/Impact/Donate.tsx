"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const DonateSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [donationAmount, setDonationAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");

  const donationOptions = [
    {
      amount: "₦5,000",
      description: "Provides basic learning materials for 2 students",
    },
    {
      amount: "₦10,000",
      description: "Sponsors a digital literacy training session",
    },
    {
      amount: "₦25,000",
      description: "Supports a mentorship workshop for 10 students",
    },
    {
      amount: "₦50,000",
      description: "Funds a partial scholarship for a secondary school student",
    },
    {
      amount: "₦100,000",
      description: "Provides a full term scholarship for a university student",
    },
  ];

  const handleDonationChange = (amount) => {
    setDonationAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setDonationAmount("custom");
  };

  return (
    <section id="donate" ref={ref} className="py-20 bg-[#f9fafb]">
      <div className="container mx-auto lg:w-11/12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.7 }}
            >
              <h2
                className="text-3xl font-bold mb-6"
                style={{ color: "#1075BB" }}
              >
                Make a Donation
              </h2>

              <p className="text-lg mb-6" style={{ color: "#4B5563" }}>
                Your donation helps us provide scholarships, mentorship, and
                digital literacy training to underprivileged Nigerian youth,
                empowering them to break free from the cycle of poverty through
                education.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{ color: "#1075BB" }}
                >
                  How Your Donation Helps
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div
                      className="p-1 rounded-full mr-3 mt-1"
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
                    <div>
                      <h4
                        className="font-medium mb-1"
                        style={{ color: "#111827" }}
                      >
                        Scholarships
                      </h4>
                      <p className="text-sm" style={{ color: "#4B5563" }}>
                        Funding for tuition, books, and educational materials
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div
                      className="p-1 rounded-full mr-3 mt-1"
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
                    <div>
                      <h4
                        className="font-medium mb-1"
                        style={{ color: "#111827" }}
                      >
                        Mentorship Programs
                      </h4>
                      <p className="text-sm" style={{ color: "#4B5563" }}>
                        Training materials, workshops, and mentor development
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div
                      className="p-1 rounded-full mr-3 mt-1"
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
                    <div>
                      <h4
                        className="font-medium mb-1"
                        style={{ color: "#111827" }}
                      >
                        Digital Literacy
                      </h4>
                      <p className="text-sm" style={{ color: "#4B5563" }}>
                        Computer equipment, internet access, and technical
                        training
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div
                      className="p-1 rounded-full mr-3 mt-1"
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
                    <div>
                      <h4
                        className="font-medium mb-1"
                        style={{ color: "#111827" }}
                      >
                        Community Outreach
                      </h4>
                      <p className="text-sm" style={{ color: "#4B5563" }}>
                        Transportation, event venues, and program materials
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{ color: "#1075BB" }}
                >
                  Donation Options
                </h3>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-3"
                    >
                      <path
                        d="M2 7L10.1649 11.7154C10.8261 12.1783 11.1567 12.4097 11.5163 12.4993C11.8339 12.5785 12.1661 12.5785 12.4837 12.4993C12.8433 12.4097 13.1739 12.1783 13.8351 11.7154L22 7M8 20H16C18.8284 20 20.2426 20 21.1213 19.1213C22 18.2426 22 16.8284 22 14V10C22 7.17157 22 5.75736 21.1213 4.87868C20.2426 4 18.8284 4 16 4H8C5.17157 4 3.75736 4 2.87868 4.87868C2 5.75736 2 7.17157 2 10V14C2 16.8284 2 18.2426 2.87868 19.1213C3.75736 20 5.17157 20 8 20Z"
                        stroke="#1075BB"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p style={{ color: "#4B5563" }}>
                      <strong>Bank Transfer:</strong> Transfer to Raphael Onuku
                      Foundation, Account #12345678, First Bank Nigeria
                    </p>
                  </div>

                  <div className="flex items-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-3"
                    >
                      <path
                        d="M3 9H21M7 15H8M12 15H13M8 5V3M16 5V3M7 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3H7C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21Z"
                        stroke="#1075BB"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p style={{ color: "#4B5563" }}>
                      <strong>Monthly Giving:</strong> Set up recurring
                      donations to provide sustained support
                    </p>
                  </div>

                  <div className="flex items-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-3"
                    >
                      <path
                        d="M2 10C2 10 5.5 14 12 14C18.5 14 22 10 22 10M8 14.5L7 17.5M16 14.5L17 17.5M4 21H20C21.1046 21 22 20.1046 22 19V5C22 3.89543 21.1046 3 20 3H4C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21Z"
                        stroke="#1075BB"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p style={{ color: "#4B5563" }}>
                      <strong>Online Donation:</strong> Donate securely through
                      our website using the form
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Donation Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3
                  className="text-xl font-bold mb-6"
                  style={{ color: "#1075BB" }}
                >
                  Donation Form
                </h3>

                <form className="space-y-6">
                  <div>
                    <label className="block mb-4 font-medium text-gray-700">
                      Select Amount
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      {donationOptions.map((option, index) => (
                        <button
                          key={index}
                          type="button"
                          className={`p-4 rounded-lg border text-left transition-colors ${
                            donationAmount === option.amount
                              ? "border-blue-500 bg-blue-50"
                              : "border-gray-200 hover:border-blue-200"
                          }`}
                          onClick={() => handleDonationChange(option.amount)}
                        >
                          <div
                            className="font-bold mb-1"
                            style={{ color: "#1075BB" }}
                          >
                            {option.amount}
                          </div>
                          <div className="text-xs" style={{ color: "#4B5563" }}>
                            {option.description}
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center mb-6">
                      <input
                        type="radio"
                        id="customAmount"
                        name="donationAmount"
                        checked={donationAmount === "custom"}
                        onChange={() => setDonationAmount("custom")}
                        className="mr-2"
                      />
                      <label htmlFor="customAmount" className="mr-4">
                        Custom Amount:
                      </label>
                      <input
                        type="text"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="₦"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="fullName"
                      className="block mb-2 font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your email address"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="donationType"
                      className="block mb-2 font-medium text-gray-700"
                    >
                      Donation Type
                    </label>
                    <select
                      id="donationType"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="oneTime">One-time Donation</option>
                      <option value="monthly">Monthly Recurring</option>
                      <option value="quarterly">Quarterly Recurring</option>
                      <option value="annually">Annual Recurring</option>
                    </select>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full px-6 py-3 rounded-lg text-white font-medium transition-all duration-300"
                      style={{ backgroundColor: "#1075BB" }}
                    >
                      Proceed to Payment
                    </button>
                  </div>

                  <p
                    className="text-xs text-center pt-2"
                    style={{ color: "#4B5563" }}
                  >
                    Your donation is secure. All information is encrypted and
                    transmitted securely.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DonateSection;

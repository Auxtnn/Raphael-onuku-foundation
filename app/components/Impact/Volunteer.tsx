"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const VolunteerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const volunteerOptions = [
    {
      title: "Mentorship",
    },
    {
      title: "Event Support",
    },
    {
      title: "Administrative Support",
    },
    {
      title: "Digital Skills Training",
    },
  ];

  return (
    <section id="volunteer" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:w-11/12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5"
            >
              <h2
                className="text-3xl font-bold mb-6"
                style={{ color: "#30C86B" }}
              >
                Volunteer with Us
              </h2>

              <p className="text-lg mb-6" style={{ color: "#4B5563" }}>
                Share your time, skills, and expertise to make a meaningful
                difference in the lives of underprivileged Nigerian youth. Our
                volunteers are an essential part of our mission to empower the
                next generation through education.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{ color: "#30C86B" }}
                >
                  Benefits of Volunteering
                </h3>

                <div className="space-y-2">
                  <div className="flex items-start">
                    <div
                      className="p-1 rounded-full mr-3 mt-1"
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
                    <p style={{ color: "#4B5563" }}>
                      Make a meaningful impact in the lives of young people
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div
                      className="p-1 rounded-full mr-3 mt-1"
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
                    <p style={{ color: "#4B5563" }}>
                      Develop your professional and leadership skills
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div
                      className="p-1 rounded-full mr-3 mt-1"
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
                    <p style={{ color: "#4B5563" }}>
                      Be part of a community of passionate individuals
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div
                      className="p-1 rounded-full mr-3 mt-1"
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
                    <p style={{ color: "#4B5563" }}>
                      Gain valuable experience and expand your network
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-[#e5e7eb] p-6 rounded-lg">
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{ color: "#30C86B" }}
                >
                  Volunteer Requirements
                </h3>

                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div
                      className="p-1 rounded-full mr-3 mt-1"
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
                    <p style={{ color: "#4B5563" }}>Minimum age of 18 years</p>
                  </li>

                  <li className="flex items-start">
                    <div
                      className="p-1 rounded-full mr-3 mt-1"
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
                    <p style={{ color: "#4B5563" }}>
                      Commitment of at least 4 hours per month
                    </p>
                  </li>

                  <li className="flex items-start">
                    <div
                      className="p-1 rounded-full mr-3 mt-1"
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
                    <p style={{ color: "#4B5563" }}>
                      Passion for youth development and education
                    </p>
                  </li>

                  <li className="flex items-start">
                    <div
                      className="p-1 rounded-full mr-3 mt-1"
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
                    <p style={{ color: "#4B5563" }}>
                      Background check (for roles working directly with youth)
                    </p>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Volunteer Options */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: "#30C86B" }}
              >
                Volunteer Opportunities
              </h3>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3
                  className="text-xl font-bold mb-6"
                  style={{ color: "#30C86B" }}
                >
                  Volunteer Application
                </h3>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block mb-2 font-medium text-[#374151]"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:outline-none focus:ring-2 focus:ring-[#30C86B]"
                        placeholder="Your full name"
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
                        className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:outline-none focus:ring-2 focus:ring-[#30C86B]"
                        placeholder="Your email address"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:outline-none focus:ring-2 focus:ring-[#30C86B]"
                        placeholder="Your phone number"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="location"
                        className="block mb-2 font-medium text-[#374151]"
                      >
                        Location
                      </label>
                      <input
                        type="text"
                        id="location"
                        className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:outline-none focus:ring-2 focus:ring-[#30C86B]"
                        placeholder="City, State"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-[#374151]">
                      Areas of Interest (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {volunteerOptions.map((option, index) => (
                        <div key={index} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`interest-${index}`}
                            className="mr-3"
                          />
                          <label htmlFor={`interest-${index}`}>
                            {option.title}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="skills"
                      className="block mb-2 font-medium text-[#374151]"
                    >
                      Relevant Skills & Experience
                    </label>
                    <textarea
                      id="skills"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:outline-none focus:ring-2 focus:ring-[#30C86B]"
                      placeholder="Tell us about your skills and experience related to the volunteer areas you selected"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <label
                      htmlFor="availability"
                      className="block mb-2 font-medium text-[#374151]"
                    >
                      Availability
                    </label>
                    <select
                      id="availability"
                      defaultValue=""
                      className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:outline-none focus:ring-2 focus:ring-[#30C86B]"
                      required
                    >
                      <option value="" disabled>
                        Select your availability
                      </option>
                      <option value="weekdays">Weekdays</option>
                      <option value="weekends">Weekends</option>
                      <option value="evenings">Evenings</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg text-white font-medium transition-all duration-300"
                    style={{ backgroundColor: "#30C86B" }}
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default VolunteerSection;

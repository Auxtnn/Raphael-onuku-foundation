"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const TrainingEvents = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const events = [
    {
      title: "Basic Computer Skills Workshop",
      date: "June 15-16, 2025",
      location: "Community Center, Nsukka",
      description:
        "A two-day workshop introducing basic computer operations for beginners.",
      spots: 20,
    },
    {
      title: "Microsoft Office Intensive",
      date: "July 10-12, 2025",
      location: "ROF Training Center, Enugu",
      description:
        "Three-day intensive training on Microsoft Word, Excel, and PowerPoint.",
      spots: 15,
    },
    {
      title: "Internet Safety & Research Skills",
      date: "August 5, 2025",
      location: "Virtual Workshop",
      description:
        "One-day online session on effective internet use and staying safe online.",
      spots: "Unlimited",
    },
  ];

  return (
    <section ref={ref} className="py-10 bg-white">
      <div className="container mx-auto lg:w-11/12 px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4"
            style={{ color: "#30C86B" }}
          >
            Upcoming Training Events
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg"
            style={{ color: "#4B5563" }}
          >
            Join one of our upcoming digital literacy workshops and start
            building your skills.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-5">
                  <div
                    className="md:col-span-1 p-6 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(48, 200, 107, 0.1)" }}
                  >
                    <div className="text-center">
                      <div
                        className="text-lg font-bold"
                        style={{ color: "#30C86B" }}
                      >
                        {event.date.split("-")[0].split(",")[0]}
                      </div>
                      <div className="text-sm" style={{ color: "#4B5563" }}>
                        {event.date.includes("-")
                          ? event.date.split("-")[1]
                          : ""}
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-4 p-6">
                    <div className="flex flex-wrap justify-between items-start">
                      <div>
                        <h3
                          className="text-xl font-bold mb-2"
                          style={{ color: "#111827" }}
                        >
                          {event.title}
                        </h3>
                        <div className="flex items-center mb-4">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2"
                          >
                            <path
                              d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z"
                              stroke="#30C86B"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z"
                              stroke="#30C86B"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span
                            className="text-sm"
                            style={{ color: "#4B5563" }}
                          >
                            {event.location}
                          </span>
                        </div>
                      </div>
                      <div
                        className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium"
                        style={{ color: "#30C86B" }}
                      >
                        {typeof event.spots === "number"
                          ? `${event.spots} spots available`
                          : event.spots}
                      </div>
                    </div>
                    <p className="mb-4" style={{ color: "#4B5563" }}>
                      {event.description}
                    </p>
                    <Link
                      href="#register"
                      className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                      style={{ color: "#30C86B" }}
                    >
                      Register for this event
                      <svg
                        width="16"
                        height="16"
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
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingEvents;

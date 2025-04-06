"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const MentorshipTestimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const testimonials = [
    {
      quote:
        "My mentor helped me navigate the scholarship application process and gave me the confidence to pursue my educational dreams. I'm now studying Computer Science at the University of Lagos.",
      name: "Oluwaseun Adeleke",
      role: "Mentee",
      image: "/assets/mentor/boy1.svg",
    },
    {
      quote:
        "Mentoring with the Raphael Onuku Foundation has been one of the most rewarding experiences of my life. Seeing my mentees grow and achieve their goals gives me immense satisfaction.",
      name: "Victoria Nwosu",
      role: "Mentor",
      image: "/assets/mentor/boy1.svg",
    },
  ];

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container mx-auto lg:w-11/12 px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4"
            style={{ color: "#1075BB" }}
          >
            Voices from Our Community
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg"
            style={{ color: "#4B5563" }}
          >
            Hear from mentors and mentees about their experiences with our
            mentorship programs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md"
              style={{
                borderTop: `4px solid ${index === 0 ? "#1075BB" : "#30C86B"}`,
              }}
            >
              <div className="mb-6">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-4 opacity-20"
                >
                  <path
                    d="M10 11H6C6 6.58172 9.58172 3 14 3V5C10.6863 5 8 7.68629 8 11V13H10V11Z"
                    fill={index === 0 ? "#1075BB" : "#30C86B"}
                  />
                  <path
                    d="M19 11H15C15 6.58172 18.5817 3 23 3V5C19.6863 5 17 7.68629 17 11V13H19V11Z"
                    fill={index === 0 ? "#1075BB" : "#30C86B"}
                  />
                </svg>
                <p className="italic text-lg mb-6" style={{ color: "#4B5563" }}>
                  {testimonial.quote}
                </p>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm" style={{ color: "#4B5563" }}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorshipTestimonials;

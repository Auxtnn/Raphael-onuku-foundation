"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const FounderStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Timeline events in the founder's journey
  const timelineEvents = [
    {
      year: "Early Years",
      title: "Educational Challenges",
      description:
        "Growing up, Raphael witnessed firsthand the barriers to education faced by underprivileged families, including his mother who was denied the chance to study.",
    },
    {
      year: "Education",
      title: "Perseverance Through Hardship",
      description:
        "Despite attending one of the poorest-quality secondary schools, Raphael thrived academically through self-motivation, eventually earning a degree in Pharmacy.",
    },
    {
      year: "2021",
      title: "IgnitedFuture Community",
      description:
        "Launched the IgnitedFuture Community – a mentorship forum dedicated to making scholarship opportunities accessible for Nigerian youth.",
    },
    {
      year: "Present",
      title: "Raphael Onuku Foundation",
      description:
        "Formally registered the foundation to provide structured mentorship and scholarships, already helping 10+ students secure fully funded opportunities.",
    },
  ];

  return (
    <section ref={ref} className="relative pt-20 md:pb-10 overflow-hidden">
      {/* Background elements */}

      <div className="container mx-auto lg:w-11/12 px-4 relative ">
        <div className="grid grid-cols-1 lg:grid-cols-12 md:gap-16 gap-8 items-center">
          {/* Left column - Founder image */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              {/* Main image with bottom margin to make room for quote */}
              <div className="relative rounded-lg overflow-hidden shadow-xl mb-16">
                <Image
                  src="/assets/images/ceo-2.jpg"
                  alt="Raphael Onuku - Founder"
                  width={500}
                  height={600}
                  className="object-cover w-full"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)",
                  }}
                ></div>

                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    Raphael Onuku
                  </h3>
                  <p className="text-white opacity-90">
                    Founder & Executive Director
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div
                className="absolute -bottom-5 -left-5 w-20 h-20 rounded-lg"
                style={{
                  backgroundColor: "rgba(48, 200, 107, 0.1)",
                  zIndex: -1,
                }}
              ></div>
            </div>
          </motion.div>

          {/* Right column - Story content */}
          <motion.div
            className="lg:col-span-7 order-first lg:order-last"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span
              className="inline-block py-1 px-3 rounded-full text-sm font-medium mb-4"
              style={{ backgroundColor: "#EBF8FF", color: "#1075BB" }}
            >
              Our Founder
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A Personal Journey of
              <span style={{ color: "#1075BB" }}> Purpose</span>
            </h2>

            <p className="text-base mb-8" style={{ color: "#4B5563" }}>
              The Raphael Onuku Foundation was born from a deeply personal
              journey and commitment to uplift indigent youth. Raphael's own
              experiences navigating educational barriers has shaped the
              foundation's mission to provide opportunities for underprivileged
              Nigerian children.
            </p>

            {/* Timeline */}
            <div className="space-y-8 relative">
              {/* Timeline line */}
              <div
                className="absolute top-0 bottom-0 left-7 w-px"
                style={{ backgroundColor: "rgba(16, 117, 187, 0.2)" }}
              ></div>

              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className="relative flex gap-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-md relative">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor:
                          index % 2 === 0
                            ? "rgba(16, 117, 187, 0.1)"
                            : "rgba(48, 200, 107, 0.1)",
                        color: index % 2 === 0 ? "#1075BB" : "#30C86B",
                      }}
                    >
                      <span className="text-sm font-bold">{event.year}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <h3
                      className="text-lg font-semibold mb-2"
                      style={{ color: index % 2 === 0 ? "#1075BB" : "#30C86B" }}
                    >
                      {event.title}
                    </h3>
                    <p className="text-base" style={{ color: "#4B5563" }}>
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;

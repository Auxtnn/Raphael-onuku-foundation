"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/assets/banner/banner.jpg"
          alt="Nigerian students in a classroom"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(16, 117, 187, 0.85), rgba(16, 117, 187, 0.7))",
          }}
        ></div>
      </div>

      <div className="container mx-auto lg:w-11/12 px-4 relative ">
        <div className="min-h-[60vh] flex flex-col justify-center py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/20 text-white text-sm font-medium">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#30C86B" }}
                ></div>
                About Us
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Empowering Youth Through Education
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/90 mb-8 max-w-2xl"
            >
              The Raphael Onuku Foundation is dedicated to breaking barriers to
              education for underprivileged Nigerian youth through mentorship,
              scholarships, and community development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-6 items-center"
            >
              {/* Stats */}
              <div className="flex gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">2021</div>
                  <div className="text-white/80 text-sm">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-white/80 text-sm">Community Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">10+</div>
                  <div className="text-white/80 text-sm">
                    Scholarship Recipients
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

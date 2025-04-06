"use client";
import Image from "next/image";

const Newsletter = () => {
  return (
    <section className="py-16 relative">
      <div
        className="absolute inset-0 -skew-y-2"
        style={{ background: "linear-gradient(to right, #1075BB, #0d5f91)" }}
      ></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>

          <p className="text-white mb-8" style={{ opacity: 0.9 }}>
            Stay updated with our latest news, programs, and success stories.
          </p>

          <div className="relative">
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-6 py-3 rounded-md text-gray-700 focus:outline-none"
                required
              />

              <button
                type="submit"
                className="px-6 py-3 rounded-md text-white font-medium transition-colors"
                style={{
                  backgroundColor: "#30C86B",
                  hover: { backgroundColor: "#25a257" },
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

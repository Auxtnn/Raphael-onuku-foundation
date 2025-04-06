"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

type NewsItem = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
  category: string;
  color: string;
};

// Sample news data (in a real app, this would come from a CMS or API)
const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "ROF Awards Scholarships to 10 Outstanding Students",
    excerpt:
      "The Raphael Onuku Foundation has awarded full scholarships to 10 exceptional students from underserved communities across Nigeria.",
    date: "March 15, 2025",
    image: "/assets/mentor/boy3.svg",
    slug: "rof-awards-scholarships",
    category: "Scholarships",
    color: "#1075BB",
  },
  {
    id: 2,
    title: "IgnitedFuture Mentorship Program Welcomes 50 New Mentees",
    excerpt:
      "Our flagship mentorship program expands with 50 new participants ready to receive guidance on their educational journey.",
    date: "February 28, 2025",

    image: "/assets/mentor/boy3.svg",
    slug: "new-ignitedfuture-mentees",
    category: "Mentorship",
    color: "#30C86B",
  },
  {
    id: 3,
    title: "Partnership Announced with Local University for Admission Support",
    excerpt:
      "ROF has secured a partnership with a leading Nigerian university to provide special admission consideration for our scholars.",
    date: "January 20, 2025",
    image: "/assets/mentor/boy3.svg",
    slug: "university-partnership",
    category: "Partnerships",
    color: "#1075BB",
  },
];

export default function LatestNews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="bg-white py-10" ref={ref}>
      <div className="container lg:w-11/12 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span
            className="text-sm font-medium uppercase tracking-wider"
            style={{ color: "#1075BB" }}
          >
            Stay Updated
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Latest <span style={{ color: "#1075BB" }}>News</span> & Updates
          </h2>
          <p className="text-[#4b5563]">
            Stay informed about our recent activities, success stories, and
            upcoming events
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8  mx-auto">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium text-white"
                  style={{ backgroundColor: item.color }}
                >
                  {item.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-[#6b7280] mb-3 text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>

                <h3 className="text-xl font-bold mb-3 text-[#1f2937] hover:text-[#2563eb] transition-colors">
                  <Link href={`/blog#`}>{item.title}</Link>
                </h3>

                <p className="text-[#4b5563] mb-4 flex-grow">{item.excerpt}</p>

                <Link
                  href={`/blog#`}
                  className="inline-flex items-center gap-2 text-sm font-medium mt-2 transition-colors"
                  style={{ color: item.color }}
                >
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-white font-medium transition-all duration-300"
            style={{ backgroundColor: "#1075BB" }}
          >
            View All News
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

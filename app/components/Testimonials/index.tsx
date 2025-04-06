"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// TESTIMONIAL DATA
interface TestimonialType {
  role: string;
  quote: string;
  imgSrc: string;
  name: string;
}

const testimonials: TestimonialType[] = [
  {
    name: "Chioma Okafor",
    role: "Scholarship Recipient",
    quote:
      "The ROF scholarship changed my life. I was about to drop out of school due to financial constraints when I received support. Now I'm pursuing my dream of becoming a doctor.",
    imgSrc: "/assets/mentor/boy3.svg",
  },
  {
    name: "Emmanuel Adegoke",
    role: "IgnitedFuture Mentee",
    quote:
      "Through the mentorship I received at IgnitedFuture Community, I was able to secure a fully funded scholarship to study abroad. The guidance was invaluable.",
    imgSrc: "/assets/mentor/boy3.svg",
  },
  {
    name: "Dr. Amina Yusuf",
    role: "Academic Mentor",
    quote:
      "Working with the Raphael Onuku Foundation has been deeply rewarding. Seeing the transformation in these young students' lives reminds me why education is so powerful.",
    imgSrc: "/assets/mentor/boy3.svg",
  },
  {
    name: "Daniel Nwachukwu",
    role: "Digital Literacy Graduate",
    quote:
      "Before the training, I had never used a computer. Now I can create documents, search for information online, and even apply for opportunities independently.",
    imgSrc: "/assets/mentor/boy3.svg",
  },
  {
    name: "Blessing Adekunle",
    role: "Parent of Scholar",
    quote:
      "As a single mother, I couldn't afford my daughter's education. ROF didn't just provide financial support - they mentored her and gave her confidence to excel.",
    imgSrc: "/assets/mentor/boy3.svg",
  },
];

export default class TestimonialsSection extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      cssEase: "ease-in-out",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <section className="py-10 bg-[#f9fafb]" id="testimonials">
        <div className="container lg:w-11/12 mx-auto px-4">
          <div className="text-center mb-12">
            <span
              className="inline-block py-1 px-3 rounded-full text-sm font-medium mb-4"
              style={{ backgroundColor: "#EBF8FF", color: "#1075BB" }}
            >
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hear from <span style={{ color: "#1075BB" }}>Our Community</span>
            </h2>
            <p className="text-[#4b5563] max-w-3xl mx-auto">
              These testimonials reflect the impact of our programs on the lives
              of Nigerian youth and the communities we serve.
            </p>
          </div>

          <div className="mt-16">
            <Slider {...settings}>
              {testimonials.map((item, i) => (
                <div key={i} className="px-3">
                  <div
                    className="bg-white rounded-lg p-6 mb-8 relative shadow-md hover:shadow-lg transition-shadow duration-300"
                    style={{
                      borderTop: `4px solid ${
                        i % 2 === 0 ? "#1075BB" : "#30C86B"
                      }`,
                    }}
                  >
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div
                        className="rounded-full border-4 border-white overflow-hidden shadow-md"
                        style={{ width: "80px", height: "80px" }}
                      >
                        <Image
                          src={item.imgSrc}
                          alt={`${item.name}'s portrait`}
                          width={80}
                          height={80}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>

                    <div className="pt-10 pb-4">
                      <svg
                        width="36"
                        height="28"
                        viewBox="0 0 36 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="opacity-15 mb-2"
                      >
                        <path
                          d="M15.6 27.6H0V13.2C0 9.63333 0.766667 6.43333 2.3 3.6C3.9 0.766666 6.6 0 10.4 1.33333V8C8.8 8.13333 7.56667 8.63333 6.7 9.5C5.9 10.3 5.5 11.3667 5.5 12.7H15.6V27.6ZM36 27.6H20.4V13.2C20.4 9.63333 21.1667 6.43333 22.7 3.6C24.3 0.766666 27 0 30.8 1.33333V8C29.2 8.13333 27.9667 8.63333 27.1 9.5C26.3 10.3 25.9 11.3667 25.9 12.7H36V27.6Z"
                          fill="currentColor"
                        />
                      </svg>

                      <p className="text-[#4b5563] mb-6">"{item.quote}"</p>
                    </div>

                    <div className="border-t border-[#f3f4f6] pt-4">
                      <h3
                        className="font-semibold text-lg"
                        style={{ color: i % 2 === 0 ? "#1075BB" : "#30C86B" }}
                      >
                        {item.name}
                      </h3>
                      <p className="text-[#6b7280] text-sm">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}

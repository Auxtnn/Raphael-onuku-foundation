import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

// Data
const socialLinks = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/raphaelonukufoundation",
    label: "Facebook",
  },
  {
    icon: FaTwitter,
    href: "https://www.twitter.com/rof_nigeria",
    label: "Twitter",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/raphaelonukufoundation",
    label: "Instagram",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/raphael-onuku-foundation",
    label: "LinkedIn",
  },
];

const footerLinks = [
  {
    title: "Our Programs",
    links: [
      { name: "IgnitedFuture Community", href: "/programs/ignited-future" },
      { name: "ROF Scholarship Program", href: "/programs/scholarship" },
      { name: "Mentorship Programs", href: "/programs/mentorship" },
      { name: "Digital Literacy Training", href: "/programs/digital-literacy" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { name: "Donate", href: "/get-involved/#donate" },
      { name: "Volunteer", href: "/get-involved/#volunteer" },
      { name: "Become a Partner", href: "/get-involved/#partner" },
      { name: "Become a Mentor", href: "/get-involved/#become-mentor" },
    ],
  },
  {
    title: "Other Links",
    links: [
      { name: "Our Story", href: "/about" },
      { name: "Mission & Vision", href: "/about#mission-vision" },
      { name: "Blog", href: "/blog" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
];

const contactInfo = [
  { icon: FaPhone, text: "+234 706 557 2048" },
  {
    icon: FaEnvelope,
    text: "raphaelonukufoundation@outlook.com",
  },
  {
    icon: FaMapMarkerAlt,
    text: "No. 23, Dan Asogwa Crescent, Nsukka, Enugu State, Nigeria",
  },
];

const FooterComponent = () => {
  return (
    <footer className="bg-[#f9fafb] w-full overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-4">
            <Image
              src="/assets/logo/logo.png"
              alt="Raphael Onuku Foundation"
              width={180}
              height={60}
              className="mb-4"
            />
            <p className="text-[#4b5563] mb-6 pr-4 text-sm">
              Empowering underprivileged Nigerian youth through education,
              mentorship, and community development.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    href={item.href}
                    key={i}
                    aria-label={item.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#1075BB" }}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8">
            {footerLinks.map((section, i) => (
              <div key={i}>
                <h3
                  className="text-base font-semibold mb-4"
                  style={{ color: "#1075BB" }}
                >
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-[#4b5563] hover:text-[#2563eb] transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2">
            <h3
              className="text-base font-semibold mb-4"
              style={{ color: "#1075BB" }}
            >
              Contact Us
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={i} className="flex items-start">
                    <span className="mr-3 mt-1 text-[#2563eb]">
                      <Icon size={16} />
                    </span>
                    <span className="text-sm text-[#4b5563] break-words">
                      {item.text}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="py-6 border-t border-[#e5e7eb]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#6b7280] text-sm mb-3 md:mb-0">
              © {new Date().getFullYear()} Raphael Onuku Foundation. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-[#6b7280] text-sm hover:text-[#2563eb] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-[#6b7280] text-sm hover:text-[#2563eb] transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;

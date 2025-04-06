import "./globals.css";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/Footer";

import { Space_Grotesk } from "next/font/google";
import FAQSection from "./components/FAQ";
import Newsletter from "./components/Newsletter/Newsletter";
import { ClientLayoutWrapper } from "./components/LayoutWrapper";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title:
    "Raphael Onuku Foundation - Empowering Nigerian Youth Through Education",
  description:
    "We empower underprivileged Nigerian children and youth through education, mentorship, and community development to unlock their potential and become leaders.",
  keywords:
    "education, Nigeria, scholarship, mentorship, youth empowerment, NGO, foundation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} max-w-[2520px] min-h-screen`}>
        <ClientLayoutWrapper>
          <Navbar />
          {children}
          <FAQSection />
          <Newsletter />
          <Footer />
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}

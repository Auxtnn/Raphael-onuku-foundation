"use client";

import { useState, useEffect } from "react";
import { PageLoader } from "./PageLoader";

import Navbar from "./Navbar/Navbar";
import FooterComponent from "./Footer/Footer";
import FAQSection from "./FAQ";
import Newsletter from "./Newsletter/Newsletter";


export const ClientLayoutWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <PageLoader />}
      {!isLoading && children}
    </>
  );
};

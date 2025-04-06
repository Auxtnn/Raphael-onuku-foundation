"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import PageLoader with no SSR
const PageLoader = dynamic(() => import("./PageLoader"), {
  ssr: false,
  loading: () => null,
});

export const ClientLayoutWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(false); // Start with false to avoid flash

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <PageLoader />}
      <div style={{ opacity: isLoading ? 0 : 1, transition: "opacity 300ms" }}>
        {children}
      </div>
    </>
  );
};

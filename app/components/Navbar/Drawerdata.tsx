"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface DropdownItem {
  name: string;
  href: string;
}

interface NavigationItem {
  name: string;
  href: string;
  dropdown?: DropdownItem[];
}

// Define an interface for the component props to include a closeSidebar function
interface DataProps {
  closeSidebar?: () => void;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Our Programs",
    href: "/programs",
    dropdown: [
      { name: "IgnitedFuture Community", href: "/programs/ignited-future" },
      { name: "ROF Scholarship Program", href: "/programs/scholarship" },
      { name: "Mentorship Programs", href: "/programs/mentorship" },
    ],
  },
  {
    name: "Get Involved",
    href: "/get-involved",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

const Data: React.FC<DataProps> = ({ closeSidebar }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (e: React.MouseEvent, name: string) => {
    // Prevent the event from bubbling up to parent elements
    e.preventDefault();
    e.stopPropagation();

    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(name);
    }
  };

  // Function to handle link clicks
  const handleLinkClick = () => {
    // Close the sidebar if the closeSidebar function exists
    if (closeSidebar) {
      closeSidebar();
    }
  };

  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <div key={item.name} className="mb-3">
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={(e) => toggleDropdown(e, item.name)}
                      className="flex w-full justify-between items-center py-1 text-lg font-normal opacity-75 hover:text-black hover:opacity-100"
                      type="button"
                    >
                      {item.name}
                      {openDropdown === item.name ? (
                        <ChevronDownIcon className="h-5 w-5" />
                      ) : (
                        <ChevronRightIcon className="h-5 w-5" />
                      )}
                    </button>

                    {openDropdown === item.name && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block py-1 text-base font-normal opacity-75 hover:text-black hover:opacity-100"
                            onClick={handleLinkClick}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="py-1 text-lg font-normal opacity-75 block hover:text-black hover:opacity-100"
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <div className="flex pt-4 lg:hidden">
              <a
                href="/get-involved#donate"
                className="inline-flex items-center text-white gap-2 bg-[#1075BB] hover:bg-[#0d5f91] px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-opacity-90"
                onClick={handleLinkClick}
              >
                Donate
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Image from "next/image";

interface DropdownItem {
  name: string;
  href: string;
}

interface NavigationItem {
  name: string;
  href: string;
  current?: boolean;
  dropdown?: DropdownItem[];
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

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const CustomLink = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} passHref>
      <span
        onClick={onClick}
        className="cursor-pointer inline-flex items-center h-full"
      >
        {children}
      </span>
    </Link>
  );
};

const DropdownMenu = ({
  item,
  currentLink,
  handleLinkClick,
}: {
  item: NavigationItem;
  currentLink: string;
  handleLinkClick: (href: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-flex items-center h-full"
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="flex items-center px-3 py-2 text-base font-medium h-full"
        onMouseEnter={() => setIsOpen(true)}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={classNames(
            item.href === currentLink
              ? "text-[#1075BB] font-semibold"
              : "text-gray-700 hover:text-[#1075BB] transition-colors duration-300",
            "text-base font-medium"
          )}
        >
          {item.name}
        </span>
        <ChevronDownIcon
          className={classNames(
            "ml-1 h-4 w-4 transition-transform duration-300",
            isOpen ? "rotate-180" : ""
          )}
        />
      </button>

      {isOpen && item.dropdown && (
        <div className="absolute left-0 top-full mt-0 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1">
            {item.dropdown.map((dropdownItem) => (
              <Link key={dropdownItem.name} href={dropdownItem.href} passHref>
                <span
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1075BB] transition-colors duration-150 cursor-pointer"
                  onClick={() => {
                    handleLinkClick(dropdownItem.href);
                    setIsOpen(false);
                  }}
                >
                  {dropdownItem.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentLink, setCurrentLink] = useState("/");

  const handleLinkClick = (href: string) => {
    setCurrentLink(href);
  };

  return (
    <Disclosure
      as="nav"
      className="navbar bg-white shadow-sm sticky top-0 z-50"
    >
      <>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-20 md:h-24 items-center justify-between">
            <div className="flex flex-1 items-center justify-between">
              {/* LOGO */}
              <div className="flex items-center">
                <Link href="/" passHref>
                  <span
                    className="cursor-pointer"
                    onClick={() => handleLinkClick("/")}
                  >
                    <Image
                      className="h-12 w-auto"
                      src="/assets/logo/logo.png"
                      alt="Raphael Onuku Foundation Logo"
                      width={180}
                      height={60}
                      priority
                    />
                  </span>
                </Link>
              </div>

              {/* LINKS */}
              <div className="hidden lg:block">
                <div className="flex items-center space-x-3 h-full">
                  {navigation.map((item) =>
                    item.dropdown ? (
                      <DropdownMenu
                        key={item.name}
                        item={item}
                        currentLink={currentLink}
                        handleLinkClick={handleLinkClick}
                      />
                    ) : (
                      <CustomLink
                        key={item.name}
                        href={item.href}
                        onClick={() => handleLinkClick(item.href)}
                      >
                        <span
                          className={classNames(
                            item.href === currentLink
                              ? "text-[#1075BB] font-semibold border-b-2 border-[#1075BB]"
                              : "text-gray-700 hover:text-[#1075BB] transition-colors duration-300",
                            "px-3 py-2 text-base font-medium inline-block"
                          )}
                          aria-current={
                            item.href === currentLink ? "page" : undefined
                          }
                        >
                          {item.name}
                        </span>
                      </CustomLink>
                    )
                  )}
                </div>
              </div>

              <div className="hidden lg:flex">
                <a
                  href="/get-involved#donate"
                  className="inline-flex items-center text-white gap-2 bg-[#1075BB] hover:bg-[#0d5f91] px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-opacity-90"
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

              {/* DRAWER ICON FOR MOBILE */}
              <div className="flex lg:hidden">
                <button
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#1075BB] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1075BB]"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* DRAWER FOR MOBILE VIEW */}
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;

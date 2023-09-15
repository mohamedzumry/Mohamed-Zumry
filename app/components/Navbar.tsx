"use client";
import { Disclosure } from "@headlessui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import ThemeButton from "./ThemeButton";

function Navbar() {
  let pathname = usePathname() || "/";
  let desktopLinkClasses =
    "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium";
  let desktopActiveLinkClasses =
    "dark:text-white h-full inline-flex items-center px-3 text-sm font-medium bg-teal-500 dark:bg-teal-200 dark:text-black text-bold";
  let mobileLinkClasses =
  "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-teal-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:text-white"
  let mobileActiveLinkClasses =
    "bg-teal-50 border-teal-500 text-teal-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800";

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-teal">
            <div className="flex justify-between h-16">
              <div className="flex justify-between w-full">
                <div className="flex items-center">
                  <Link href="/">
                    <h1 className="text-2xl font-medium">
                      <span className="text-teal-500">M. </span>Zumry
                    </h1>
                  </Link>
                </div>

                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
                  <Link
                    href="/"
                    prefetch
                    className={`${
                      pathname === "/"
                        ? desktopActiveLinkClasses
                        : desktopLinkClasses
                    }`}
                  >
                    Home
                  </Link>
                  <Link
                    href="/projects"
                    prefetch
                    className={`${
                      pathname === "/projects"
                        ? desktopActiveLinkClasses
                        : desktopLinkClasses
                    }`}
                  >
                    Projects
                  </Link>
                  <Link
                    href="/guestbook"
                    prefetch
                    className={`${
                      pathname === "/guestbook"
                        ? desktopActiveLinkClasses
                        : desktopLinkClasses
                    }`}
                  >
                    GuestBook
                  </Link>
                  <Link
                    href="/contact-us"
                    prefetch
                    className={`${
                      pathname === "/contact-us"
                        ? desktopActiveLinkClasses
                        : desktopLinkClasses
                    }`}
                  >
                    Contact Us
                  </Link>
                  <ThemeButton />
                </div>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <ThemeButton />
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400  hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 dark:hover:bg-gray-800">
                  {open ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1 bg-gray-200/80 dark:bg-gray-700">
              <Link
                href="/"
                prefetch
                className={`${
                  pathname === "/"
                    ? mobileActiveLinkClasses
                    : mobileLinkClasses
                } `}
              >
                Home
              </Link>
              <Link
                href="/projects"
                prefetch
                className={`${
                  pathname === "/projects"
                    ? mobileActiveLinkClasses
                    : mobileLinkClasses
                } `}
              >
                Projects
              </Link>
              <Link
                href="/guestbook"
                prefetch
                className={`${
                  pathname === "/guestbook"
                    ? mobileActiveLinkClasses
                    : mobileLinkClasses
                } `}
              >
                GuestBook
              </Link>
              <Link
                href="/contact-us"
                prefetch
                className={`${
                  pathname === "/contact-us"
                    ? mobileActiveLinkClasses
                    : mobileLinkClasses
                } `}
              >
                Contact Us
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;

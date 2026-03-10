"use client";

import { useState } from "react";
import Link from "next/link";
import NowFosterLogo from "./NowFosterLogo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-brand-green">
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <NowFosterLogo />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-baseline md:ml-6">
              <Link className="ml-5 flex-shrink-0 text-center leading-5 text-white hover:underline" href="/weekenders">Weekenders</Link>
              <Link className="ml-5 flex-shrink-0 text-center leading-5 text-white hover:underline" href="/about_us">About us</Link>
              <a className="ml-5 flex-shrink-0 text-center leading-5 text-white hover:underline" href="https://medium.com/@nowfoster">Our blog</a>
              <a target="_blank" className="ml-5 flex-shrink-0 text-center leading-5 text-white hover:underline" href="mailto:hello@nowfoster.org">Contact us</a>
              <Link className="ml-5 flex-shrink-0 text-center leading-5 text-brand-green font-heading bg-brand-pink rounded-full py-2 px-4 hover:underline" href="/readiness_checker">Get started</Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="bg-brand-green inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-4 pb-3 space-y-2 sm:px-3 border-y border-white/20">
            <Link className="text-white hover:bg-brand-pink/75 block px-3 py-2 rounded-md text-base font-medium" href="/weekenders">Weekenders</Link>
            <Link className="text-white hover:bg-brand-pink/75 block px-3 py-2 rounded-md text-base font-medium" href="/about_us">About us</Link>
            <a className="text-white hover:bg-brand-pink/75 block px-3 py-2 rounded-md text-base font-medium" href="https://medium.com/@nowfoster">Our blog</a>
            <a target="_blank" className="text-white hover:bg-brand-pink/75 block px-3 py-2 rounded-md text-base font-medium" href="mailto:hello@nowfoster.org">Contact us</a>
            <Link className="text-white hover:bg-brand-pink/75 block px-3 py-2 rounded-md text-base font-medium" href="/readiness_checker">Get started</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

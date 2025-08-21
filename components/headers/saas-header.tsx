"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export function SassHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="py-2 fixed top-0 left-0 z-50 w-full mx-auto">
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-500 ease-in-out transform  ${
          scrolled
            ? " px-10 md:px-4 py-2 bg-white/5 backdrop-blur-lg rounded-full border border-black/5 max-w-5xl"
            : "px-4 md:px-10 py-2 max-w-full border-transparent"
        }`}
      >
        <div className="text-xl font-heading font-bold">
          <Image
            src="/assets/saas/logo.svg"
            alt="SaaS Logo"
            width={120}
            height={40}
          />
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-[var(--accent)]">
            Home
          </a>
          <a href="#features" className="hover:text-[var(--accent)]">
            Features
          </a>
          <a href="#pricing" className="hover:text-[var(--accent)]">
            Pricing
          </a>
          <a href="#blog" className="hover:text-[var(--accent)]">
            Blog
          </a>
          <a href="#contact" className="hover:text-[var(--accent)]">
            Contact
          </a>
        </nav>
        <div className="flex gap-4">
          <Button variant="outlineRounded">Download app</Button>
          <Button variant="defaultRounded">Get Started</Button>
        </div>
      </div>
    </header>
  );
}

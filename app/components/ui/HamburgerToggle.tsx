"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";

interface LinkItem {
  href: string;
  label: string;
}

interface HamburgerToggleProps {
  links: LinkItem[];
}

const HamburgerToggle: React.FC<HamburgerToggleProps> = ({ links }) => {
  const [open, setOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname: string = usePathname();

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const menuVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const hamburgerLinks: LinkItem[] = [
    ...links,
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="relative mr-2 md:ml-6 md:mr-3" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 md:w-16 md:h-16 flex flex-col justify-between items-center z-50 hover:cursor-pointer"
        aria-label="Toggle menu"
      >
        <div
          className={`space-y-4 md:space-y-6 transition-opacity duration-300 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className="block w-12 md:w-16 h-1 bg-black"></span>
          <span className="block w-12 md:w-16 h-1 bg-black"></span>
          <span className="block w-12 md:w-16 h-1 bg-black"></span>
        </div>
      </button>

      <motion.div
        className={`${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } fixed inset-0 bg-primary bg-opacity-90 flex flex-col items-center justify-center z-40 transition-opacity duration-200 md:absolute md:top-0 md:right-0 md:mt-4 md:bg-transparent md:via-white md:to-white md:rounded-l-xl md:border-r-[3px] md:px-3 md:pb-3 md:inset-auto`}
        variants={menuVariants}
        initial="hidden"
        animate={open ? "visible" : "hidden"}
      >
        <button
          className="absolute top-4 right-4 text-white text-2xl md:hidden"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>
        <div className="flex flex-col items-center md:items-end text-2xl md:text-3xl font-extralight gap-4 md:gap-4">
          {hamburgerLinks.map(({ href, label }) => (
            <motion.div
              key={href}
              variants={itemVariants}
              className={`${
                links.some((link: LinkItem) => link.href === href)
                  ? "md:hidden"
                  : ""
              }`}
            >
              <Link
                href={href}
                className={`hover:underline decoration-1 underline-offset-8 md:underline-offset-[12px] ${
                  pathname === href ? "underline" : ""
                } text-white md:text-primary`}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HamburgerToggle;

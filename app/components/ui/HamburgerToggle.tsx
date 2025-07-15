"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function HamburgerToggle() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !(menuRef.current as HTMLElement).contains(event.target as Node)
      ) {
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

  return (
    <div className="relative ml-6 mr-3" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="w-16 h-16 flex flex-col justify-between items-center z-50 hover:cursor-pointer"
        aria-label="Toggle menu"
      >
        {/* Hamburger icon */}
        <div
          className={`space-y-6 transition-opacity duration-300 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className="block w-16 h-1 bg-black"></span>
          <span className="block w-16 h-1 bg-black"></span>
          <span className="block w-16 h-1 bg-black"></span>
        </div>
      </button>

      <div
        className={`${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } duration-200 absolute top-0 right-0 mt-4 flex flex-col items-end text-3xl font-extralight gap-4 border-r-[3px] px-3 pb-3 bg-gradient-to-tr from-transparent via-white to-white z-30 rounded-l-xl`}
      >
        <Link
          href="/about"
          className="hover:underline decoration-[1px] underline-offset-[12px]"
        >
          About
        </Link>
        {/* <Link
          href="/submit"
          className="hover:underline decoration-[1px] underline-offset-[12px]"
        >
          Submit
        </Link> */}
        <Link
          href="/contact"
          className="hover:underline decoration-[1px] underline-offset-[12px]"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

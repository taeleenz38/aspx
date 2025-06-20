"use client";
import React, { useState, useEffect, useRef } from "react";

const SortToggle = () => {
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

  const bars = open ? ["w-4", "w-8", "w-12"] : ["w-12", "w-8", "w-4"];

  return (
    <div className="relative ml-6 mt-1" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col justify-between items-center z-50 hover:cursor-pointer"
        aria-label="Toggle menu"
      >
        <div className="space-y-3 flex flex-col items-center transition-all duration-300">
          {bars.map((width, idx) => (
            <span
              key={idx}
              className={`block h-1 bg-black transition-all duration-300 ${width}`}
            />
          ))}
        </div>
      </button>
    </div>
  );
};

export default SortToggle;

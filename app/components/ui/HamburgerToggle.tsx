import React, { useState } from "react";

export default function HamburgerToggle() {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="relative w-8 h-8 flex items-center justify-center ml-6"
      aria-label="Toggle menu"
    >
      <div
        className={`space-y-6 transition-opacity duration-300 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="block w-16 h-1 bg-black"></span>
        <span className="block w-16 h-1 bg-black"></span>
        <span className="block w-16 h-1 bg-black"></span>
      </div>

      <span
        className={`absolute top-1/2 right-0 w-1 h-16 bg-black rounded transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        style={{ right: "-1.5rem", transform: "translateY(-50%)" }}
      ></span>
    </button>
  );
}

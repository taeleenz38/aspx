"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import HamburgerToggle from "../ui/HamburgerToggle";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 pt-4 px-4 z-50 flex justify-between text-primary items-center h-28">
      <Image src="/logo.png" width={125} height={125} alt="logo" />
      <div className="flex items-center gap-14 text-3xl pr-16 font-extralight">
        <Link
          href="/"
          className="hover:underline decoration-[1px] underline-offset-[12px] hover:opacity-80"
        >
          work
        </Link>
        <Link
          href="/people"
          className="hover:underline decoration-[1px] underline-offset-[12px] hover:opacity-80"
        >
          people
        </Link>
        <Link
          href="/ethos"
          className="hover:underline decoration-[1px] underline-offset-[12px] hover:opacity-80"
        >
          ethos
        </Link>
        <HamburgerToggle />
      </div>
    </div>
  );
};

export default Navbar;

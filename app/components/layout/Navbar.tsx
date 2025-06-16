"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import HamburgerToggle from "../ui/HamburgerToggle";

const Navbar = () => {
  return (
    <div className="flex justify-between text-primary items-center">
      <Image src="/logo.png" width={125} height={125} alt="logo" />
      <div className="flex items-center gap-14 text-3xl pr-12 font-extralight">
        <Link
          href="/work"
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

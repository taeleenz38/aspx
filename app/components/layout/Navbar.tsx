"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import HamburgerToggle from "../ui/HamburgerToggle";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 pt-4 pb-20 pl-6 z-20 flex justify-between text-primary items-center h-52 bg-gradient-to-t from-transparent via-white to-white">
      <Link href="/">
        <Image
          src="/logo.png"
          width={100}
          height={100}
          alt="logo"
          className="rounded-full"
        />
      </Link>
      <div className="flex items-center gap-18 text-3xl pr-8 font-extralight">
        <Link
          href="/"
          className="hover:underline decoration-[1px] underline-offset-[12px] hover:opacity-80 duration-200"
        >
          work
        </Link>
        <Link
          href="/people"
          className="hover:underline decoration-[1px] underline-offset-[12px] hover:opacity-80 duration-200"
        >
          people
        </Link>
        <Link
          href="/ethos"
          className="hover:underline decoration-[1px] underline-offset-[12px] hover:opacity-80 duration-200"
        >
          ethos
        </Link>
        <HamburgerToggle />
      </div>
    </div>
  );
};

export default Navbar;

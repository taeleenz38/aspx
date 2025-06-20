"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import HamburgerToggle from "../ui/HamburgerToggle";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "work" },
  { href: "/people", label: "people" },
  { href: "/ethos", label: "ethos" },
];

const Navbar = () => {
  // Variants for the links container to stagger children animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Variants for each link and hamburger: drop from top + fade in
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="fixed top-0 left-0 right-0 pt-4 pb-14 pl-6 z-20 flex justify-between text-primary items-center bg-[linear-gradient(to_top,_transparent_0%,_white_23%,_white_100%)]">
      {/* Logo fade in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Link href="/">
          <Image
            src="/logo.png"
            width={100}
            height={100}
            alt="logo"
            className="rounded-full"
          />
        </Link>
      </motion.div>

      {/* Links + Hamburger container with staggered animation */}
      <motion.div
        className="flex items-center gap-18 text-3xl pr-8 font-extralight"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {links.map(({ href, label }) => (
          <motion.div key={href} variants={itemVariants}>
            <Link
              href={href}
              className="hover:underline decoration-[1px] underline-offset-[12px] hover:opacity-80 duration-200"
            >
              {label}
            </Link>
          </motion.div>
        ))}

        <motion.div variants={itemVariants}>
          <HamburgerToggle />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Navbar;

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import HamburgerToggle from "../ui/HamburgerToggle";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "work" },
  { href: "/people", label: "people" },
  { href: "/ethos", label: "ethos" },
];

const Navbar = () => {
  const pathname = usePathname();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="fixed top-0 left-0 right-0 pt-8 pb-14 pl-8 z-20 flex justify-between text-primary items-center bg-[linear-gradient(to_top,_transparent_0%,_white_23%,_white_100%)]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Link href="/">
          <Image
            src="/logo.png"
            width={150}
            height={150}
            alt="logo"
            className=""
          />
        </Link>
      </motion.div>

      <motion.div
        className="flex items-center gap-18 text-3xl pr-8 font-extralight"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {links.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <motion.div key={href} variants={itemVariants}>
              <Link
                href={href}
                className={`link-underline duration-200 ${
                  isActive ? "active" : ""
                }`}
              >
                {label}
              </Link>
            </motion.div>
          );
        })}

        <motion.div variants={itemVariants}>
          <HamburgerToggle />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Navbar;

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import HamburgerToggle from "../ui/HamburgerToggle";
import { motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";

interface LinkItem {
  href: string;
  label: string;
}

const links: LinkItem[] = [
  { href: "/", label: "work" },
  { href: "/people", label: "people" },
  { href: "/ethos", label: "ethos" },
];

const Navbar: React.FC = () => {
  const pathname: string = usePathname();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="fixed top-0 left-0 right-0 pt-2 pb-8 px-3 md:pt-8 md:pb-14 md:px-8 z-50 flex justify-between text-primary items-center bg-[linear-gradient(to_top,_transparent_0%,_white_23%,_white_100%)]">
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
            className="mt-4 ml-4 md:mt-0 md:ml-0"
          />
        </Link>
      </motion.div>

      <motion.div
        className="hidden md:flex items-center gap-18 text-3xl font-extralight"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {links.map(({ href, label }) => {
          const isActive: boolean = pathname === href;
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
          <HamburgerToggle links={links} />
        </motion.div>
      </motion.div>

      <div className="md:hidden">
        <HamburgerToggle links={links} />
      </div>
    </div>
  );
};

export default Navbar;
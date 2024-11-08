"use client";
import Link from "next/link";
import React from "react";
import logo from "../../public/logo.svg";
import Image from "next/image";
import { DarkModeToggle } from "./darkmoadButton";
import { motion, useScroll } from "framer-motion";
import { Button } from "./ui/button";
import { LogIn } from "lucide-react";
import LanguageDropdown from "./LangDropdown";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <nav className="bg-background/10 fixed top-0 z-50 backdrop-blur-xl w-full h-20 border-b border-zinc-500/20">
        <div className="container-fluid mx-auto px-4 md:px-[131px]">
          <div className="flex items-center justify-between h-20">
            <div className="hidden md:block">
              <LanguageDropdown />
            </div>
            <Link href="/">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Image className="w-20 h-20" src={logo} alt="site logo" />
              </motion.div>
            </Link>
            <div className="flex items-center gap-2 justify-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <DarkModeToggle />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Button className="py-2 md:px-10 md:py-[25px] rounded-full text-white bg-white/10 border-white/10 backdrop-blur-md transition-colors hover:bg-white/20 dark:bg-[#FF4B00]">
                  <span className="hidden md:flex gap-2 ">войти</span>{" "}
                  <LogIn className="w-6 h-6" />
                </Button>
              </motion.div>
              <motion.div
                className="block md:hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <LanguageDropdown />
              </motion.div>
            </div>
          </div>
        </div>
      </nav>
      <motion.div
        style={{ scaleX: scrollYProgress }} // remove this line, it's not necessary
        className="fixed w-full h-1 top-20 z-50 bg-[#FF5708] rounded-md"
      />
    </div>
  );
};

export default Navbar;

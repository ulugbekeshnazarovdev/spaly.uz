"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Download, X } from "lucide-react";
import Iphone from "../../public/iphon-15.svg";
import Google from "../../public/google.svg";
import Huawei from "../../public/app-galery.svg";
import Apple from "../../public/apple.svg";
import Link from "next/link";

interface DownloadItem {
  title: string;
  progress: number;
  currentSize: string;
  totalSize: string;
  status: string;
  position: {
    left?: string;
    right?: string;
    top?: string;
  };
}

const FeatureCards = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "rgba(255, 75, 0, 0.5)",
    },
    card: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: "rgba(255, 75, 0, 0.3)",
      mixBlendMode: "difference" as const,
    },
  };

  const cardVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
      transition: { duration: 0.3 },
    },
  };

  const downloadItems: DownloadItem[] = [
    {
      title: "SPIDER - MAN no way home",
      progress: 27,
      currentSize: "231.2 Мб",
      totalSize: "1.21 Гб",
      status: "downloading",
      position: { left: "50px", top: "10%" },
    },
    {
      title: "Воскресший Эртугрул 1 сезон / 1",
      progress: 0,
      currentSize: "",
      totalSize: "",
      status: "queued",
      position: { right: "80px", top: "20%" },
    },
  ];

  return (
    <div className="min-h-screen bg-black py-16 relative overflow-hidden">
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      <div className="container-fluid mx-auto px-4 md:px-[131px]">
        {/* Top Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Left Card - Downloads */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative cursor-pointer"
            onMouseEnter={() => {
              setCursorVariant("card");
              setHoveredCard("downloads");
            }}
            onMouseLeave={() => {
              setCursorVariant("default");
              setHoveredCard(null);
            }}
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="w-full md:w-[800px] rounded-xl md:rounded-[56px] h-auto md:h-[800px] cards overflow-hidden p-6 items-center bg-gradient-to-br from-[#1A0500] via-[#2B0800] to-[#FF4B00]/20 transition-all duration-500 relative">
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black opacity-50" />
              <motion.div
                className="absolute inset-0 bg-[#FF4B00]/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredCard === "downloads" ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
              <div className="relative z-10">
                <motion.h2
                  className="text-2xl p-0 md:px-20 md:text-4xl py-8 text-white text-center font-bold mb-10"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Загружайте сериалы для просмотра офлайн
                </motion.h2>
                <div className="relative flex justify-center bottom-[-50px]">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <Image
                      src={Iphone}
                      alt="Mobile interface"
                      width={280}
                      height={560}
                      className="rounded-xl"
                    />
                  </motion.div>
                  <AnimatePresence>
                    {downloadItems.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ delay: 0.6 + idx * 0.2 }}
                        className="bg-black/60 backdrop-blur-sm rounded-xl h-[52px] flex items-center gap-3 absolute w-[343px]"
                        style={item.position}
                      >
                        <div className="relative pl-3">
                          {item.status === "downloading" ? (
                            <motion.div
                              animate={{
                                scale: [1, 1.2, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                              className="w-8 h-8 rounded-full bg-[#FF4B00]/20 flex items-center justify-center"
                            >
                              <Download className="w-4 h-4 text-[#FF4B00]" />
                            </motion.div>
                          ) : (
                            <div className="w-8 h-8 rounded-full border-2 border-white/20 border-dashed animate-spin flex items-center justify-center">
                              <Download className="w-4 h-4 text-white/50" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs text-white truncate">
                            {item.title}
                          </h4>
                          {item.status === "downloading" && (
                            <div className="mt-1 flex items-center gap-2">
                              <div className="flex-1 h-1 bg-white/10 rounded-full">
                                <motion.div
                                  className="h-full bg-[#FF4B00] rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: `${item.progress}%` }}
                                  transition={{ duration: 1, delay: 1 }}
                                />
                              </div>
                              <span className="text-[#FF4B00] text-[10px] whitespace-nowrap">
                                {item.progress}% - {item.currentSize} из{" "}
                                {item.totalSize}
                              </span>
                            </div>
                          )}
                          {item.status === "queued" && (
                            <p className="text-[10px] text-white/50">
                              В очереди
                            </p>
                          )}
                        </div>
                        <button className="p-2">
                          <X className="w-3 h-3 text-white/70" />
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Card - Watch Anywhere */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative cursor-pointer"
            onMouseEnter={() => {
              setCursorVariant("card");
              setHoveredCard("watch");
            }}
            onMouseLeave={() => {
              setCursorVariant("default");
              setHoveredCard(null);
            }}
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="w-full md:rounded-[56px] md:w-[800px] h-auto md:h-[800px] cards rounded-xl overflow-hidden p-6 flex flex-col justify-center items-center bg-gradient-to-br from-[#1A0500] via-[#2B0800] to-[#FF4B00]/20 transition-all duration-500 relative">
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black opacity-50" />
              <motion.div
                className="absolute inset-0 bg-[#FF4B00]/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredCard === "watch" ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
              <div className="relative z-10 py-40">
                <motion.h2
                  className="text-2xl md:text-4xl text-white text-center font-bold mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Смотрите где угодно
                </motion.h2>
                <motion.p
                  className="text-white/70 text-center text-base md:text-2xl px-14 mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Скачав мобильное приложение, вы сможете сохранять любимые
                  фильмы и сериалы в приложении и смотреть где угодно
                </motion.p>
                <motion.div
                  className="flex items-center justify-center gap-4 flex-wrap"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {[Google, Huawei, Apple].map((src, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link href="/" target="_blank">
                        <Image
                          src={src}
                          alt={`App Store ${index + 1}`}
                          width={168}
                          height={60}
                          className="rounded-lg transition-all duration-300 inline-block cursor-pointer"
                        />
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="md:rounded-[56px] cursor-pointer rounded-xl border border-zinc-500/40 h-auto w-full md:h-[225px] flex items-center justify-center p-6 bg-gradient-to-r from-black via-[#1A0500]/120 to-[#2B0800]/45 hover:from-[#2B0800]/45 hover:via-[#FF4B00]/10 hover:to-black transition-all duration-500 relative overflow-hidden"
          onMouseEnter={() => setCursorVariant("card")}
          onMouseLeave={() => setCursorVariant("default")}
          variants={cardVariants}
          whileHover="hover"
        >
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black opacity-50" />
          <div className="flex item-center flex-col md:flex-row px-0 md:px-10 justify-between w-full gap-4 align-middle relative z-10">
            {["Также", "200+ телеканалов", "Смотрите на 3 устройствах"].map(
              (text, index) => (
                <motion.div
                  key={index}
                  className="text-center md:text-left"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.2 }}
                >
                  <h3 className="text-xl md:text-5xl text-white font-bold">
                    {text}
                  </h3>
                  {index > 0 && (
                    <p className="text-white/70 mt-2">
                      {index === 1
                        ? "Национальные и зарубежные"
                        : "Под одним аккаунтом"}
                    </p>
                  )}
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
      <style jsx global>{`
        .cursor {
          background-color: #ff4b00;
          height: 32px;
          width: 32px;
          border-radius: 50%;
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 9999;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default FeatureCards;

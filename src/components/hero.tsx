"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const backgroundImages = ["/toni-1.avif", "/toni-2.avif", "/tanos.webp"];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % backgroundImages.length
        );
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovering]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: custom * 0.2 },
    }),
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="mt-[120px] text-left">
          <motion.h1
            className="text-2xl md:text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Открой безграничный доступ к лучшим фильмам и сериалам
          </motion.h1>
          <motion.p
            className="text-xl md:text-3xl lg:text-5xl font-bold text-white mb-6"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Безопасный мир для ваших детей
          </motion.p>
          <motion.p
            className="text-xl md:text-3xl lg:text-5xl font-bold text-white mb-6"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Уникальные рекомендации для каждого пользователя
          </motion.p>
          <motion.p
            className="text-xl md:text-3xl lg:text-5xl font-bold text-white mb-12"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            Начни свое кино-путешествие прямо сейчас
          </motion.p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}

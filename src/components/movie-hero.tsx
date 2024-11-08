"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import profilePicture from "../../public/profile-picture.png";
import profilePictureOne from "../../public/profile-picture-1.png";
import profilePictureTwo from "../../public/profile-picture-2.png";
import profilePictureThree from "../../public/profile-picture-3.png";
import profilePictureFive from "../../public/profile-picture-4.png";
import profilePictureFifty from "../../public/profile-picture-5.png";
import profilePictureSix from "../../public/profile-picture-6.png";
export default function MovieHero() {
  const [gradientAngle, setGradientAngle] = useState<number>(0); // Use 'number' instead of 'Number'

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientAngle((prevAngle) => (prevAngle + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const movies: { image: StaticImageData }[] = [
    { image: profilePicture },
    { image: profilePictureOne },
    { image: profilePictureTwo },
    { image: profilePictureThree },
    { image: profilePictureFive },
    { image: profilePictureFifty },
    { image: profilePictureSix },
  ];

  return (
    <div className="relative overflow-hidden bg-black">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-50 rounded-full backdrop-blur-[700px]"
        style={{
          background: `linear-gradient(${gradientAngle}deg, rgba(255, 0, 0, 0.5), rgba(0, 0, 255, 0.5))`,
          filter: `blur(120px)`,
          height: "100vh", // Example height
          width: "100%", // Example width
        }}
        animate={{
          backgroundPosition: [`0% 0%`, `100% 0%`],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />
      <div className="absolute backdrop-blur-[800px]" />
      <div className="container-fluid mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 z-20"
        >
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-4">
            Создавайте профили для детей
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Подарите детям мир приключений с их любимыми героями. Он создан
            специально для них и уже доступен с вашей подпиской.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7  gap-4 mb-12">
          {movies.map((movie, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-[12/20] group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent rounded-lg transform -skew-x-6 scale-[0.97] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src={movie.image}
                alt="movie in films"
                fill
                className="object-cover rounded-lg shadow-2xl shadow-purple-500/20 transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 14vw"
              />
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <button className="dark:bg-[#FF5708] bg-zinc-500/10 hover:text-white hover:bg-transparent backdrop-blur-md border border-zinc-500/20 rounded-full py-4 px-14 dark:text-white dark:hover:bg-[#FF5708] dark:border-[#FF5708]">
            Начать просмотр
          </button>
        </motion.div>
      </div>
    </div>
  );
}

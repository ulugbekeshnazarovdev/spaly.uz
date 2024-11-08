"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import pictureProfileOne from "../../public/profile-picture-1.png";
import pictureProfileTwo from "../../public/profile-picture-2.png";
import pictureProfileThree from "../../public/profile-picture-3.png";
import pictureProfileFour from "../../public/profile-picture-4.png";
import pictureProfileFive from "../../public/profile-picture-5.png";
import pictureProfileSix from "../../public/profile-picture-6.png";
import SPlay from "../../public/splay.png";
import QrCode from "../../public/qr-intersoft.png";

export default function StreamingLanding() {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const movies = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    title: `Movie ${i + 1}`,
    image: [
      pictureProfileOne,
      pictureProfileTwo,
      pictureProfileThree,
      pictureProfileFour,
      pictureProfileFive,
      pictureProfileSix,
    ][i % 6],
  }));

  return (
    <div className="p-4 sm:p-8 md:p-16 lg:p-20 bg-black w-full">
      <div className="relative h-auto md:min-h-[620px] bg-black border-2 rounded-[30px] dark:border-[#FF5708] sm:rounded-[50px] border-zinc-500/50 overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent z-10" />

        {/* Tilted movie posters background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4 transform -rotate-12 scale-125 translate-x-1/4">
            {movies.map((movie, index) => (
              <motion.div
                key={movie.id}
                className="relative aspect-[2/3]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onMouseEnter={() => setIsHovered(movie.id)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <Image
                  src={movie.image}
                  alt={movie.title}
                  fill
                  className="object-cover rounded-lg transition-transform duration-300 ease-in-out"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                  style={{
                    transform:
                      isHovered === movie.id ? "scale(1.05)" : "scale(1)",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-20 container mx-auto px-4 py-8 sm:py-12 flex flex-col justify-center min-h-[500px] md:min-h-[620px]">
          <div className="w-full md:max-w-5xl">
            {/* Logo and QR code section */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 sm:mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-2 w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 flex items-center justify-center"
              >
                <Image
                  src={SPlay}
                  alt="S-PLAY"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-4 w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 flex items-center justify-center"
              >
                <Image
                  src={QrCode}
                  alt="QR Code"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </motion.div>
            </div>

            {/* Text content */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 text-center sm:text-left"
            >
              Готовы смотреть S-PLAY?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-sm sm:text-base md:text-lg text-white/80 mb-6 sm:mb-8 text-center sm:text-left"
            >
              Перейдите в сервис или отсканируйте QR-код и скачайте приложение
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex justify-center sm:justify-start"
            >
              <button className="dark:bg-[#FF5708] bg-zinc-500/10 hover:text-white hover:bg-transparent backdrop-blur-md border border-zinc-500/20 rounded-full py-3 sm:py-4 px-12 sm:px-24 text-sm sm:text-base md:text-lg dark:text-white dark:hover:bg-[#FF5708] dark:border-[#FF5708] transition-all duration-300">
                Перейти
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

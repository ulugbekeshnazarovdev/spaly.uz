"use client";
import { Swiper as SwiperType } from "swiper"; // Import the Swiper type

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Scrollbar } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import Marquee from "react-fast-marquee";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Images from "../../public/carusel.png";
import ImagesTwo from "../../public/carusel-2.png";
import ImagesThree from "../../public/carusel-3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Movie type definition
type Movie = {
  id: number;
  title: string;
  image: StaticImageData;
};

// Mock data for movies
const movies: Movie[] = [
  { id: 1, title: "Inception", image: ImagesThree },
  { id: 2, title: "The Dark Knight", image: Images },
  { id: 3, title: "Interstellar", image: ImagesTwo },
  { id: 4, title: "Pulp Fiction", image: ImagesThree },
  { id: 5, title: "Inception", image: ImagesThree },
  { id: 6, title: "The Dark Knight", image: Images },
  { id: 7, title: "Interstellar", image: ImagesTwo },
  { id: 8, title: "Pulp Fiction", image: ImagesThree },
];

export function MovieCarousel() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.on("slideChange", () => {
        setActiveIndex(swiperInstance.activeIndex);
      });
    }
    return () => {
      if (swiperInstance) {
        swiperInstance.off("slideChange");
      }
    };
  }, [swiperInstance]);
  const slideVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative w-full py-12 bg-black">
      <div className="container-fluid mx-auto px-4 md:px-[131px]">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-12"
        >
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold  text-white dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-teal-400 to-blue-500 mb-6"
          >
            What to watch in SPlay?
          </motion.h2>
        </motion.div>
        <Swiper
          modules={[Pagination, Autoplay, Scrollbar]}
          spaceBetween={20}
          slidesPerView={3}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 5000 }}
          onSwiper={setSwiperInstance}
          className="rounded-xl overflow-hidden h-auto"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          scrollbar={{ draggable: true, hide: false }}
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  variants={slideVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="relative cursor-pointer width-[856px] height-[480px] rounded-lg overflow-hidden border border-zinc-500/20"
                >
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover scale-105 border"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
                    <Button className="text-white border border-zinc-500/20 font-sans backdrop-blur-xl bg-zinc-500/20 hover:bg-[#FF5708] transition-all duration-300 transform hover:scale-105">
                      <Play className="mr-2 h-4 w-4" /> Watch Now
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-8 ">
          <Marquee gradient={false} speed={70} className="mb-8">
            {movies.map((movie) => (
              <Card
                key={movie.id}
                className="mx-2 w-80 h-full bg-zinc-800 text-white border border-zinc-500/20"
              >
                <CardContent className="p-1">
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            ))}
          </Marquee>
          <Marquee gradient={false} speed={70} direction={"right"}>
            {movies.map((movie) => (
              <Card
                key={movie.id}
                className="mx-2 w-80 h-full bg-zinc-800 text-white border border-zinc-500/20"
              >
                <CardContent className="p-1">
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            ))}
          </Marquee>
        </div>

        <div className="text-center flex justify-center mt-10">
          <Button className="dark:bg-[#FF5708] bg-zinc-500/10 hover:text-white hover:bg-transparent backdrop-blur-md border border-zinc-500/20 rounded-full py-6 px-14 dark:text-white dark:hover:bg-[#FF5708] dark:border-[#FF5708]">
            Начать смотреть
          </Button>
        </div>
      </div>
    </div>
  );
}

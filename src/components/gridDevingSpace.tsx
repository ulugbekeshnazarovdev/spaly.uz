// "use client";

// import React from "react";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import ImagesGrid from "../../public/images.png";
// import Image from "next/image";

// const GridDevingSpace = () => {
//   return (
//     <section className="w-full min-h-auto py-16 md:py-24">
//       <div className="container-fluid mx-auto px-4 md:px-[131px] relative z-10">
//         <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-24 ">
//           <motion.div
//             className="lg:w-1/2 text-center lg:text-left"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
//             >
//               Смотрите на всех устройствах
//             </motion.h2>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8"
//             >
//               Смотрите на Браузеры на устройствах, Смарт-телевизоры, Тв
//               приставки, мобильные устройствах и других устройствах
//             </motion.p>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//             >
//               <button className="bg-[#FF4B00] hover:bg-[#FF6B20] text-white rounded-full px-8 py-3 text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FF4B00] focus:ring-opacity-50">
//                 Перейти
//               </button>
//             </motion.div>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 0.5, x: 0 }}
//             transition={{ duration: 0.4, delay: 0.2 }}
//             className="lg:w-1/2 w-full relative"
//           >
//             <div
//               className="opacity-0.99 bg-[var(--Orange-1,#ff4b00)] filter-blur-[200px] images-radial"
//               style={{
//                 background:
//                   "linear-gradient(16deg, #f25001 -168.62%, #000 66.76%)",
//               }}
//             />
//             <motion.div
//               className="relative z-10 rounded-3xl overflow-hidden"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.4 }}
//             >
//               <Image
//                 src={ImagesGrid}
//                 alt="Devices Grid"
//                 width={779}
//                 height={600}
//                 className="w-full h-auto"
//                 priority
//               />
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50 z-0" />
//     </section>
//   );
// };

// export default GridDevingSpace;

"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ImagesGrid from "../../public/images.png";
import Image from "next/image";

export default function GridDevingSpace() {
  return (
    <section className="w-full min-h-auto py-16 md:py-24 relative overflow-hidden bg-black">
      <div className="container-fluid mx-auto px-4 md:px-[131px] relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-24">
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
            >
              Смотрите на всех устройствах
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8"
            >
              Смотрите на Браузеры на устройствах, Смарт-телевизоры, Тв
              приставки, мобильные устройствах и других устройствах
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button className="dark:bg-[#FF5708] bg-zinc-500/10 hover:text-white hover:bg-transparent backdrop-blur-md border border-zinc-500/20 rounded-full py-6 px-14 dark:text-white dark:hover:bg-[#FF5708] dark:border-[#FF5708]">
                Перейти
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-1/2 w-full relative"
          >
            <div
              className="absolute inset-0 opacity-75 filter blur-[100px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,75,0,0.8) 0%, rgba(255,75,0,0) 70%)",
              }}
            />
            <motion.div
              className="relative z-10 rounded-3xl overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
            >
              <Image
                src={ImagesGrid}
                alt="Devices Grid"
                width={779}
                height={600}
                className="w-full h-auto"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

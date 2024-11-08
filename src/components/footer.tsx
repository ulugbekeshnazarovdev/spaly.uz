"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTelegram, FaFacebook, FaArrowUp } from "react-icons/fa";
import logoSplay from "../../public/logo-s.svg";
import Google from "../../public/google.svg";
import AppStore from "../../public/apple.svg";
import AppGalery from "../../public/app-galery.svg";
import SmartTv from "../../public/smarttv.svg";
export function FooterComponent() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const iconHover = {
    scale: 1.1,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  };

  return (
    <footer className="bg-black dark:border-[#FF5708] text-white py-12 px-4 md:px-8 border-t border-zinc-500/20">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="">
          {/* Logo and Description */}
          <div className="flex items-center justify-between h-[168px] flex-col md:flex-row mb-6">
            <motion.div variants={itemVariants} className=" w-[760px] px-4">
              <Image
                src={logoSplay}
                alt="S-PLAY"
                width={120}
                height={40}
                className="mb-4"
              />
              <p className="text-sm md:text-xl text-zinc-400 w-full">
                Фильмы, сериалы, аниме, документальные фильмы и многое другое на
                тысячах устройств с подключением. Смотрите что угодно, сколько
                угодно и когда угодно без рекламы по фиксированной низкой цене
                за месяц.
              </p>
            </motion.div>
            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="p-2 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="border p-2 border-zinc-500/20 rounded-xl">
                <h3 className="text-zinc-500 text-sm mb-2">Телефон:</h3>
                <p className="text-white">+998 (78) 200 59 95</p>
              </div>

              <div className="border p-2 border-zinc-500/20 rounded-xl">
                <h3 className="text-zinc-500 text-sm mb-2">Telegram bot:</h3>
                <p className="text-white">splaysupport_bot</p>
              </div>
              <div className="border p-2 border-zinc-500/20 rounded-xl">
                <h3 className="text-zinc-500 text-sm mb-2">Адрес:</h3>
                <p className="text-white">
                  город Ташкент, <br /> проспект Амира Темура, 59
                </p>
              </div>
              <div className="border p-2 border-zinc-500/20 rounded-xl">
                <h3 className="text-zinc-500 text-sm mb-2">E-mail:</h3>
                <p className="text-white">support@swinmipley.tv</p>
              </div>
            </motion.div>
          </div>
          <div className="flex items-center justify-between flex-col md:flex-row mb-6 gap-4  h-[168px]">
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-sm text-zinc-500 mb-4">
                Мы в социальных сетях:
              </h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://instagram.com"
                  whileHover={iconHover}
                  className="bg-zinc-900 p-3 rounded-full"
                  target="_blank"
                >
                  <FaInstagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://web.telegram.com"
                  whileHover={iconHover}
                  target="_blank"
                  className="bg-zinc-900 p-3 rounded-full"
                >
                  <FaTelegram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://facebook.com/"
                  target="_blank"
                  whileHover={iconHover}
                  className="bg-zinc-900 p-3 rounded-full"
                >
                  <FaFacebook className="w-5 h-5" />
                </motion.a>
                <motion.button
                  onClick={scrollToTop}
                  whileHover={iconHover}
                  className="bg-zinc-900 p-3 rounded-full"
                >
                  <FaArrowUp className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
            {/* App Store Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-sm text-zinc-500 mb-4">Доступно в:</h3>
              <div className="grid grid-cols-4 gap-4">
                <motion.a
                  href="https://googleplay.com"
                  whileHover={{ scale: 1.05 }}
                  target="_blank"
                >
                  <Image
                    src={Google}
                    alt="Google Play"
                    width={120}
                    height={40}
                  />
                </motion.a>
                <motion.a
                  href="https://app-store.com"
                  whileHover={{ scale: 1.05 }}
                  target="_blank"
                >
                  <Image
                    src={AppStore}
                    alt="App Store"
                    width={120}
                    height={40}
                  />
                </motion.a>
                <motion.a
                  href="https://appgallery.huawei.com/Featured"
                  whileHover={{ scale: 1.05 }}
                  target="_blank"
                >
                  <Image
                    src={AppGalery}
                    alt="App Gallery"
                    width={120}
                    height={40}
                  />
                </motion.a>
                <motion.a href="#" whileHover={{ scale: 1.05 }} target="_blank">
                  <Image src={SmartTv} alt="Smart TV" width={120} height={40} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          variants={itemVariants}
          className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500"
        >
          <p>© SPLAY 2020-2022. Все права защищены</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">
              Смотреть на SPLAY
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Политика конфиденциальности
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Пользовательское соглашение
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

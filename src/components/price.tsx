import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image, { StaticImageData } from "next/image";
interface PricePropsData {
  title: string;
  price: string;
  image: StaticImageData;
}
import priceLogo from "../../public/logo-price-1.svg";
import priceLogoOne from "../../public/logo-price-2.svg";
import priceLogoThree from "../../public/logo-price-4.svg";
import Link from "next/link";
const Price = () => {
  const dataCardPrice: PricePropsData[] = [
    {
      title: "Стандарт",
      price: "35 000 Сум / в месяц",
      image: priceLogo,
    },
    {
      title: "S-MIX",
      price: "490 000 сум / в месяц",
      image: priceLogo,
    },
    {
      title: "Setanta",
      price: "35 000 Сум / в месяц",
      image: priceLogoOne,
    },
  ];
  const dataCard: PricePropsData[] = [
    {
      title: "Стандарт",
      price: "35 000 Сум / в месяц",
      image: priceLogo,
    },
    {
      title: "S-MIX",
      price: "490 000 сум / в месяц",
      image: priceLogoThree,
    },
  ];
  return (
    <div className="bg-black text-white py-20">
      <div className="container-fluid mx-auto px-4 md:px-[131px]">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center leading-relaxed px-0 md:px-30 lg:px-60">
          Покупай по отдельности любимые фильмы и сериалы или сразу в одной
          подписке от подписке от нескольких партнеров
        </h2>

        <div className=" mb-10 w-full h-auto">
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-3 px-0 md:px-96 gap-10 mb-8">
            {dataCardPrice.map((item, index) => (
              <Link href="/" key={index}>
                <Card
                  key={index}
                  className="max-sm:w-full backdrop-blur-lg border-2 durations-500 transition-all border-transparent shadow-md bg-zinc-500/10 hover:cursor-pointer hover:text-white hover:bg-[#FF5708] hover:border-[#FF5708]/20 rounded-3xl"
                >
                  <CardContent className="p-4 text-white">
                    <div className="flex items-center justify-start md:justify-around gap-3">
                      <Image src={item.image} alt="" />
                      <div>
                        <h4 className="text-xl"> {item.title}</h4>
                        <strong className="text-sm">{item.price}</strong>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 px-0 md:px-96 gap-10">
            {dataCard.map((item, index) => (
              <Link href="/" key={index}>
                <Card
                  key={index}
                  className="max-sm:w-full backdrop-blur-lg border-2 durations-500 transition-all border-transparent shadow-md bg-zinc-500/10 hover:cursor-pointer hover:text-white hover:bg-[#FF5708] hover:border-[#FF5708]/20 rounded-3xl"
                >
                  <CardContent className="p-4 text-white">
                    <div className="flex items-center justify-start md:justify-center gap-10">
                      <Image src={item.image} alt="" />
                      <div>
                        <h4 className="text-xl"> {item.title}</h4>
                        <strong className="text-sm">{item.price}</strong>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center mt-10">
          <Button
            className="dark:bg-[#FF5708] bg-zinc-500/10 hover:text-white hover:bg-transparent backdrop-blur-md border border-zinc-500/20 rounded-full py-6 px-14 dark:text-white dark:hover:bg-[#FF5708] dark:border-[#FF5708]"
            variant="outline"
          >
            Подписаться
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Price;

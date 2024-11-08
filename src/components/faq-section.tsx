"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const faqs = [
    {
      question: "Что такое S-PLAY?",
      answer:
        "S-PLAY — это стриминговый сервис, позволяющий смотреть разнообразные удостоенные наград фильмы, сериалы, аниме, документальные фильмы и многое другое на тысячи устройств с подключением к интернету.\n\nВы можете смотреть сколько угодно и когда угодно без рекламы по фиксированной низкой цене за месяц. Вы всегда сможете найти что-нибудь новое — мы добавляем сериалы и фильмы каждую неделю!",
    },
    {
      question: "Что можно посмотреть на S-PLAY?",
      answer:
        "На S-PLAY доступен широкий выбор контента, включая популярные фильмы, сериалы, документальные фильмы, аниме и многое другое. Наша библиотека постоянно обновляется, чтобы предложить вам самые свежие и интересные материалы.",
    },
    {
      question: "Где можно смотреть S-PLAY?",
      answer:
        "S-PLAY доступен на различных устройствах, включая смартфоны, планшеты, смарт-телевизоры, игровые консоли и компьютеры. Вы можете смотреть контент через наше мобильное приложение, веб-браузер или специальные приложения для смарт-ТВ.",
    },
    {
      question: "Подходит ли контент S-PLAY для детей?",
      answer:
        "Да, на S-PLAY есть специальный раздел с детским контентом. Мы предлагаем широкий выбор образовательных и развлекательных программ, подходящих для разных возрастных групп. Кроме того, вы можете настроить родительский контроль, чтобы ограничить доступ к определенному контенту.",
    },
    {
      question: "Как начать смотреть S-PLAY?",
      answer:
        "Чтобы начать смотреть S-PLAY, выполните следующие шаги:\n1. Зайдите на наш официальный сайт или скачайте приложение S-PLAY.\n2. Зарегистрируйтесь, создав учетную запись.\n3. Выберите подходящий тарифный план.\n4. Введите данные для оплаты.\n5. Начните просмотр любимых фильмов и сериалов!",
    },
  ];

  return (
    <div className="h-auto bg-black p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-6xl font-bold text-white mb-6 md:mb-20">
          Часто задаваемые вопросы
        </h2>

        <Accordion
          type="single"
          collapsible
          className="space-y-2 rounded-none"
          value={openItem || `item-0`}
          onValueChange={setOpenItem}
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-0"
            >
              <AccordionTrigger
                className={cn(
                  "flex justify-between items-center w-full",
                  "bg-transparent border-t border-b dark:border-[#FF5708] border-zinc-500/20 hover:bg-[#FF5708]/50",
                  "px-6 py-4 text-left",
                  "transition-all duration-200 ease-in-out",
                  "border-l-none border-r-none",
                  openItem === `item-${index}` && "rounded-b-none"
                )}
              >
                <span
                  className={cn(
                    "text-base md:text-lg underline-none lg:text-2xl font-medium",
                    openItem === `item-${index}`
                      ? "text-[#FF4B00] underline-[#FF4B00]"
                      : "text-white"
                  )}
                >
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent
                className={cn(
                  "bg-[#0D0D0D]",
                  "px-6 py-4 text-zinc-300",
                  "text-sm md:text-base",
                  "rounded-b-xl"
                )}
              >
                {faq.answer.split("\n").map((paragraph, i) => (
                  <p key={i} className="mb-4 last:mb-0 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

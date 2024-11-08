// "use client";

// import * as React from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Globe, ChevronDown } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// interface Language {
//   code: string;
//   name: string;
//   native: string;
//   lower: number;
//   upper: number;
// }

// const LanguageDropdown = () => {
//   const [language, setLanguage] = React.useState<Language>({
//     code: "ru",
//     name: "Russian",
//     native: "Русский",
//     lower: 59,
//     upper: 19,
//   });

//   const languages: Language[] = [
//     {
//       code: "ru",
//       name: "Russian",
//       native: "Русский",
//       lower: 59,
//       upper: 19,
//     },
//     {
//       code: "uz",
//       name: "Uzbek",
//       native: "Uzbek",
//       lower: 32,
//       upper: 15,
//     },
//     {
//       code: "en",
//       name: "English",
//       native: "English",
//       lower: 45,
//       upper: 23,
//     },
//   ];

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <motion.button
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//           className="flex items-center gap-3 rounded-full border outline-none border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md transition-colors hover:bg-white/20"
//         >
//           <Globe className="h-5 w-5 text-white/70" />
//           <span className="text-white">{language.native}</span>
//           <ChevronDown className="h-4 w-4 text-white/70" />
//         </motion.button>
//       </DropdownMenuTrigger>
//       <AnimatePresence>
//         <DropdownMenuContent
//           align="start"
//           className="min-w-[200px] rounded-xl border border-white/10 bg-white/10 p-2 backdrop-blur-md"
//         >
//           {languages.map((lang) => (
//             <DropdownMenuItem
//               key={lang.code}
//               className="rounded-lg focus:bg-white/20"
//               onSelect={() => setLanguage(lang)}
//             >
//               <motion.div
//                 initial={{ opacity: 0, y: 5 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -5 }}
//                 className="flex w-full items-center justify-between py-1"
//               >
//                 <span className="text-sm font-medium text-white">
//                   {lang.native}
//                 </span>
//                 <span className="text-xs text-white/70">{lang.name}</span>
//               </motion.div>
//             </DropdownMenuItem>
//           ))}
//         </DropdownMenuContent>
//       </AnimatePresence>
//     </DropdownMenu>
//   );
// };
// export default LanguageDropdown;
"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Language {
  code: string;
  name: string;
  native: string;
  lower: number;
  upper: number;
}

const LanguageDropdown = () => {
  const [language, setLanguage] = React.useState<Language>({
    code: "ru",
    name: "Russian",
    native: "Русский",
    lower: 59,
    upper: 19,
  });

  const languages: Language[] = [
    {
      code: "ru",
      name: "Russian",
      native: "Русский",
      lower: 59,
      upper: 19,
    },
    {
      code: "uz",
      name: "Uzbek",
      native: "Uzbek",
      lower: 32,
      upper: 15,
    },
    {
      code: "en",
      name: "English",
      native: "English",
      lower: 45,
      upper: 23,
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 sm:gap-3 dark:bg-[#FF4B00] rounded-full border outline-none border-white/10 bg-white/10 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 backdrop-blur-md transition-colors hover:bg-white/20"
        >
          <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-white/70" />
          <span className="text-xs sm:text-sm md:text-base text-white">
            {language.native}
          </span>
          <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 text-white/70" />
        </motion.button>
      </DropdownMenuTrigger>
      <AnimatePresence>
        <DropdownMenuContent
          align="start"
          className="min-w-[160px] dark:bg-[#FF4B00] sm:min-w-[180px] md:min-w-[200px] rounded-xl border border-white/10 bg-white/10 p-1.5 sm:p-2 backdrop-blur-md"
        >
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              className="rounded-lg focus:bg-white/20"
              onSelect={() => setLanguage(lang)}
            >
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="flex w-full items-center justify-between py-1"
              >
                <span className="text-xs sm:text-sm md:text-base font-medium text-white">
                  {lang.native}
                </span>
                <span className="text-[10px] sm:text-xs md:text-sm text-white/70">
                  {lang.name}
                </span>
              </motion.div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </AnimatePresence>
    </DropdownMenu>
  );
};

export default LanguageDropdown;

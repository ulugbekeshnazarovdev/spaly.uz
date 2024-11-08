// "use client";

// import * as React from "react";
// import * as AccordionPrimitive from "@radix-ui/react-accordion";
// import { ChevronDown } from "lucide-react";

// import { cn } from "@/lib/utils";

// const Accordion = AccordionPrimitive.Root;

// const AccordionItem = React.forwardRef<
//   React.ElementRef<typeof AccordionPrimitive.Item>,
//   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
// >(({ className, ...props }, ref) => (
//   <AccordionPrimitive.Item
//     ref={ref}
//     className={cn("border-b", className)}
//     {...props}
//   />
// ));
// AccordionItem.displayName = "AccordionItem";

// const AccordionTrigger = React.forwardRef<
//   React.ElementRef<typeof AccordionPrimitive.Trigger>,
//   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
// >(({ className, children, ...props }, ref) => (
//   <AccordionPrimitive.Header className="flex">
//     <AccordionPrimitive.Trigger
//       ref={ref}
//       className={cn(
//         "flex flex-1 items-center justify-between  py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
//         className
//       )}
//       {...props}
//     >
//       {children}
//       <ChevronDown className={cn
//                     "text-base md:text-lg underline-none lg:text-2xl font-medium",
//                     openItem === `item-${index}`
//                       ? "text-[#FF4B00] underline-[#FF4B00]"
//                       : "text-white"
//                   `h-14 w-14 rounded-full active:bg-[#FF4B00] active:text-white border border-zinc-500/20 p-3 shrink-0 text-muted-foreground transition-transform duration-200`} />
//     </AccordionPrimitive.Trigger>
//   </AccordionPrimitive.Header>
// ));
// AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

// const AccordionContent = React.forwardRef<
//   React.ElementRef<typeof AccordionPrimitive.Content>,
//   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
// >(({ className, children, ...props }, ref) => (
//   <AccordionPrimitive.Content
//     ref={ref}
//     className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
//     {...props}
//   >
//     <div className={cn("pb-4 pt-0", className)}>{children}</div>
//   </AccordionPrimitive.Content>
// ));
// AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-14 w-14 rounded-full border border-zinc-500/20 p-3 shrink-0 transition-transform duration-200",
          "text-white active:bg-[#FF4B00] active:text-white",
          "[&[data-state=open]]:rotate-180 [&[data-state=open]]:text-[#FF4B00]"
        )}
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

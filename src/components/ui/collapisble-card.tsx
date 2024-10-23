"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface CollapsibleCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const CollapsibleTitle = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default function CollapsibleCard({
  title,
  children,
  className,
}: CollapsibleCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsExpanded(true);
      } else {
        setIsExpanded(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className={cn("container py-2 px-4 rounded-lg", className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === CollapsibleTitle) {
          return (
            <div className="flex justify-between gap-2 items-center collapsible-title">
              {child}
              <button className="btn" onClick={toggleExpand}>
                <ChevronDown
                  className={cn(
                    "transition-transform duration-300",
                    isExpanded && "-rotate-180"
                  )}
                />
              </button>
            </div>
          );
        } else {
          return (
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial="collapsed"
                  animate="expanded"
                  exit="collapsed"
                  variants={{
                    expanded: { height: "auto", opacity: 1 },
                    collapsed: { height: 0, opacity: 0 },
                  }}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  {child}
                </motion.div>
              )}
            </AnimatePresence>
          );
        }
      })}
    </div>

    // <div className={cn("container py-2 px-4 rounded-lg", className)}>
    //   <div className="flex justify-between items-center collapsible-title">
    //     <h2 className="uppercase font-[600] text-xl text-[var(--text-heading)]">
    //       {title}
    //     </h2>
    //     <button className="btn" onClick={toggleExpand}>
    //       <ChevronDown
    //         className={cn(
    //           "transition-transform duration-300",
    //           isExpanded && "-rotate-180"
    //         )}
    //       />
    //     </button>
    //   </div>
    // <AnimatePresence initial={false}>
    //   {isExpanded && (
    //     <motion.div
    //       initial="collapsed"
    //       animate="expanded"
    //       exit="collapsed"
    //       variants={{
    //         expanded: { height: "auto", opacity: 1 },
    //         collapsed: { height: 0, opacity: 0 },
    //       }}
    //       transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
    //       className="overflow-hidden"
    //     >
    //       {children}
    //     </motion.div>
    //   )}
    // </AnimatePresence>
    // </div>
  );
}

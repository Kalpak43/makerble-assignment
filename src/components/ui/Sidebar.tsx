"use client";

import { useEffect, useState } from "react";
import {
  Home,
  PanelLeftClose,
  FolderGit2,
  Building2,
  Images,
  Ellipsis,
  ChevronDownIcon,
  Star,
  Laugh,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import Image from "next/image";

export default function Sidebar({
  expanded,
  closeSidebar,
}: {
  expanded: boolean;
  closeSidebar: () => void;
}) {
  const navItems = [
    { link: "/", name: "Home", icon: Home },
    { link: "/projects", name: "Projects", icon: FolderGit2 },
    { link: "/organisations", name: "Organisations", icon: Building2 },
    { link: "/albums", name: "Albums", icon: Images },
  ];

  const [revealMore, setRevealMore] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const sidebar = document.getElementById("sidebar");
      if (sidebar && !sidebar.contains(event.target as Node)) {
        closeSidebar();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={cn(
        "flex flex-col bg-gray-800 overflow-x-hidden text-white transition-all duration-300 ease-in-out shadow-2xl fixed inset-y-0 py-4 md:pt-20 z-50 md:z-40 w-0 md:w-16 group md:hover:w-64",
        expanded ? "w-64" : "w-0"
      )}
      id="sidebar"
    >
      <ul className="flex-1 overflow-y-auto overflow-x-hidden">
        <li className="block md:hidden">
          <button
            className="p-4"
            onClick={() => {
              closeSidebar();
            }}
          >
            <PanelLeftClose />
          </button>
        </li>
        <li>
          <div className="block md:hidden  p-4">
            <Select defaultValue="project-1">
              <SelectTrigger className=" bg-transparent">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="project-1">Project 1</SelectItem>
                  <SelectItem value="project-2">Project 2</SelectItem>
                  <SelectItem value="project-3">Project 3</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </li>
        {navItems.map((item) => (
          <li key={item.name} className="relative">
            <Link
              href={item.link}
              className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
              aria-label={item.name}
              onClick={() => {
                closeSidebar();
              }}
            >
              <item.icon className="w-6 h-6 min-w-[1.5rem]" />
              <span
                className={cn(
                  "ml-4 transition-opacity duration-300 whitespace-nowrap opacity-0 md:group-hover:opacity-100",
                  expanded && "opacity-100"
                )}
              >
                {item.name}
              </span>
            </Link>
          </li>
        ))}
        <li className="relative">
          <button
            className="block w-full flex p-4 hover:bg-gray-700 transition-colors duration-200"
            onClick={() => setRevealMore((x) => !x)}
          >
            <Ellipsis className="w-6 h-6 min-w-[1.5rem] " />
            <span
              className={cn(
                "ml-4 transition-opacity duration-300 whitespace-nowrap opacity-0 md:group-hover:opacity-100",
                expanded && "opacity-100"
              )}
            >
              More
              <ChevronDownIcon
                className={`inline-block mx-1 ${
                  revealMore ? "-rotate-180" : "rotate-0"
                } transition-all duration-200`}
              />
            </span>
          </button>
          <AnimatePresence initial={false}>
            {revealMore && (
              <motion.ul
                initial="collapsed"
                animate="expanded"
                exit="collapsed"
                variants={{
                  expanded: { height: "auto", opacity: 1 },
                  collapsed: { height: 0, opacity: 0 },
                }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                className={cn(
                  " transition-opacity duration-300 whitespace-nowrap opacity-0 md:group-hover:opacity-100",
                  expanded && "opacity-100"
                )}
              >
                <li>
                  <Link
                    href={"/"}
                    className="flex items-center p-4 pl-16 hover:bg-gray-700 transition-colors duration-200"
                    onClick={() => {
                      closeSidebar();
                    }}
                  >
                    <Star className="w-6 h-6 min-w-[1.5rem] " />
                    <span className="ml-4">Explore</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="flex items-center p-4 pl-16 hover:bg-gray-700 transition-colors duration-200"
                    onClick={() => {
                      closeSidebar();
                    }}
                  >
                    <Laugh className="w-6 h-6 min-w-[1.5rem] " />
                    <span className="ml-4">Option 1</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="flex items-center p-4 pl-16 hover:bg-gray-700 transition-colors duration-200"
                    onClick={() => {
                      closeSidebar();
                    }}
                  >
                    <Laugh className="w-6 h-6 min-w-[1.5rem] " />
                    <span className="ml-4">Option 2</span>
                  </Link>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </li>
      </ul>

      <div className="border-t-2 border-gray-600 md:hidden">
        <Link
          href={"/profile"}
          onClick={() => {
            closeSidebar();
          }}
          className="px-4 pt-4 flex items-center gap-2 overflow-hidden"
        >
          <Image
            src="/default.png"
            alt="Logo"
            width={40}
            height={40}
            className="border-2 rounded-full"
          />
          <p className="font-[600]">Kalpak Goshikwar</p>
        </Link>
      </div>
    </nav>
  );
}

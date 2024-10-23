"use client";

import { useEffect } from "react";
import {
  Home,
  PanelLeftClose,
  FolderGit2,
  Building2,
  Images,
  Ellipsis,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
        {navItems.map((item) => (
          <li key={item.name} className="relative">
            <Link
              href={item.link}
              className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
              aria-label={item.name}
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
          <div className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200">
            <Ellipsis className="w-6 h-6 min-w-[1.5rem]" />
            <span
              className={cn(
                "ml-4 transition-opacity duration-300 whitespace-nowrap opacity-0 md:group-hover:opacity-100",
                expanded && "opacity-100"
              )}
            >
              More
            </span>
          </div>
        </li>
      </ul>
    </nav>
  );
}

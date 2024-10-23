"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, Mail, PanelLeftOpen, Search, Star, User, X } from "lucide-react";
import GlobalSearch from "./global-search";

export default function Navbar({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  const [revealSearch, setRevealSearch] = React.useState(false);

  const messages = [
    {
      title: "New Message 1 ",
      message: "This is a new message 1",
    },
    {
      title: "New Message 2",
      message: "This is a new message 2",
    },
  ];

  return (
    <>
      <header className="container py-4 px-4 justify-between flex items-center md:horizontal-list sticky top-0 inset-x-0 z-50">
        <div className="horizontal-list">
          <button
            className="h-[40px] md:hidden"
            onClick={() => {
              toggleSidebar();
            }}
          >
            <PanelLeftOpen />
          </button>
          <div>
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
            </Link>
          </div>
          <div className="hidden md:block">
            <Select defaultValue="project-1">
              <SelectTrigger className="w-[180px]">
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
        </div>
        <div
          className={`flex-1 absolute md:relative inset-0 max-md:container max-md:-translate-y-full transition-all duration-300 ${
            revealSearch ? "max-md:translate-y-0" : "max-md:-translate-y-full"
          }`}
        >
          <GlobalSearch
            revealSearch={revealSearch}
            setRevealSearch={setRevealSearch}
          />
        </div>

        <div className="flex items-center gap-1 md:gap-6">
          <button
            className="btn md:hidden"
            onClick={() => setRevealSearch(true)}
          >
            <Search className="inline-block mx-1" size={16} />
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="btn">
                <Bell className="inline-block" size={16} />
                <span className="ml-1 font-[600]">{0}</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 p-4 space-y-4 mx-2">
              <DropdownMenuLabel>Notification Panel</DropdownMenuLabel>
              <div className="aspect-square text-sm text-center flex items-center justify-center">
                <p>No Notifications here</p>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="btn">
                <Mail className="inline-block" size={16} />
                <span className="ml-1 font-[600]">{messages.length}</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 p-4 space-y-4 mx-2">
              <DropdownMenuLabel>Messages Panel</DropdownMenuLabel>
              <div className="text-xs space-y-2">
                {messages.map((message) => (
                  <div
                    key={message.title}
                    className="border-2 p-1 rounded-lg hover:border-gray-300 cursor-pointer relative"
                  >
                    <p className="font-[600]">{message.title}</p>
                    <p>{message.message}</p>
                    <button className="absolute top-0 right-0">
                      <X className="inline-block" size={12} />
                    </button>
                  </div>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className=" border-2 rounded-full hidden md:block overflow-hidden">
                <Image src="/default.png" alt="Logo" width={40} height={40} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mx-2">
              <DropdownMenuRadioGroup>
                <DropdownMenuRadioItem value="top">
                  <Link href={"/profile"} className="block w-full">
                    <User className="mx-2 inline-block" size={16} />
                    My Profile
                  </Link>
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="top">
                  <Star className="mx-2 inline-block" size={16} />
                  <Link href={"/"} className="block w-full">
                    Upgrade
                  </Link>
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </>
  );
}

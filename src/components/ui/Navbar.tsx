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
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, Mail, PanelLeftOpen, Search, X } from "lucide-react";

export default function Navbar({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  const [revealSearch, setRevealSearch] = React.useState(false);

  return (
    <header className="container justify-between flex items-center md:horizontal-list sticky top-0 inset-x-0 z-50">
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
        className={`flex-1 flex items-center gap-2 absolute md:static inset-0 max-md:container -translate-y-full md:translate-y-0 transition-all duration-300 ${
          revealSearch ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Input
          type="text"
          placeholder="Search Anything"
          className="md:max-w-[500px] mx-auto"
        />
        <button
          className="btn md:hidden"
          onClick={() => setRevealSearch(false)}
        >
          <X className="inline-block mx-1"  />
        </button>
      </div>
      <div className="flex items-center gap-1 md:gap-6">
        <button className="btn md:hidden" onClick={() => setRevealSearch(true)}>
          <Search className="inline-block mx-1" size={20} />
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="btn">
              <Bell className="inline-block" size={20} />0
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup>
              <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="bottom">
                Bottom
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="btn">
              <Mail className="inline-block" size={20}  />0
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup>
              <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="bottom">
                Bottom
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className=" border-2 rounded-full hidden md:block">
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup>
              <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="bottom">
                Bottom
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

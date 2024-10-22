import {
  ChevronDown,
  ChevronUp,
  Heart,
  MessageSquarePlus,
  SendHorizonal,
  Settings,
} from "lucide-react";
import React, { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

export default function NewsCard() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hideCommentBar, setHideCommentBar] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="py-4 px-2 border-2 hover:border-gray-300 rounded-lg space-y-2 transition-all duration-300 relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="btn absolute top-0 right-0">
            <Settings className="inline-block mx-1" size={20} color="#337ab7" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuRadioGroup>
            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex items-center gap-2">
        <div className="h-12 border-2 aspect-square rounded-full"></div>
        <div>
          <h3 className="font-[600]">Kalpak</h3>
          <h4 className="text-xs">1d ago</h4>
        </div>
      </div>
      <div className="flex gap-1 overflow-x-scroll hide-scrollbar">
        <span className="rounded-full text-xs font-[600] py-1 px-2 bg-green-300">
          PHQ9
        </span>
      </div>
      <div className="px-4 post-content">
        <p className={`text-sm ${isExpanded ? "" : "line-clamp-3"} relative`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          pellentesque, eros nec luctus. Sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
          {!isExpanded && (
            <span className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent"></span>
          )}
        </p>
        <button
          onClick={toggleExpand}
          className="mt-2 flex items-center text-blue-500 hover:text-blue-700"
        >
          {isExpanded ? (
            <>
              Read less <ChevronUp className="ml-1 h-4 w-4" />
            </>
          ) : (
            <>
              Read more <ChevronDown className="ml-1 h-4 w-4" />
            </>
          )}
        </button>
      </div>
      <hr />
      <div className="relative">
        <button className="btn group">
          <Heart className="inline mx-1" size={20} color="red" />
        </button>
        <button className="btn" onClick={() => setHideCommentBar((x) => !x)}>
          <MessageSquarePlus
            className="inline mx-1"
            size={20}
            fill={hideCommentBar ? "none" : "black"}
          />
        </button>
        <div
          className={`bg-white p-1 flex gap-2 comment-section transition-all duration-200 ${
            hideCommentBar ? "z-[-1] opacity-0" : "opacity-100"
          }`}
        >
          <AnimatePresence initial={true}>
            {!hideCommentBar && (
              <motion.div
                initial="collapsed"
                animate="expanded"
                exit="collapsed"
                variants={{
                  expanded: { height: "auto" },
                  collapsed: { height: 0 },
                }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="overflow-hidden w-full bg-white p-1 flex gap-2 comment-section"
              >
                <Input
                  type="text"
                  placeholder="Write a comment"
                  className="md:max-w-[500px] mx-auto focus-visible:ring-1"
                />
                <Button className="bg-[var(--btn-primary)] hover:bg-[var(--btn-primary-hov)] font-[600]">
                  <SendHorizonal className="inline" size={20} />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

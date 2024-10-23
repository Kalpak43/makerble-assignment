import {
  Bookmark,
  ChevronDown,
  ChevronUp,
  EyeOff,
  FlagTriangleRight,
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
import { users } from "@/fakeDB/users";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";

export default function NewsCard({
  id,
  content,
  tag,
  createdOn,
  editedOn,
}: {
  id: number;
  content: string;
  tag: string;
  createdOn: Date;
  editedOn: Date;
}) {
  const { toast } = useToast();
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
            <DropdownMenuRadioItem
              value="top"
              className="font-[600] cursor-pointer"
              onClick={() => {
                toast({ title: "Post Hidden" });
              }}
            >
              <EyeOff className="inline-block mr-2" size={16} /> Hide Post
            </DropdownMenuRadioItem>{" "}
            <DropdownMenuRadioItem
              value="top"
              className="font-[600] cursor-pointer"
              onClick={() => {
                toast({ title: "Post saved" });
              }}
            >
              <Bookmark className="inline-block mr-2" size={16} /> Save
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value="top"
              className="font-[600] cursor-pointer"
              onClick={() => {
                toast({ variant: "destructive", title: "Post Reported to the admin" });
              }}
            >
              <FlagTriangleRight className="inline-block mr-2" size={16} />{" "}
              Report
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex items-center gap-2">
        <div className="h-12 border-2 aspect-square rounded-full">
          <Image
            src={users[id].profile}
            alt={users[id].name}
            width={48}
            height={48}
            className="rounded-full"
          />
        </div>
        <div>
          <h3 className="font-[600]">{users[id].name}</h3>
          <h4 className="text-xs">
            <span>
              {new Intl.DateTimeFormat("en-US", {
                dateStyle: "medium",
                timeStyle: "short",
              }).format(createdOn)}
            </span>{" "}
            (
            <span className="font-[600]">
              edited on{" "}
              {new Intl.DateTimeFormat("en-US", {
                dateStyle: "medium",
                timeStyle: "short",
              }).format(editedOn)}
            </span>
            )
          </h4>
        </div>
      </div>
      <div className="flex gap-1 overflow-x-scroll hide-scrollbar">
        <span className="rounded-full text-xs font-[600] py-1 px-2 bg-green-300">
          {tag}
        </span>
      </div>
      <div className="px-4 post-content">
        <p className={`text-sm ${isExpanded ? "" : "line-clamp-3"} relative`}>
          {content}
          {content.length > 200 && !isExpanded && (
            <span className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent"></span>
          )}
        </p>
        {content.length > 200 && (
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
        )}
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

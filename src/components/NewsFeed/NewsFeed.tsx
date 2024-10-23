import {
  ArrowDownWideNarrow,
  ArrowUpWideNarrow,
  Filter,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import NewsCard from "../ui/news-card";
import { feed as defaultFeed } from "@/fakeDB/feed";
import Modal from "../ui/modal";
import AddFeed from "../ui/add-feed";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "../ui/dropdown-menu";

export default function NewsFeed({ className }: { className?: string }) {
  const [hidden, setHidden] = React.useState(true);
  const [filter, setFilter] = React.useState<"asc" | "desc">("asc");
  const [feed, setFeed] = React.useState(defaultFeed);

  useEffect(() => {
    if (filter === "asc") {
      setFeed((prevFeed) =>
        [...prevFeed].sort((a, b) => {
          return (
            new Date(b.editedOn).getTime() - new Date(a.editedOn).getTime()
          );
        })
      );
    } else {
      setFeed((prevFeed) =>
        [...prevFeed].sort((a, b) => {
          return (
            new Date(a.editedOn).getTime() - new Date(b.editedOn).getTime()
          );
        })
      );
    }
  }, [filter]);

  const openModal = () => {
    setHidden(false);
  };

  const addFeed = (feed: (typeof defaultFeed)[0]) => {
    setFeed((prevFeed) =>
      [
        ...prevFeed,
        {
          ...feed,
        },
      ].sort((a, b) => {
        return new Date(b.editedOn).getTime() - new Date(a.editedOn).getTime();
      })
    );
    setHidden(true);
  };

  return (
    <div
      className={"container pt-2 pb-4 px-4 rounded-lg space-y-6 " + className}
    >
      <div className="flex justify-between items-center">
        <h2 className="uppercase font-[600] text-xl text-[var(--text-heading)]">
          Newsfeed
        </h2>
        <div className="space-x-1">
          <Button
            className="bg-[var(--btn-primary)] hover:bg-[var(--btn-primary-hov)] font-[600]"
            onClick={() => {
              openModal();
            }}
          >
            <Plus className="inline" size={20} />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="btn"
                onClick={() => {
                  openModal();
                }}
              >
                <Filter className="inline mx-1" size={20} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuRadioGroup>
                <DropdownMenuRadioItem
                  value="top"
                  className="font-[600] cursor-pointer"
                  onClick={() => {
                    setFilter("asc");
                  }}
                >
                  <ArrowDownWideNarrow
                    className="inline-block mr-2"
                    size={16}
                  />{" "}
                  Show Newest
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="bottom"
                  className="font-[600] cursor-pointer"
                  onClick={() => {
                    setFilter("desc");
                  }}
                >
                  <ArrowUpWideNarrow className="inline-block mr-2" size={16} />{" "}
                  Show Oldest
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Modal hidden={hidden} closeModal={() => setHidden(true)}>
          <AddFeed addFeed={addFeed} />
        </Modal>
      </div>
      <div className="md:max-h-[835px] md:overflow-y-scroll grid lg:max-xl:grid-cols-2 gap-4">
        {feed.map((item, index) => {
          return (
            <NewsCard
              key={index}
              id={item.userId}
              content={item.content}
              tag={item.tag}
              createdOn={item.createdOn}
              editedOn={item.editedOn}
            />
          );
        })}
      </div>
    </div>
  );
}

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import NewsCard from "../ui/news-card";
import { feed as defaultFeed } from "@/fakeDB/feed";
import Modal from "../ui/modal";
import AddFeed from "../ui/add-feed";

export default function NewsFeed({ className }: { className?: string }) {
  const [hidden, setHidden] = React.useState(true);
  const [feed, setFeed] = React.useState(
    defaultFeed.sort((a, b) => {
      return new Date(b.editedOn).getTime() - new Date(a.editedOn).getTime();
    })
  );

  const openModal = () => {
    setHidden(false);
  };

  const addFeed = (feed: (typeof defaultFeed)[0]) => {
    setFeed((prevFeed) =>
      [
        ...prevFeed,
        {
          ...feed
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
        <Button
          className="bg-[var(--btn-primary)] hover:bg-[var(--btn-primary-hov)] font-[600]"
          onClick={() => {
            openModal();
          }}
        >
          <Plus className="inline" size={20} />
        </Button>
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

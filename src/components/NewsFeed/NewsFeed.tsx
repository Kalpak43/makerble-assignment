import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button"
import React from "react";
import NewsCard from "../ui/news-card";

export default function NewsFeed() {
  return (
    <div className="container pt-2 pb-4 px-4 rounded-lg space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="uppercase font-[600] text-xl text-[var(--text-heading)]">Newsfeed</h2>
        <Button className="bg-[var(--btn-primary)] hover:bg-[var(--btn-primary-hov)] font-[600]">
            <Plus className="inline" size={20} /> 
        </Button>
      </div>
      <div className="md:max-h-[835px] md:overflow-y-scroll grid lg:max-xl:grid-cols-2 gap-4">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
}

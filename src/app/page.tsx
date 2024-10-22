"use client";

import NewsFeed from "@/components/NewsFeed/NewsFeed";
import Tasks from "@/components/Tasks/Tasks";
import CollapisbleCard from "@/components/ui/collapisble-card";

export default function Home() {


  return (
    <main className="grid md:grid-cols-3 xl:grid-cols-8 gap-4">
      <div className="xl:col-span-2 space-y-4">
        <CollapisbleCard title="Events">
          <div className="h-[400px]"></div>
        </CollapisbleCard>
        <CollapisbleCard title="Contacts">
          <div className="h-[400px]"></div>
        </CollapisbleCard>
      </div>
      <div className=" md:col-span-2 xl:col-span-3 space-y-4">
        <Tasks />
        <CollapisbleCard title="Boards">
          <div className="h-[400px]"></div>
        </CollapisbleCard>
      </div>
      <div className="md:max-xl:col-span-3 xl:col-span-3 row-span-2">
        <NewsFeed />
      </div>
    </main>
  );
}

"use client";

import Boards from "@/components/Boards/Boards";
import Contact from "@/components/Contacts/Contact";
import Events from "@/components/Events/Events";
import NewsFeed from "@/components/NewsFeed/NewsFeed";
import Tasks from "@/components/Tasks/Tasks";

export default function Home() {
  return (
    <main className="grid md:grid-cols-3 xl:grid-cols-8 gap-4">
      <div className="xl:col-span-2 space-y-4">
        <Events />
        <Contact />
      </div>
      <div className=" md:col-span-2 xl:col-span-3 space-y-4">
        <Tasks />
        <Boards />
      </div>
      <div className="md:max-xl:col-span-3 xl:col-span-3 row-span-2">
        <NewsFeed />
      </div>
    </main>
  );
}

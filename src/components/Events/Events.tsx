import React from "react";
import CollapisbleCard, { CollapsibleTitle } from "../ui/collapisble-card";
import Link from "next/link";
import { events } from "@/fakeDB/events";

export default function Events({ className }: { className?: string }) {


  return (
    <CollapisbleCard className={"space-y-6 " + className}>
      <CollapsibleTitle>
        <h2 className="uppercase font-[600] text-xl text-[var(--text-heading)]">
          Events
        </h2>
      </CollapsibleTitle>
      <div className="pb-2 tasks-container md:max-h-[300px] md:overflow-y-scroll px-1">
        {events.map((event) => (
          <div key={event.id}>
            <Link
              href="/"
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200 transition-all duration-200"
            >
              <div>
                <h3 className="text-sm font-[600]">{event.title}</h3>
                <p className="text-xs text-gray-500 font-[600]">
                  {new Date(event.startDateTime).toLocaleString()}

                  {" - "}
                  {new Date(event.endDateTime).toLocaleString()}
                </p>
                <p className="text-xs text-gray-500">{event.location}</p>
              </div>
            </Link>
            <hr />
          </div>
        ))}
      </div>
    </CollapisbleCard>
  );
}

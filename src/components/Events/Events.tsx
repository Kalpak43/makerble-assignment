import React from "react";
import CollapisbleCard, { CollapsibleTitle } from "../ui/collapisble-card";
import Link from "next/link";

export default function Events({ className }: { className?: string }) {
  const events = [
    {
      id: 1,
      title: "Event 1",
      startDateTime: "2022-01-01T12:00:00",
      endDateTime: "2022-01-01T14:00:00",
      location: "Location 1",
      participants: ["2 Workers", "3 Volunteers", "1 Manager"],
    },
    {
      id: 2,
      title: "Event 2",
      startDateTime: "2022-01-02T12:00:00",
      endDateTime: "2022-01-02T14:00:00",
      location: "Location 2",
      participants: ["2 Workers", "3 Volunteers", "1 Manager"],
    },
    {
      id: 3,
      title: "Event 3",
      startDateTime: "2022-01-03T12:00:00",
      endDateTime: "2022-01-03T14:00:00",
      location: "Location 3",
      participants: ["2 Workers", "3 Volunteers", "1 Manager"],
    },
    {
      id: 4,
      title: "Event 4",
      startDateTime: "2022-01-04T12:00:00",
      endDateTime: "2022-01-04T14:00:00",
      location: "Location 4",
      participants: ["2 Workers", "3 Volunteers", "1 Manager"],
    },
    {
      id: 5,
      title: "Event 5",
      startDateTime: "2022-01-05T12:00:00",
      endDateTime: "2022-01-05T14:00:00",
      location: "Location 5",
      participants: ["2 Workers", "3 Volunteers", "1 Manager"],
    },
    {
      id: 6,
      title: "Event 6",
      startDateTime: "2022-01-06T12:00:00",
      endDateTime: "2022-01-06T14:00:00",
      location: "Location 6",
      participants: ["2 Workers", "3 Volunteers", "1 Manager"],
    },
    {
      id: 7,
      title: "Event 7",
      startDateTime: "2022-01-07T12:00:00",
      endDateTime: "2022-01-07T14:00:00",
      location: "Location 7",
      participants: ["2 Workers", "3 Volunteers", "1 Manager"],
    },
    {
      id: 8,
      title: "Event 8",
      startDateTime: "2022-01-08T12:00:00",
      endDateTime: "2022-01-08T14:00:00",
      location: "Location 8",
      participants: ["2 Workers", "3 Volunteers", "1 Manager"],
    },
  ];

  return (
    <CollapisbleCard title="Events" className={"space-y-6 " + className}>
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

import React from "react";
import CollapisbleCard, { CollapsibleTitle } from "../ui/collapisble-card";
import Link from "next/link";

export default function Boards({ className }: { className?: string }) {
  const boards = [
    {
      id: 1,
      name: "Board 1",
    },
    {
      id: 2,
      name: "Board 2",
    },
    {
      id: 3,
      name: "Board 3",
    },
    {
      id: 4,
      name: "Board 4",
    },
    {
      id: 5,
      name: "Board 5",
    },
    {
      id: 6,
      name: "Board 6",
    },
    {
      id: 7,
      name: "Board 7",
    },
    {
      id: 8,
      name: "Board 8",
    },
    {
      id: 9,
      name: "Board 9",
    },
    {
      id: 10,
      name: "Board 10",
    },
  ];

  return (
    <CollapisbleCard title="Boards" className={"space-y-6 " + className}>
      <CollapsibleTitle>
        <h2 className="uppercase font-[600] text-xl text-[var(--text-heading)]">
          Boards
        </h2>
      </CollapsibleTitle>
      <div className=" pb-2 tasks-container md:max-h-[300px] md:overflow-y-scroll px-1">
        {boards.map((board) => (
          <div key={board.id}>
            <Link
              href={"/contact/"}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200 transition-all duration-200"
            >
              <div className="h-12 aspect-square border-2 rounded-full"></div>
              <h3 className="text-sm font-[600]">Board 1</h3>
            </Link>
            <hr />
          </div>
        ))}
      </div>
    </CollapisbleCard>
  );
}

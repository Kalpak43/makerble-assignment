import React from "react";
import CollapisbleCard, { CollapsibleTitle } from "../ui/collapisble-card";
import Link from "next/link";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import Modal from "../ui/modal";
import Image from "next/image";

export default function Boards({ className }: { className?: string }) {
  const [hidden, setHidden] = React.useState(true);

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

  const openModal = () => {
    setHidden(false);
  };

  return (
    <CollapisbleCard
      className={"space-y-6 container py-2 px-4 rounded-lg " + className}
    >
      <CollapsibleTitle>
        <div className="flex-1 flex items-center justify-between gap-2">
          <h2 className="uppercase font-[600] text-xl text-[var(--text-heading)]">
            Boards
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
            {/* <AddFeed addFeed={addFeed} /> */}
            <div className="container  p-4 pt-16 rounded-lg text-center">
              <h3 className="text-xl">This is Modal to add new board</h3>
            </div>
          </Modal>
        </div>
      </CollapsibleTitle>
      <div className=" pb-2 tasks-container md:max-h-[300px] md:overflow-y-scroll px-1">
        {boards.map((board) => (
          <div key={board.id}>
            <Link
              href={"/contact/"}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200 transition-all duration-200"
            >
              <div className="h-12 aspect-square border-2 rounded-full overflow-hidden">
                <Image
                  src={"/work-in-progress.jpg"}
                  width={48}
                  height={48}
                  alt="board image"
                  className=""
                />
              </div>
              <h3 className="text-sm font-[600]">{board.name}</h3>
            </Link>
            <hr />
          </div>
        ))}
      </div>
    </CollapisbleCard>
  );
}

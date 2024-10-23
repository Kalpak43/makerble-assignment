import React from "react";
import CollapisbleCard, { CollapsibleTitle } from "../ui/collapisble-card";
import ContactCard from "../ui/contact-card";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import Modal from "../ui/modal";
import { contacts } from "@/fakeDB/contact";

export default function Contact({ className }: { className?: string }) {
  const [hidden, setHidden] = React.useState(true);

  const openModal = () => {
    setHidden(false);
  };

  return (
    <CollapisbleCard title="Contacts" className={"space-y-6 " + className}>
      <CollapsibleTitle>
        <div className="flex-1 flex items-center justify-between">
          <h2 className="uppercase font-[600] text-xl text-[var(--text-heading)]">
            Contacts
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
              <h3 className="text-xl">This is Modal to add new contact</h3>
            </div>
          </Modal>
        </div>
      </CollapsibleTitle>
      <div className=" pb-2 tasks-container md:max-h-[300px] md:overflow-y-scroll px-1">
        {contacts.map((contact) => (
          <ContactCard key={contact.email} {...contact} />
        ))}
      </div>
    </CollapisbleCard>
  );
}

import React from "react";
import CollapisbleCard from "../ui/collapisble-card";
import ContactCard from "../ui/contact-card";

export default function Contact() {
  const contacts = [
    {
      id: 1,
      name: "Contact 1",
      email: "",
      phone: "+1234567890",
    },
    {
      id: 2,
      name: "Contact 2",
      email: "contact2@example.com",
      phone: "+1234567891",
    },
    {
      id: 3,
      name: "Contact 3",
      email: "contact3@example.com",
      phone: "+1234567892",
    },
    {
      id: 4,
      name: "Contact 4",
      email: "contact4@example.com",
      phone: "+1234567893",
    },
    {
      id: 5,
      name: "Contact 5",
      email: "contact5@example.com",
      phone: "+1234567894",
    },
    {
      id: 6,
      name: "Contact 6",
      email: "contact6@example.com",
      phone: "+1234567895",
    },
    {
      id: 7,
      name: "Contact 7",
      email: "contact7@example.com",
      phone: "+1234567896",
    },
    {
      id: 8,
      name: "Contact 8",
      email: "contact8@example.com",
      phone: "+1234567897",
    },
    {
      id: 9,
      name: "Contact 9",
      email: "contact9@example.com",
      phone: "+1234567898",
    },
  ];

  return (
    <CollapisbleCard title="Contacts" className="space-y-6">
      <div className=" pb-2 tasks-container md:max-h-[300px] md:overflow-y-scroll px-1">
        {contacts.map((contact) => (
          <ContactCard key={contact.email} {...contact} />
        ))}
      </div>
    </CollapisbleCard>
  );
}
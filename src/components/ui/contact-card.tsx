import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ContactCard({
  id,
  email,
  phone,
  name,
}: {
  id: number;
  email: string;
  phone: string;
  name: string;
}) {
  return (
    <div key={email}>
      <div className="flex md:max-lg:flex-col md:max-lg:items-start items-center justify-between p-2 rounded-lg">
        <div className="flex items-center gap-2 ">
          <div className="h-12 md:max-lg:h-8 aspect-square border-2 rounded-full"></div>
          <Link
            href={"/contact/" + id}
            className="text-sm md:max-lg:text-xs font-[600] hover:underline"
          >
            {name}
          </Link>
        </div>
        <div className="flex gap-2 md:max-lg:gap-0 items-center md:max-lg:justify-end md:max-lg:w-full">
          <Link href={"mailto:" + email} className="btn">
            {<Mail className="cursor-pointer" size={16} color="#3b82f6" />}
          </Link>
          <Link href={"tel:" + phone} className="btn">
            {<Phone className="cursor-pointer" size={16} color="#3b82f6" />}
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
}

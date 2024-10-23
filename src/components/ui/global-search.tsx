/* eslint-disable */

import React, { useEffect } from "react";
import { Input } from "./input";
import { X } from "lucide-react";
import Link from "next/link";
import { users } from "@/fakeDB/users";
import { contacts } from "@/fakeDB/contact";

export default function GlobalSearch({
  setRevealSearch,
}: {
  revealSearch: boolean;
  setRevealSearch: (reveal: boolean) => void;
}) {
  const [search, setSearch] = React.useState("");
  const [searchResults, setSearchResults] = React.useState<{
    users: {
      id: number;
      name: string;
      email: string;
      phone: string;
      profile: string;
    }[];
    contacts: {
      id: number;
      name: string;
      email: string;
      phone: string;
    }[];
    projects: string[];
  }>({
    users: [],
    contacts: [],
    projects: [],
  });

  useEffect(() => {
    const queryDB = () => {
      setSearchResults({
        users: users.filter((user) => user.name.toLowerCase().includes(search)),
        contacts: contacts.filter((contact) =>
          contact.name.toLowerCase().includes(search)
        ),
        projects: [],
      });
    };

    const timeOut = setTimeout(() => {
      search.length > 0
        ? queryDB()
        : setSearchResults({ users: [], contacts: [], projects: [] });
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [search]);

  return (
    <form className="pl-2 flex items-center gap-2 h-full md:max-w-[500px] mx-auto relative bg-white z-[49]">
      <Input
        type="text"
        placeholder="Search Anything"
        className="mx-auto peer"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <button
        className="btn md:hidden"
        onClick={() => setRevealSearch(false)}
        type="button"
      >
        <X className="inline-block mx-1" />
      </button>
      <div
        className={
          "max-md:px-4 py-4 md:min-w-[300px] absolute top-full inset-x-0 -translate-y-[500%] opacity-0 peer-focus:translate-y-0 peer-focus:opacity-100 hover:translate-y-0 hover:opacity-100 active:translate-y-0 active:opacity-100 transition-all duration-300 max-md:backdrop-blur z-[-1] "
        }
      >
        <div className="container p-4 rounded-lg border-2 border-[var(--btn-secondary)] space-y-4 overflow-y-auto max-h-[70vh]">
          <div className="space-y-2 border-b-2">
            <h3 className="font-[600]">
              Users ({searchResults.users.length} Results found):
            </h3>
            <div className=" divide-y-2">
              {searchResults.users.map((user) => {
                return (
                  <div key={user.id}>
                    <Link
                      href={"/user/" + user.id}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200 transition-all duration-200"
                    >
                      {user.name}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="space-y-2 border-b-2">
            <h3 className="font-[600]">
              Contacts({searchResults.contacts.length} Results found):
            </h3>
            <div className=" divide-y-2">
              {searchResults.contacts.map((contact) => {
                return (
                  <div key={contact.id}>
                    <Link
                      href={"/contact/" + contact.id}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200 transition-all duration-200"
                    >
                      {contact.name}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="fixed inset-0 backdrop-blur z-[-1000] mt-20 invisible peer-focus:visible opacity-0 peer-focus:opacity-100 transition-opacity duration-300 delay-200"></div>
    </form>
  );
}

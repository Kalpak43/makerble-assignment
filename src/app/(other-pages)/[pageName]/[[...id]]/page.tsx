"use client";

import Link from "next/link";
import React from "react";
import { notFound } from "next/navigation";
import CollapsibleCard, {
  CollapsibleTitle,
} from "@/components/ui/collapisble-card";
import { projects } from "@/fakeDB/projects";
import { organisations } from "@/fakeDB/organisations";
import { albums } from "@/fakeDB/albums";
import DetailedTemplateCard from "@/components/ui/detailed-template-card";
import { AlbumType, OrgType, ProjectType } from "@/app/types";

type Params = {
  pageName: string;
  id?: string[];
};

export default function page({ params }: { params: Params }) {
  const fakeDB = {
    projects: projects,
    organisations: organisations,
    albums: albums,
  };

  if (
    params.pageName !== "projects" &&
    params.pageName !== "organisations" &&
    params.pageName !== "albums"
  ) {
    notFound();
  }

  const pageName = params.pageName;

  const data: OrgType[] | ProjectType[] | AlbumType[] = fakeDB[pageName];

  const id = params.id ? Number(params.id.join("/")) : 0;

  if (id < 0 || id >= data.length) {
    return notFound();
  }

  return (
    <main className="grid md:grid-cols-3 gap-4 h-full ">
      <div>
        <CollapsibleCard className="max-h-[80vh] overflow-y-auto">
          <CollapsibleTitle>
            <div>
              <h2 className="uppercase font-[600] text-xl text-[var(--text-heading)]">
                {params.pageName}
              </h2>
            </div>
          </CollapsibleTitle>
          <div className=" divide-y-2 ">
            {data.map((item, index) => {
              return (
                <div key={index + 100}>
                  <Link
                    href={`/${pageName}/${index}`}
                    className={`block p-2 hover:bg-gray-200 rounded-lg font-[600] transition-all duration-200 ${
                      id === index ? "bg-gray-200" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </div>
              );
            })}
          </div>
        </CollapsibleCard>
      </div>

      <div className="container pt-2 pb-4 px-4 rounded-lg space-y-6 md:max-h-[80vh] overflow-y-auto md:col-span-2">
        <DetailedTemplateCard data={data[id]} />
      </div>
    </main>
  );
}

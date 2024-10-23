import { AlbumType, OrgType, ProjectType } from "@/app/types";
import { contacts } from "@/fakeDB/contact";
import { projects } from "@/fakeDB/projects";
import { users } from "@/fakeDB/users";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DetailedTemplateCard({
  data,
}: {
  data: OrgType | ProjectType | AlbumType;
}) {
  if ("orgId" in data) {
    const org = data as OrgType;
    return (
      <div className="space-y-6">
        <h2 className="uppercase font-[600] text-xl text-[var(--text-heading)]">
          Organisation Details
        </h2>
        <div className="space-y-4">
          <h3 className="uppercase font-[600] text-xl">{org.name}</h3>
        </div>
        <p>
          <span className="font-[600]">Members:</span>
        </p>

        <div className="flex items-center w-full flex-wrap p-2 gap-2">
          {org.contactIds.map((contactIds) => {
            return (
              <Link
                href={"/"}
                key={contactIds}
                className="p-2 bg-gray-200 hover:bg-gray-300 rounded-lg flex gap-2 items-center"
              >
                <div className="h-12 rounded-full aspect-square">
                  <Image
                    src={"/default.png"}
                    alt={contacts[contactIds].name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
                <p className="font-[600]">{contacts[contactIds].name}</p>
              </Link>
            );
          })}
        </div>
        <p>
          <span className="font-[600]">Projects:</span>
        </p>
        <div className="flex items-center w-full flex-wrap p-2 gap-2">
          {org.projectIds.map((projectId) => {
            return (
              <Link
                href={"/projects/" + projectId}
                key={projectId}
                className="p-2 bg-gray-200 hover:bg-gray-300 rounded-lg flex gap-2 items-center"
              >
                <p className="font-[600]">{projects[projectId].name}</p>
              </Link>
            );
          })}
        </div>
      </div>
    );
  } else if ("projId" in data) {
    const project = data as ProjectType;
    return (
      <div className="space-y-6">
        <h2 className="uppercase font-[600] text-xl text-[var(--text-heading)]">
          Project Details
        </h2>
        <div className="space-y-4">
          <h3 className="uppercase font-[600] text-xl">{project.name}</h3>
          <p>
            <span className="font-[600]">Description:</span>{" "}
            {project.description}
          </p>
          <p>
            <span className="font-[600]">Status:</span> {project.status}
          </p>
          <p>
            <span className="font-[600]">Members:</span>
          </p>

          <div className="flex items-center w-full flex-wrap p-2 gap-2">
            {project.memberIds.map((memberId) => {
              return (
                <Link
                  href={"/"}
                  key={memberId}
                  className="p-2 bg-gray-200 hover:bg-gray-300 rounded-lg flex gap-2 items-center"
                >
                  <div className="h-12 rounded-full aspect-square">
                    <Image
                      src={users[memberId].profile}
                      alt={users[memberId].name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  </div>
                  <p className="font-[600]">{users[memberId].name}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    const album = data as AlbumType;
    return (
      <div className="space-y-6">
        <h2 className="uppercase font-[600] text-xl text-[var(--text-heading)]">
          Album Details
        </h2>
        <div className="space-y-4">
          <h3 className="uppercase font-[600] text-xl">{album.name}</h3>
          <p>
            <span className="font-[600]">Description:</span> {album.description}
          </p>
          <p>
            <span className="font-[600]">Content:</span>
          </p>
          <div className="flex items-center justify-center w-full flex-wrap p-2 gap-2">
            {album.images.map((image, index) => {
              return (
                <Image
                  key={index}
                  src={image}
                  alt={album.name + index}
                  width={200}
                  height={200}
                  className="rounded-lg aspect-square object-cover  "
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

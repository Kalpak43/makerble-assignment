export type OrgType = {
  orgId: number;
  name: string;
  contactIds: number[];
  projectIds: number[];
};

export type ProjectType = {
  projId: number;
  name: string;
  description: string;
  status: string;
  memberIds: number[];
};

export type AlbumType = {
  albId: number;
  name: string;
  description: string;
  images: string[];
};

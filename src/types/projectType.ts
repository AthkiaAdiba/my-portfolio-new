export type TProject = {
  projectName: string;
  image: string[];
  projectDescription: string;
  features: string[];
  technologies: string;
  liveLink: string;
  serverCodeLink: string;
  clientCodeLink: string;
};

export type TFetchedProject = {
  projectName: string;
  image: string[];
  projectDescription: string;
  features: string[];
  technologies: string;
  liveLink: string;
  serverCodeLink: string;
  clientCodeLink: string;
  createdAt: string;
  updatedAt: string;
  _id: string;
};

export type UserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

export type TBlog = {
  title: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
  postDate: string;
};

export type TFetchedBlog = {
  _id: string;
  title: string;
  image: string;
  content: string;
  category: string;
  tags: string[];
  postDate: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

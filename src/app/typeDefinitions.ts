export interface Project  {
  id: string,
  name: string,
  date: string,
  discipline: string,
  description: string,
  designers: Designer["id"][]
  images: Images[]
  coverImage: string
  tags: string[]
}
export interface Images {
  imageURL: string,
  caption: string
}

export type Designer = {
  id: string,
  firstName: string,
  lastName: string,
  imageURL: string,
  location: string,
  roles: string[],
  blurb: string,
  socials: Socials[]
};

export type Socials = {
  platform: string,
  link: string
}
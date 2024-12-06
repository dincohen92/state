interface Project  {
  id: string,
  name: string,
  date: string,
  discipline: string,
  description: string,
  designers: string[]
  images: Images[]
  coverImage: string
  tags: string[]
}

interface Images {
  imageURL: string,
  caption: string
}

interface Designer {
  id: string,
  firstName: string,
  lastName: string,
  imageURL: string,
  location: string,
  roles: string[],
  blurb: string,
  socials: Socials[]
};

interface Socials {
  platform: string,
  link: string
}
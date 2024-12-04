export interface Project  {
  id: string,
  name: string,
  date: string,
  discipline: string,
  description: string,
  designers: Designers[]
  images: Images[]
  coverImage: string
  tags: string[]
}
export interface Images {
  imageURL: string,
  caption: string
}

export interface Designers {
  name: string,
  role: string
}
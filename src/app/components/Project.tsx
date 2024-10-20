import Link from "next/link";
import Image from "next/image";
import projectData from "../projectData.json"

type Project = {
  id: string,
  name: string,
  date: Date,
  discipline: string,
  description: string,
  designers: Designers
  images: Images
  coverImage: string
  tags: string[]
}
type Images =   {
  imageURL: string,
  caption: string
}

type Designers =   {
  name: string,
  role: string
}

let projects : Project[] = new Project[]
if (projectData.length){
  projects = projectData.map((project) =>
    <div key={project} className="project-card- container">
      <Link  href={project.id} className="project-card">
        <Image src={project.images[0].imageURL} alt="project-thumbnail" className="project-thumbnail" fill={true}/>
        <div className="project-card-details">
          <div className="project-card-details-header">
            <h3>{project.name}</h3>
            <p>{project.date} | {project.discipline}</p>
          </div>
          <p className="project-card-details-description">{project.description}</p>
        </div>
      </Link>
      <hr className="horizontal-divider"/>
    </div>
  );
}

function Project() {
  return (
    <div>
      {projects}
    </div>
  );
}

export default Project;
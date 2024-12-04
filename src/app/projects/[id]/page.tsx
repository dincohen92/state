'use client'
import { useParams } from "next/navigation";
import Image from "next/image";
import Header from "../../components/Header";
import projectData from "../../projectData.json"
import {Project, Images} from "../../typeDefinitions"

function ProjectDetails() {
  const params = useParams<{ tag: string; item: string; id:string}>()
  const project : Project = projectData.find(proj => proj.id === params.id)

  const images = project.images.map((image: Images) =>
    <Image key={image.caption} src={image.imageURL} alt="project-image" className="" height={300} width={300}></Image>
  );

  return (
    <div  className="project-details-page">
      <Header/>
      <div className="flex flex-row flex-wrap gap-3 justify-center px-3 md:px-0">
        {images}
      </div>
      <div className="project-card-details">
        <div>{project.name}</div>
        <div>{project.date}</div>
        <div>{project.discipline}</div>
        <div>{project.description}</div>
      </div>
    </div>
  );
}

export default ProjectDetails;
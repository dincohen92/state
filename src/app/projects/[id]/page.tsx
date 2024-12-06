'use client'
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import projectData from "../../projectData.json"
import designerData from "../../designerData.json"

function ProjectDetails() {
  const params = useParams<{id:string}>()
  const project : Project = projectData.find(proj => proj.id === params.id)

  const images = project.images.map((image: Images) =>
    <Image key={image.caption} src={image.imageURL} alt="project-image" className="" height={300} width={300}></Image>
  );

  const designers = project.designers.map((designerId) => {
    const designer : Designer = designerData.find(des => des.id === designerId)
    return (
      <Link href={`/designers/${designer.id}`} key="designer">
        <div>{designer.firstName} {designer.lastName}</div>
        <div>{designer.roles}</div>
      </Link>
    )
  })

  return (
    <div  className="project-details-page">
      <div className="flex flex-row flex-wrap gap-3 justify-center px-3 md:px-0">
        {images}
      </div>
      <div className="project-card-details">
        <div>{project.name}</div>
        <div>{project.date}</div>
        <div>{project.discipline}</div>
        <div>{project.description}</div>
        <div>{designers}</div>
      </div>
    </div>
  );
}

export default ProjectDetails;
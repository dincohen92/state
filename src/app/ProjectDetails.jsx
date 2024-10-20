import {useParams} from "react-router-dom"
import Image from "next/image";
import Header from "./components/Header";
import projectData from "./projectData.json"

function ProjectDetails() {
  const {projectId} = useParams()
  const project = projectData.find(proj => proj.id === projectId)

  const images = project.images.map((image) =>
    <Image key={image} src={image.imageURL} alt="project-image" className="project-image"></Image>
  );

  return (
    <div  className="project-details-page">
      <Header/>
      <div className="project-images">
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
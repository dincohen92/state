import {useParams} from "react-router-dom"
import Header from "./components/Header";

let projectData = require('./projectData.json');

function ProjectDetails() {
  const {projectId} = useParams()
  const project = projectData.find(proj => proj.id === projectId)

  const images = project.images.map((image) =>
    <img src={image.imageURL} alt="project-image" className="project-image"></img>
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
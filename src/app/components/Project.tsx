import Link from "next/link";
import Image from "next/image";
import projectData from "../projectData.json"

function ProjectPage() {
  if (projectData.length){
    return (
      projectData.map((project: Project) =>
        <div key={"project"} className="project-card- container">
          <Link  href={`/projects/${project.id}`} className="project-card">
            <Image src={project.coverImage} alt="project-thumbnail" className="project-thumbnail" width={200} height={200}/>
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
      )
    );
  } else {
    return(
      <div>Coming Soon</div>
    );
  }
}

export default ProjectPage;
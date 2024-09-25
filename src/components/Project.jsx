import "../index.css"
import {Link} from 'react-router-dom';

let projectData = require('../projectData.json');
let projects = <p>Coming Soon!</p>
if (projectData.length){
  projects = projectData.map((project) =>
    <div className="project-card- container">
      <Link  to={project.id} className="project-card">
        <img src={project.images[0].imageURL} alt="project-thumbnail" className="project-thumbnail"/>
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
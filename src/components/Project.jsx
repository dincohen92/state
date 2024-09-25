import "../index.css"
import {Link} from 'react-router-dom';

let projectData = require('../projectData.json');
let projects = <p>Coming Soon!</p>
if (projectData.length){
  projects = projectData.map((project) =>
    <Link  to={project.id} className="project-card">
      <img src={project.images[0].imageURL} alt="project-thumbnail" className="project-thumbnail"/>
      <div className="project-card-details">
        <div>{project.name}</div>
        <div>{project.date}</div>
        <div>{project.discipline}</div>
        <div>{project.description}</div>
      </div>
    </Link>
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
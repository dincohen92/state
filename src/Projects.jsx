import Header from "./components/Header";
import Project from "./components/Project";

function Projects() {
  return (
    <div className="projects-page">
      <Header/>
      <h1>RECENT PROJECTS</h1>
      <div>
        <Project/>
      </div>
    </div>
  );
}

export default Projects;

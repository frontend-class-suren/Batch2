import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  const projectList = [
    { id: 1, title: "Project One" },
    { id: 2, title: "Project Two" },
  ];

  return (
    <div className="container">
      <h1>My Projects</h1>
      <div className="row">
        {projectList.map((project) => (
          <div className="col-md-4" key={project.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <Link to={`/projects/${project.id}`} className="btn btn-primary">Read More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

import React from "react";
import { useParams } from "react-router-dom";

function ProjectDetails() {
  const { id } = useParams();
  return (
    <div className="container">
      <h1>PROJECTS DETAILS</h1>
      <p>Details about project ID: {id}</p>
    </div>
  );
}

export default ProjectDetails;
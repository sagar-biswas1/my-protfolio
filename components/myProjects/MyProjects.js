import React from "react";
import ProjectCard from "./ProjectCard";

const MyProjects = ({ projects }) => {
  return (
    <div className="container">
      <p className="fs-1 fw-bold text-center text-gradient-style-two">
        My Latest projects
      </p>
      <div className="row row-cols-1 row-cols-md-1 g-4">
        {projects.map((project, i) => (
          <ProjectCard project={project} key={project.name} i={i} />
        ))}
      </div>
    </div>
  );
};

export default MyProjects;

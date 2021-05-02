import React from "react";
import ProjectCard from "./ProjectCard";

const MyProjects = ({ projects }) => {
  return (
    <div class="container">
      <p className="fs-1 fw-bold text-center text-gradient-style-two">
        My Latest projects
      </p>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
};

export default MyProjects;

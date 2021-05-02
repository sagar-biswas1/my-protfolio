import React from "react";

const ProjectCard = ({ project }) => {
  const { name, image, url, serverCode, clientCode } = project;
  return (
    <div class="col">
      <div class="card">
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

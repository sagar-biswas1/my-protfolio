import React from "react";

const ProjectCard = ({ project }) => {
  const { name, image, url, serverCode, clientCode } = project;
  return (
    <div class="col">
      <div class="card h-100">
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
        <div class="d-flex justify-content-between m-3">
          <div>
            <a href={url} target="_blank" class="btn btn-primary">
              Live site
            </a>
          </div>
          <div>
            {" "}
            <a href={clientCode} target="_blank" class="btn btn-primary">
              Go somewhere
            </a>
          </div>

          {serverCode && (
            <div>
              <a href={serverCode} target="_blank" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

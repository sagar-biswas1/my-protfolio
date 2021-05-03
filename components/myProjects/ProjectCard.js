import React from "react";
import Image from "next/image";
import styles from "../../styles/ProjectCard.module.css";
const ProjectCard = ({ project }) => {
  const { name, image, url, serverCode, clientCode, title, points } = project;
  return (
    <div class="col">
      <div class={`card h-100 ${styles.card} `}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {" "}
          <img src={image} class="card-img-top" alt="" loading="lazy" />
        </a>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p>{title}</p>

          <ul>
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
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
              Clint side code
            </a>
          </div>

          {serverCode && (
            <div>
              <a href={serverCode} target="_blank" class="btn btn-primary">
                Server code
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

import React from "react";
import Image from "next/image";
import styles from "../../styles/ProjectCard.module.css";
const ProjectCard = ({ project, i }) => {
  const { name, image, url, serverCode, clientCode, title, points } = project;
  return (
    <div class="col card-style-dark-2">
      {/* <div class={`card h-100 ${styles.card} `}>
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
            <a href={url} target="_blank" class="btn btn-outline-primary btn-sm mt-2">
              Live site
            </a>
          </div>
          <div>
            {" "}
            <a href={clientCode} target="_blank" class="btn btn-outline-primary btn-sm mt-2">
              Clint side code
            </a>
          </div>

          {serverCode && (
            <div>
              <a href={serverCode} target="_blank" class="btn btn-outline-primary btn-sm mt-2">
                Server code
              </a>
            </div>
          )}
        </div>
      </div> */}
      <Card project={project} i={i} />
    </div>
  );
};

const Card = ({ project, i }) => {
  const { name, image, url, serverCode, clientCode, title, points } = project;

  console.log("index--", i);
  return (
    <div class=" mb-3">
      {i % 2 === 0 && (
        <div class="row g-0">
          <div class="col-md-6 d-flex justify-content-center align-items-center">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={image} class="w-100 " alt="..." />
            </a>
          </div>
          <div class="col-md-6">
            <div
              class="card-body text-light"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right, #111111, #272727)",
              }}
            >
              <div class="card-body">
                <h2 class="card-title" style={{ color: "white" }}>
                  {name}
                </h2>
                <p class="fs-4">{title}</p>

                <ul>
                  {points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <div class="d-flex justify-content-between flex-column  flex-sm-row m-3">
                <div>
                  <a
                    href={url}
                    target="_blank"
                    class="btn btn-outline-primary btn-sm mt-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-eye-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                    </svg>{" "}
                    Live site
                  </a>
                </div>
                <div>
                  {" "}
                  <a
                    href={clientCode}
                    target="_blank"
                    class="btn btn-outline-primary btn-sm mt-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-code-slash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                    </svg>{" "}
                    Clint side code
                  </a>
                </div>

                {serverCode && (
                  <div>
                    <a
                      href={serverCode}
                      target="_blank"
                      class="btn btn-outline-primary btn-sm mt-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-code-slash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                      </svg>{" "}
                      Server code
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {i % 2 === 1 && (
        <div class="row g-0 flex-column-reverse flex-md-row">
          <div class="col-md-6">
            <div
              class="card-body text-light"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom left, #111111, #272727)",
              }}
            >
              <div class="card-body">
                <h2 class="card-title" style={{ color: "white" }}>
                  {name}
                </h2>
                <p class="fs-4">{title}</p>

                <ul>
                  {points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <div class="m-3 d-flex justify-content-between flex-column  flex-sm-row m-3">
                <div>
                  <a
                    href={url}
                    target="_blank"
                    class="btn btn-outline-primary btn-sm mt-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-eye-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                    </svg>{" "}
                    Live site
                  </a>
                </div>
                <div>
                  {" "}
                  <a
                    href={clientCode}
                    target="_blank"
                    class="btn btn-outline-primary btn-sm mt-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-code-slash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                    </svg>{" "}
                    Clint side code
                  </a>
                </div>

                {serverCode && (
                  <div>
                    <a
                      href={serverCode}
                      target="_blank"
                      class="btn btn-outline-primary btn-sm mt-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-code-slash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                      </svg>{" "}
                      Server code
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div class="col-md-6 d-flex justify-content-center align-items-center">
            <a href={url} target="_blank" rel="noopener noreferrer">
              {" "}
              <img src={image} class="w-100 " alt="..." />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;

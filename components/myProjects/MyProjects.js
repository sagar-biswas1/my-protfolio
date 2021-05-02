import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "Locks draft",
    image: "/locks.png",
    url: "https://locks-draft.netlify.app/",
    clintCode: "https://github.com/sagar-biswas1/locks-craft-client",
    serverCode: "https://github.com/sagar-biswas1/locks-craft-server",
  },
  {
    name: "Book's Voice",
    image: "/bookVoice.png",
    url: "https://book-voice.netlify.app/",
    clintCode: "https://github.com/sagar-biswas1/book-voice-client",
    serverCode: "https://github.com/sagar-biswas1/book-voice-server",
  },
  {
    name: "Taxi time",
    image: "/taxi.png",
    url: "https://locks-draft.netlify.app/",
    clintCode: "https://github.com/sagar-biswas1/taxi-time",
  },
  {
    name: "Dream league",
    image: "/dreamLeague.png",
    url: "https://locks-draft.netlify.app/",
    clintCode: "https://github.com/sagar-biswas1/dream-league",
  },
];

const MyProjects = () => {
  return (
    <div class="container">
      <p className="fs-1 fw-bold text-center">My Latest projects</p>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
};

export default MyProjects;

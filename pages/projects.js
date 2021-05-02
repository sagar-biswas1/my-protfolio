import React from "react";
import MyProjects from "../components/myProjects/MyProjects";

const allProjects = [
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
    name: "Ongshon digital",
    image: "/ongshon.png",
    url: "https://ongshon-digital.netlify.app/",
    clintCode: "https://github.com/sagar-biswas1/ongshon-digital",
  },
  {
    name: "Labonno Resort",
    image: "/resort.png",
    url: "https://labonno-resort.netlify.app/",
    clintCode: "https://github.com/sagar-biswas1/resort-project",
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

  {
    name: "Dream Eleven",
    image: "/dreamEleven.png",
    url: "https://your-dream-eleven.netlify.app/",
    clintCode: "https://github.com/sagar-biswas1/dream-eleven",
  },
  {
    name: "Mcq test",
    image: "/mcq.png",
    url: "https://sagar-biswas1.github.io/mcq-test/",
    clintCode: "https://sagar-biswas1.github.io/mcq-test/",
  },
  {
    name: "Mcq test",
    image: "/mcq.png",
    url: "https://sagar-biswas1.github.io/mcq-test/",
    clintCode: "https://github.com/sagar-biswas1/note-taking-app",
  },
  {
    name: "Notes taking app",
    image: "/note.png",
    url: "https://sagar-biswas1.github.io/note-taking-app/",
    clintCode: "https://github.com/sagar-biswas1/note-taking-app",
  },
];

const projects = () => {
  return (
    <div>
      <MyProjects projects={allProjects} />
    </div>
  );
};

export default projects;

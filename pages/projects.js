import React from "react";
import MyProjects from "../components/myProjects/MyProjects";

const allProjects = [
  {
    name: "Locks draft",
    image: "/locks.png",
    url: "https://locks-draft.netlify.app/",
    clintCode: "https://github.com/sagar-biswas1/locks-craft-client",
    serverCode: "https://github.com/sagar-biswas1/locks-craft-server",
    text: "A lock smith service providing website.",
  },
  {
    name: "Book's Voice",
    image: "/bookVoice.png",
    url: "https://book-voice.netlify.app/",
    clintCode: "https://github.com/sagar-biswas1/book-voice-client",
    serverCode: "https://github.com/sagar-biswas1/book-voice-server",
    text: "A book selling website.",
  },
  {
    name: "Ongshon digital",
    image: "/ongshon.png",
    url: "https://ongshon-digital.netlify.app/",
    clintCode: "https://github.com/sagar-biswas1/ongshon-digital",
    text: "An Ad boosting service provider website . ",
  },
  {
    name: "Labonno Resort",
    image: "/resort.png",
    url: "https://labonno-resort.netlify.app/",
    clintCode: "https://github.com/sagar-biswas1/resort-project",
    text: "A project based on resort service.",
  },
  {
    name: "Taxi time",
    image: "/taxi.png",
    url: "https://locks-draft.netlify.app/",
    clintCode: "https://github.com/sagar-biswas1/taxi-time",
    text: "A Taxi service providing website.",
  },
  {
    name: "Dream league",
    image: "/dreamLeague.png",
    url: "https://locks-draft.netlify.app/",
    clintCode: "https://github.com/sagar-biswas1/dream-league",
    text: "Website providing different league details. ",
  },

  {
    name: "Dream Eleven",
    image: "/dreamEleven.png",
    url: "https://your-dream-eleven.netlify.app/",
    clintCode: "https://github.com/sagar-biswas1/dream-eleven",
    text: "Demo project for choosing players for a team. ",
  },
  {
    name: "Mcq test",
    image: "/mcq.png",
    url: "https://sagar-biswas1.github.io/mcq-test/",
    clintCode: "https://sagar-biswas1.github.io/mcq-test/",
    text: "A vanilla js project for Mcq test.",
  },

  {
    name: "Notes taking app",
    image: "/note.png",
    url: "https://sagar-biswas1.github.io/note-taking-app/",
    clintCode: "https://github.com/sagar-biswas1/note-taking-app",
    text: "A note taking app using local storage.",
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

import React from "react";
import MyProjects from "../components/myProjects/MyProjects";

const allProjects = [
  {
    name: "Locks Craft",
    image: "/locks.png",
    url: "https://locks-draft.netlify.app/",
    clintCode: "https://github.com/sagar-biswas1/locks-craft-client",
    serverCode: "https://github.com/sagar-biswas1/locks-craft-server",
    title: ` Full-stack MERN project.`,
    points: [
      "A web site providing all kind of locks smith service. ",
      "Users need to login for booking a service. ",
      "There ase admin panels for both the user and admin. ",
      " In admin panel admin can create read update and delete data.",
    ],
  },
  {
    name: "Buddy-zone",
    image: "/buddy-zone.png",
    url: "https://buddy-zone.vercel.app/",
    clintCode: "https://github.com/sagar-biswas1/buddy-zone-client-side",
    serverCode: "https://github.com/sagar-biswas1/buddy-zone-server-side",
    title: ` A full-stack social media app`,
    points: [
      "A user can create his/her account. On creation s/he will get a welcome message though his/her email. ",
      "In case one forgets his password s/he can also change his password after getting a confirmation link through email (sendgrid is integrated). ",
      "Users can publish their posts. They can also delete their posts. There is a search functionality for searching the users by name.",
      "In case one User follow others s/he can also be able to chat with them in real time (Pusher is integrated here).",
    ],
  },
  {
    name: "University Department Management",
    image: "/dept-management.png",
    url: "https://unimanagement-cfb8e.web.app/",
    clintCode:
      "https://github.com/sagar-biswas1/university-department-management/tree/main",

    title: "A team Project.",

    points: [
      "Students can see their class routine, class rooms and all.",
      "Teachers can see their class schedules, room and total attendance in the class.",
      "Both teachers and students can read books from library. They can also see the list of books they have read and books they are reading.",
      "To access dashboard student or teacher must login with their email.",
    ],
  },
  {
    name: "Book's Voice",
    image: "/bookVoice.png",
    url: "https://book-voice.netlify.app/",
    clintCode: "https://github.com/sagar-biswas1/book-voice-client",
    serverCode: "https://github.com/sagar-biswas1/book-voice-server",
    title: "Full-stack MERN project.",

    points: [
      "A book selling website where user can purchase a book.",
      "User needs to login before accessing protected pages.",
      "In the admin panel user can see his/her orders details.",
    ],
  },
  {
    name: "Ongshon digital",
    image: "/ongshon.png",
    url: "https://ongshon-digital.netlify.app/",
    clintCode: "https://github.com/sagar-biswas1/ongshon-digital",
    title: "An Ad boosting service provider website . ",
    points: [
      "User can read the blogs.",
      "They can see different types of services",
      " Users can contact with admin by pressing contact button",
    ],
  },
  {
    name: "Labonno Resort",
    image: "/resort.png",
    url: "https://labonno-resort.netlify.app/",
    clintCode: "https://github.com/sagar-biswas1/resort-project",
    title: "A project based on resort service.",
    points: [
      "Different types os rooms are available",
      "Rooms can be filtered based on price ,capacity etc",
      "By clicking on the details users can see details of the room.",
    ],
  },
  {
    name: "Taxi time",
    image: "/taxi.png",
    url: "https://locks-draft.netlify.app/",
    clintCode: "https://github.com/sagar-biswas1/taxi-time",
    title: " A react based project.",
    points: [
      " A site where an user can book a vehicle for going one place to another.",
      " Implemented react routing, protective routing, user authentication.",
      " Google, Facebook, and Email sign-in/login methods available. ",
    ],
  },
  {
    name: "Dream league",
    image: "/dreamLeague.png",
    url: "https://locks-draft.netlify.app/",
    clintCode: "https://github.com/sagar-biswas1/dream-league",
    title:
      "A react routing based project where league data is loaded base on api.",
    points: [
      "Users can see information about different types of leagues .",
      "By clicking on the see-details button they can see specific info based on league id.",
      "Banner and logo will dynamically changed in league details page.[default banner is set in case there is not banner provided by API]",
    ],
  },

  // {
  //   name: "Dream Eleven",
  //   image: "/dreamEleven.png",
  //   url: "https://your-dream-eleven.netlify.app/",
  //   clintCode: "https://github.com/sagar-biswas1/dream-eleven",
  //   title: "Demo project for choosing players for a team. ",
  // },
  {
    name: "Mcq test",
    image: "/mcq.png",
    url: "https://sagar-biswas1.github.io/mcq-test/",
    clintCode: "https://sagar-biswas1.github.io/mcq-test/",
    title: "A vanilla js project for Mcq test.",
    points: [
      "One can choose the answers.",
      "After submitting the button the result will be provided",
      "result will be stored in local storage",
    ],
  },

  {
    name: "Notes taking app",
    image: "/note.png",
    url: "https://sagar-biswas1.github.io/note-taking-app/",
    clintCode: "https://github.com/sagar-biswas1/note-taking-app",
    title: "A note taking app using local storage.",
    points: [
      "User can save notes",
      "By double taping on a note's field a field can be edited",
      "User can delete a note.",
    ],
  },
];

const projects = () => {
  return (
    <div className="container-background">
      <MyProjects projects={allProjects} />
    </div>
  );
};

export default projects;

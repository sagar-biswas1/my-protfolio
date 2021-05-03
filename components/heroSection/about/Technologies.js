import React from "react";
import Skills from "../../skills/Skills";

const data = [
  {
    name: "Frontend",
    techKnowledge: ["Javascript", "Es6", "React", "Bootstrap", "Next JS"],
    image: "/react.png",
    image2: "/next.png",
    text: `React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.`,
  },
  {
    name: "Other Technologies ",
    techKnowledge: [
      " Firebase",
      "Heroku",
      "Netlify",
      "Google Analytics",
      " GitHub",
      "Pusher ",
    ],
    image: "/firebase.png",
    image2: "/firebase.png",
    text: `Firebase is a Backend-as-a-Service — BaaS — that started as a YC11 startup and grew up into a next-generation app-development platform on Google Cloud Platform.`,
  },
  {
    name: "Familiar-with",
    techKnowledge: [
      "Metarial UI",
      "Tailwind Css",
      "Google Map",
      "JWT Auth",
      "Hash Password ",
      " Ghost CMS",
      "Wordpress",
      "React Native",
    ],
    image2: "/tailwind.png",
    image: "/metarialui.png",
    text: `A utility-first CSS framework packed with classes like flex , pt-4 , text-center and rotate-90 that can be composed to build any design, directly in one's markup. `,
  },
  {
    name: "Backend",
    techKnowledge: ["Node", "Express"],
    image: "/nodepng.png",
    image2: "/javascript.png",
    text: `JavaScript is a programming language commonly used in web development. It was originally developed by Netscape as a means to add dynamic and interactive elements to websites.`,
  },

  {
    name: "Database",
    techKnowledge: ["MongoDB "],
    image: "/mongodb.png",
    image2: "/mongodb.png",
    text: ` MongoDB is a document-oriented NoSQL database used for high volume data storage. Instead of using tables and rows as in the traditional relational databases, MongoDB makes use of collections and documents.`,
  },
];

const Technologies = () => {
  return (
    <div class="container">
      <h1
        className="p-2 text-center mt-3 mb-4 fw-bold"
        style={{ textDecoration: "underline" }}
      >
        MY KEY SKILLS SET
      </h1>

      <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
        {data.map((data) => (
          <Card data={data} key={data.name} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ data }) => {
  const { name, techKnowledge, image, image2, text } = data;
  return (
    <div class="flip-card">
      <div class="col flip-card-inner">
        <div class="card h-100 flip-card-front">
          <img src={image} class="card-img-top" alt="..." />
          <div class="card-body mt-3">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">
              <ul>
                {techKnowledge.map((tech) => (
                  <li key={tech} style={{ listStyle: "none" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-right-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>{" "}
                    {tech}
                  </li>
                ))}
              </ul>
            </p>
          </div>
        </div>
        {/*  */}
        <div class="flip-card-back">
          <img src={image2} class="w-100" alt="" />
          <p class="p-2">{text}</p>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Technologies;

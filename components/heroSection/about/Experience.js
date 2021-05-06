import React from "react";
import Typical from "react-typical";
const Experience = () => {
  return (
    <div className="card p-2">
      <h2>
        <Typical
          steps={["More than 10 projects experience.", 1000]}
          loop={Infinity}
          wrapper="p"
        />{" "}
      </h2>

      <p>
        {" "}
        - Experience in building full-stack projects for the assignment purpose
        where scored full marks.
      </p>
      <p>
        - In my projects I experimented with express.js, mongodb, mongoose,
        react.js, bootstrap, next.js , stripe, tailwind css, metarial ui,
        firebase and some popular npm packages json web token, bcrypt, validator
        etc.
      </p>
      <p>- Provided services related to web design to some of my friends.</p>
    </div>
  );
};

export default Experience;

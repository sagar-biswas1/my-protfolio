import React from "react";

const Myresume = () => {
  return (
    <div className="container ">
      <div className="d-flex justify-content-center">
        {" "}
        <a
          href="https://drive.google.com/uc?export=download&id=1E7ntWd2RjhQL-b23HTQs9WolEDd4ZR6D"
          className="btn btn-primary  m-3"
        >
          Download Resume
        </a>
      </div>
      <div className="m-auto d-flex justify-content-center">
        <iframe
          src="https://drive.google.com/file/d/1E7ntWd2RjhQL-b23HTQs9WolEDd4ZR6D/preview"
          width="80%"
          height="700"
        ></iframe>
      </div>
    </div>
  );
};

export default Myresume;

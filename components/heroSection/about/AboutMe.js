import React from "react";
import AboutTabs from "./AboutTabs";
import Typical from "react-typical";

const AboutMe = () => {
  return (
    <div>
      <div className="card mb-3">
        <div className="bg-light">
          <h1
            className="card-title text-center text-gradien fw-bold p-3 animate__animated animate__bounce animate__bounce "
            style={{ fontSize: "3rem" }}
          >
            ABOUT ME
          </h1>
        </div>
        <div className="row g-0">
          <div className="col-md-4 m-auto">
            <img src="/sagar-two.png" alt="..." className=" w-100" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p
                className="card-text card"
                style={{
                  padding: 4,
                  borderRadius: 10,
                }}
              >
                Hello, I'm Sagar Biswas. A passionate Programmer who likes to
                explore new technologies and try something new with the time
                being. As MERN stack gives a facility to create a flexible and
                scalable web app, I found it much more interesting to start my
                programming career.
              </p>
              <AboutTabs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

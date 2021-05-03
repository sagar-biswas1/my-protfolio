import React from "react";
import AboutTabs from "./AboutTabs";
import Typical from "react-typical";

const AboutMe = () => {
  return (
    <div>
      <div class="card mb-3">
        <div class="bg-info">
          <h1
            class="card-title text-center text-gradient fw-bold p-3 animate__animated animate__bounce animate__bounce "
            style={{ fontSize: "3rem" }}
          >
            ABOUT ME
          </h1>
        </div>
        <div class="row g-0">
          <div class="col-md-4 m-auto">
            <img src="/sagar-two.png" alt="..." class=" w-100" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p
                class="card-text card"
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

import React from "react";
import AboutTabs from "./AboutTabs";
import Typical from "react-typical";

const AboutMe = () => {
  return (
    <div>
      <div class="car mb-3">
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
                class="card-text"
                style={{
                  backgroundColor: "aliceblue",
                  padding: 10,
                  borderRadius: 10,
                }}
              >
                I am a passionate Programmer who likes to explore new
                technologies and try something new with the time being.
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

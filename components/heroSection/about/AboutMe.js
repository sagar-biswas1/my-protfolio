import React from "react";
import AboutTabs from "./AboutTabs";

const AboutMe = () => {
  return (
    <div>
      <div class="car mb-3">
        <div class="row g-0">
          <div class="col-md-4 m-auto">
            <img src="/sagar-two.png" alt="..." class=" w-100" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h1 class="card-title">About me</h1>
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

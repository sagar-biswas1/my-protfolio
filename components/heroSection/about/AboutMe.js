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
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered <a href="#">alteration</a> in
                some form, by injected humour, or randomised words which dont
                look even slightly believable. If you are going to use a passage
                of Lorem Ipsum,
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

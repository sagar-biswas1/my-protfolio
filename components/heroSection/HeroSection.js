import React from "react";
import styles from "../../styles/Hero.module.css";
import Typical from "react-typical";
import Particles from "react-particles-js";
const HeroSection = () => {
  return (
    <div style={{ position: "relative" }}>
      <div class={`car ${styles.heroCard}`}>
        {/* <InfoCard /> */}
        {/* <div class={`card-body ${styles.body}`}>
          <div class={`${styles.text} `}>
            <p
              class="card-title  fw-bold text-white"
              style={{ fontSize: "4vw" }}
            >
              Hi , <br />
              I'm <span style={{ color: "rgb(241, 62, 8)" }}>Sagar Biswas</span>
            </p>

            <p class="card-text " style={{ fontSize: "3vw" }}>
              {" "}
              <Typical
                steps={[
                  "Programmer",
                  1000,
                  "React developer",
                  500,
                  "Frontend developer",
                ]}
                loop={Infinity}
                wrapper="p"
              />
            </p>
            <p className="text-gradient"> Based in Bangladesh </p>

            <a
              href="https://drive.google.com/uc?export=download&id=1ecQy0myu9lDqjo06sh-vUMD3iXWxVOPn"
              class=" animated-butto btn btn-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-file-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z" />
              </svg>{" "}
              Download my resume
            </a>
          </div>
        </div> */}

        <InfoCard />
      </div>
      <div className={styles.particles}>
        <Particles
          params={{
            particles: {
              number: {
                value: 180,
                density: {
                  enable: true,
                  value_area: 1000,
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

const InfoCard = () => {
  return (
    <div class=" mb-3  m-auto" style={{ maxWidth: "85vw" }}>
      <div class="d-flex g-0 flex-column-reverse flex-md-row justify-content-center align-items-center">
        <div class="col-md-7 d-flex justify-content-center align-items-center">
          <div>
            <p
              class="card-title  fw-bold text-white"
              style={{ fontSize: "4vw" }}
            >
              Hi , <br />
              I'm <span style={{ color: "#dc3545" }}>Sagar Biswas</span>
            </p>

            <p class="card-text text-light w-100" style={{ fontSize: "3vw" }}>
              {" "}
              <Typical
                steps={[
                  "Programmer",
                  1000,
                  "React developer",
                  500,
                  "Frontend developer",
                ]}
                loop={Infinity}
                wrapper="p"
              />
            </p>
            <p className="text-warning" style={{ color: "yellow" }}>
              {" "}
              Based in Bangladesh{" "}
            </p>

            <a
              href="https://drive.google.com/uc?export=download&id=1ecQy0myu9lDqjo06sh-vUMD3iXWxVOPn"
              class=" animated-butto btn btn-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-file-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z" />
              </svg>{" "}
              Download my resume
            </a>
          </div>
        </div>
        <div class="col-md-5">
          <img src="/sagar-one.png" class="w-100 img-fluid p-5" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

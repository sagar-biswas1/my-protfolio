import React from "react";
import styles from "../../styles/Hero.module.css";
const HeroSection = () => {
  return (
    <div>
      <div class={`car ${styles.heroCard}`}>
        <div class={`card-body ${styles.body}`}>
          <div class={styles.text}>
            <p class="card-title  fw-bold fs-4 text-white">
              Hi , <br />
              I'm{" "}
              <span style={{ color: "rgb(241, 62, 8)" }}> Sagar Biswas</span>
            </p>

            <p class="card-text ">React developer</p>
            <p> Based in Bangladesh </p>
            <a
              href="https://drive.google.com/uc?export=download&id=1ecQy0myu9lDqjo06sh-vUMD3iXWxVOPn"
              class="btn btn-primary "
            >
              Download my resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

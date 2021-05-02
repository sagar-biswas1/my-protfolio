import React from "react";
import styles from "../styles/Home.module.css";
const Footer = () => {
  return (
    <div className="mt-4">
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Sagar Biswas
        </a>
      </footer>
    </div>
  );
};

export default Footer;

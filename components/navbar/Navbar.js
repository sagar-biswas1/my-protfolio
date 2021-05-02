import React from "react";
import styles from "../../styles/Navbar.module.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <div class="sticky-top">
      <nav class={`navbar navbar-expand-lg navbar-light ${styles.background}`}>
        <div class="container-fluid">
          <Link href="/">
            <a class="navbar-brand">
              <img
                src="/sagar.png"
                style={{ height: 40, width: 40, borderRadius: "50%" }}
              ></img>
            </a>
          </Link>
          <button
            class="navbar-toggler text-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link href="/">
                  <a class="nav-link fs-5 fw-bold active" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link href="/projects">
                  <a class="nav-link fs-5 fw-bold">Projects</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link href="/blog">
                  <a class="nav-link fs-5 fw-bold">Blog</a>
                </Link>
              </li>{" "}
              <li class="nav-item">
                <Link href="/resume">
                  <a class="nav-link fs-5 fw-bold">Resume</a>
                </Link>
              </li>{" "}
              <li class="nav-item">
                <Link href="/about">
                  <a class="nav-link fs-5 fw-bold">About me</a>
                </Link>
              </li>{" "}
              <li class="nav-item">
                <Link href="/contact">
                  <a class="nav-link fs-5 fw-bold">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

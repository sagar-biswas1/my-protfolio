import React from "react";
import styles from "../../styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  console.log("sssssssssss---", router.pathname);
  return (
    // ${styles.background}
    <div class="sticky-top">
      <nav class={`navbar navbar-expand-lg navbar-dark bg-dark `}>
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
                  <a
                    class={`nav-link fs-5 fw-bold ${
                      router.pathname === "/" && "active"
                    }`}
                    aria-current="page"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link href="/projects">
                  <a
                    class={`nav-link fs-5 fw-bold ${
                      router.pathname === "/projects" && "active"
                    }`}
                  >
                    Projects
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link href="/blog">
                  <a
                    class={`nav-link fs-5 fw-bold ${
                      router.pathname === "/blog" && "active"
                    }`}
                  >
                    Blog
                  </a>
                </Link>
              </li>{" "}
              <li class="nav-item">
                <Link href="/resume">
                  <a
                    class={`nav-link fs-5 fw-bold ${
                      router.pathname === "/resume" && "active"
                    }`}
                  >
                    Resume
                  </a>
                </Link>
              </li>{" "}
              <li class="nav-item">
                <Link href="/about">
                  <a
                    class={`nav-link fs-5 fw-bold ${
                      router.pathname === "/about" && "active"
                    }`}
                  >
                    About me
                  </a>
                </Link>
              </li>{" "}
              <li class="nav-item">
                <Link href="/contact">
                  <a
                    class={`nav-link fs-5 fw-bold ${
                      router.pathname === "/contact" && "active"
                    }`}
                  >
                    Contact
                  </a>
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

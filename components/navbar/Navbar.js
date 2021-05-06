import React from "react";
import styles from "../../styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();

  return (
    // ${styles.background}
    <div className="sticky-top">
      <nav className={`navbar navbar-expand-lg navbar-dark bg-dark `}>
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">
              <img
                src="/sagar.png"
                style={{ height: 40, width: 40, borderRadius: "50%" }}
              ></img>
            </a>
          </Link>
          <button
            className="navbar-toggler text-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/">
                  <a
                    className={`nav-link fs-5 fw-bold ${
                      router.pathname === "/" && "active"
                    }`}
                    aria-current="page"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/projects">
                  <a
                    className={`nav-link fs-5 fw-bold ${
                      router.pathname === "/projects" && "active"
                    }`}
                  >
                    Projects
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/blog">
                  <a
                    className={`nav-link fs-5 fw-bold ${
                      router.pathname === "/blog" && "active"
                    }`}
                  >
                    Blog
                  </a>
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link href="/resume">
                  <a
                    className={`nav-link fs-5 fw-bold ${
                      router.pathname === "/resume" && "active"
                    }`}
                  >
                    Resume
                  </a>
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link href="/about">
                  <a
                    className={`nav-link fs-5 fw-bold ${
                      router.pathname === "/about" && "active"
                    }`}
                  >
                    About me
                  </a>
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link href="/contact">
                  <a
                    className={`nav-link fs-5 fw-bold ${
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

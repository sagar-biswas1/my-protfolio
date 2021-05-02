import React from "react";
import Typical from "react-typical";
const Experience = () => {
  return (
    <div>
      <h2>
        <Typical
          steps={["More than 10 projects experience.", 1000]}
          loop={Infinity}
          wrapper="p"
        />{" "}
      </h2>
      <p class="card-text p-2"> Some of the Projects stated here.</p>
      <b>Technology used :</b> react js, react-router-dom, firebase, validator
      package, react-google-maps, bootstrap ,node js , mongodb, express and so
      on.
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <h5 class="fw-bold">Locks craft (A full-stack MERN project.)</h5>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <ul class="list-group">
                <li class="list-group-item active" aria-current="true">
                  Theme: A website providing all kinds of lock smith services.
                </li>
                <li class="list-group-item">
                  - Login system using firebase, Private Routes.
                </li>
                <li class="list-group-item">
                  - Admin panel for users and admin where admin can do CRUD
                  operations. Users can give reviews and they can book after
                  confirming payment (Stripe is integrated here).
                </li>
                <li class="list-group-item">
                  - For the blog section GHOST CMS API is integrated.
                </li>
                <li class="list-group-item d-flex justify-content-around">
                  <span>
                    <a
                      href="https://locks-draft.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="stretched-link text-primary"
                    >
                      Live Site
                    </a>{" "}
                  </span>{" "}
                  <span>
                    <a
                      href="https://github.com/sagar-biswas1/locks-craft-client"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="stretched-link text-primary"
                    >
                      Clint side code{" "}
                    </a>{" "}
                  </span>{" "}
                  <span>
                    <a
                      href="https://github.com/sagar-biswas1/locks-craft-server"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="stretched-link text-primary"
                    >
                      Server side code
                    </a>{" "}
                  </span>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <h5 class="fw-bold">Book-Voice (A full-stack MERN project). </h5>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <ul class="list-group">
                <li class="list-group-item active" aria-current="true">
                  Theme: A Books selling website.
                </li>
                <li class="list-group-item">
                  - User can buy a product. S/he can see his purchase record in
                  order page.
                </li>
                <li class="list-group-item">
                  - User needs to login/sign-in before accessing protected
                  pages.
                </li>
                <li class="list-group-item">
                  - In the admin panel, admin can do CRUD operation.
                </li>
                <li class="list-group-item d-flex justify-content-around">
                  <span>
                    <a
                      href="https://book-voice.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="stretched-link text-primary"
                    >
                      Live Site
                    </a>{" "}
                  </span>{" "}
                  <span>
                    <a
                      href="https://github.com/sagar-biswas1/book-voice-client"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="stretched-link text-primary"
                    >
                      Clint side code{" "}
                    </a>{" "}
                  </span>{" "}
                  <span>
                    <a
                      href="https://github.com/sagar-biswas1/book-voice-server"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="stretched-link text-primary"
                    >
                      Server side code
                    </a>{" "}
                  </span>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <h5 class="fw-bold"> Taxi-time</h5>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <ul class="list-group">
                <li class="list-group-item active" aria-current="true">
                  Theme: Users can book for a transport for going one place to
                  another.
                </li>
                <li class="list-group-item">
                  - A project based on react routing, protective routing, user
                  authentication.
                </li>
                <li class="list-group-item">
                  - User can give booking for different modes of transport for
                  going one place to another. But without login s/he won't be
                  able to book a service.
                </li>
                <li class="list-group-item">
                  - Implemented google, facebook, and email sign-in/login
                  methods.
                </li>
                <li class="list-group-item d-flex justify-content-around">
                  <span>
                    <a
                      href="https://taxi-time.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="stretched-link text-primary"
                    >
                      Live Site
                    </a>{" "}
                  </span>{" "}
                  <span>
                    <a
                      href="https://github.com/sagar-biswas1/taxi-time"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="stretched-link text-primary"
                    >
                      Clint side code{" "}
                    </a>{" "}
                  </span>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

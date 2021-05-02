import React from "react";

const Myresume = () => {
  return (
    <div class="container ">
      <div class="d-flex justify-content-center">
        {" "}
        <a
          href="https://drive.google.com/uc?export=download&id=1ecQy0myu9lDqjo06sh-vUMD3iXWxVOPn"
          class="btn btn-primary  m-3"
        >
          Download Resume
        </a>
      </div>
      <div className="m-auto d-flex justify-content-center">
        <iframe
          src="https://drive.google.com/file/d/1ecQy0myu9lDqjo06sh-vUMD3iXWxVOPn/preview"
          width="80%"
          height="700"
        ></iframe>
      </div>
    </div>
  );
};

export default Myresume;

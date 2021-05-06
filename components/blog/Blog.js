import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="container mt-4">
      <h3 className="text-center"> My latest blog</h3>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Blog;

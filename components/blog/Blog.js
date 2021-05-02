import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div class="container mt-4">
      <h3 class="text-center"> My latest blog</h3>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Blog;

import React from "react";
import BlogCard from "./BlogCard";

const BlogList = ({ blogs, onReadMore, onLoadMore }) => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 explore-blog">Explore Travel Blogs</h2>
      <div className="row">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="col-md-4 col-sm-6 col-12 mb-4 d-flex align-items-stretch"
          >
            <BlogCard blog={blog} onReadMore={onReadMore} />
          </div>
        ))}
      </div>
      {/* Load More Button */}
      <div className="text-center mt-4">
        <button className="load-more" onClick={onLoadMore}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default BlogList;

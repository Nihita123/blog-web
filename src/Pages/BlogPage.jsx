import React from "react";

const BlogPage = ({ blog, onBack }) => {
  return (
    <div className="container mt-5">
      <button className="btn btn-secondary mb-3" onClick={onBack}>
        Back to Blogs
      </button>
      <div className="card shadow-lg">
        <img
          src={blog.image}
          className="card-img-top"
          alt={blog.title}
          style={{ height: "400px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h2 className="card-title">{blog.title}</h2>
          <p className="card-text">{blog.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

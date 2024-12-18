import React from "react";

const BlogCard = ({ blog, onReadMore }) => {
  return (
    <div className="card h-100 shadow-sm border-0">
      <img
        src={blog.image || "https://via.placeholder.com/300"}
        className="card-img-top"
        alt={blog.title}
        style={{
          height: "200px",
          objectFit: "cover",
        }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{blog.title}</h5>
        <p className="card-text">{blog.excerpt}</p>
        <button
          className="btn btn-secondary mt-auto"
          onClick={() => onReadMore(blog.id)}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;

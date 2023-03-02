import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="col-3">
      <div className="blog-card"></div>
      <div className="card-image">
        <img
          src={require("../../Public/images/blog-1.jpg")}
          alt="blog"
          className="img-fluid"
        />
        <div className="blog-content">
          <p className="date">2 March 2023</p>
          <h5 className="title">A beautiful Sunday morning renaissance</h5>
          <p className="desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint fuga
            ut iste 
          </p>
          <Link to="/" className="button">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
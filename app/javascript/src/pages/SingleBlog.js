import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import {HiOutlineArrowLeft} from "react-icons/hi"

import blogImg from "../../Public/images/blog-1.jpg"

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Single Blog"} />
      <BreadCrumb title="Single Blog" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <HiOutlineArrowLeft className="fs-4"/>
                  Go back to Blogs
                </Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img
                  src={blogImg}
                  alt="blog-1"
                  className="img-fluid w-100 my-4"
                />
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ipsam quibusdam omnis ipsa nihil vero mollitia tenetur a iste
                  quo voluptatem eius sequi repudiandae, laborum nulla natus
                  facere est rem veniam!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;

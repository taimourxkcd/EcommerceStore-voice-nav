import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { Link } from "react-router-dom";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";

import Container from "../components/Container";

const SingleProduct2 = () => {

  const location = useLocation();
  const searchResults = location.state.searchResults;

  // console.log("Search Results:", searchResults.title);
  console.log("Title:", searchResults[0].title);
  
  const imageSrc = searchResults[0].image_path;
  console.log(imageSrc)
  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img: imageSrc ? imageSrc : "",
  };
  const [orderedProduct, setorderedProduct] = useState(true);

  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  return (
    <>
      <Meta title={"Single Product"} />
      <BreadCrumb title=" Single Product" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>

              <div>
                <div className="other-product-images d-flex flex-wrap gap-15">
                  <div>
                    <img
                      src={searchResults[0].image_path}
                      alt="watch"
                      className="img-fluid"
                    />
                  </div>
                  <div>
                    <img
                      src={searchResults[0].image_path}
                      alt="watch"
                      className="img-fluid"
                    />
                  </div>
                  <div>
                    <img
                      src={searchResults[0].image_path}
                      alt="watch"
                      className="img-fluid"
                    />
                  </div>
                  <div>
                    <img
                      src={searchResults[0].image_path}
                      alt="watch"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">{searchResults[0].title}</h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">$ 100</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={3}
                    edit={false}
                    activeColor="#ffc700"
                  ></ReactStars>
                  <p className="mb-0 t-review"> ( 2 Reviews )</p>
                </div>
                <a className="review-btn" href="#review">
                  Wtite a Review
                </a>
                <div className="border-bottom py-3">
                  <div className="d-flex gap-10 align-items-center my-2 ">
                    <h3 className="product-heading">Type</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2 ">
                    <h3 className="product-heading">Brand</h3>
                    <p className="product-data">Havels</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2 ">
                    <h3 className="product-heading">Category</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2 ">
                    <h3 className="product-heading">Tags</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2 ">
                    <h3 className="product-heading">Availability</h3>
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3 ">
                    <h3 className="product-heading">Size</h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        S
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        M
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XL
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XXL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3 ">
                    <h3 className="product-heading">Color</h3>
                    <Color />
                  </div>
                  <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-4 ">
                    <h3 className="product-heading flex-row algin-items-center">
                      Quantity:
                    </h3>
                    <div className="">
                      <input
                        type="number"
                        name=""
                        min={1}
                        max={10}
                        style={{ width: "70px " }}
                        className="form-control"
                      />
                    </div>
                    <div className="d-flex align-item-center gap-30 ms-5">
                      <button className="button border-0" type="submit">
                        Add to cart
                      </button>
                      <button to="" className="button signup">
                        Buy it Now
                      </button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <a href="">
                        <TbGitCompare className="fs-5 me-2" />
                        Add to compare
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <AiOutlineHeart className="fs-5 me-2" />
                        Add to Wishlist
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="py-3">
                    <div className="d-flex gap-10 align-items-center my-3 ">
                      <h3 className="product-heading">Shipping & Returns</h3>
                      <p className="product-data">
                        Free Shipping and returns available on all orders!{" "}
                        <br /> We ship all PAK domestic orders within{" "}
                        <b>5-10 days</b>
                      </p>
                    </div>
                  </div>
                  <div className="border-bottom py-3">
                    <div className="d-flex gap-10 my-2 ">
                      <h3 className="product-heading">Copy Product Link</h3>
                      <a
                        href="javascript:void(0)"
                        onClick={() => {
                          copyToClipboard(
                            "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?cs=srgb&dl=pexels-pixabay-280250.jpg&fm=jpg"
                          );
                        }}
                      >
                        Product Link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officia molestias nisi ullam odio facere. Tempora incidunt
                inventore quisquam fugiat, corporis reprehenderit repellendus
                sit velit at voluptatum laborum debitis accusantium. Eaque!
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Reviews</h3>

            <div className="review-inner-wrapper">
              <div className="review-head  d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>{" "}
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffc700"
                    ></ReactStars>
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="">
                      Write a Review
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h3>Write a Review</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={true}
                      activeColor="#ffc700"
                    ></ReactStars>
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="4"
                      className="w-100 form-control"
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Submit Review</button>
                  </div>
                </form>

                <div className="reviews mt-3">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Taimour</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffc700"
                      ></ReactStars>
                    </div>

                    <p className="mt-3">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Magnam doloremque eaque accusantium dicta aliquid sit,
                      distinctio illum harum, optio modi consequatur ex eius
                      odit enim recusandae sed ratione pariatur omnis!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <h3 className="section-heading">Our Popular Products</h3>
          <div className="row">
            <ProductCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleProduct2;

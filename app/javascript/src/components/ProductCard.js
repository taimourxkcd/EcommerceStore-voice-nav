import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import watchImg from "../../Public/images/watch.jpg"
import wishImg from "../../Public/images/wish.svg";
import tvImg from "../../Public/images/tv.jpg";
import addcartImg from "../../Public/images/add-cart.svg";
import viewImg from "../../Public/images/view.svg";
import prodcompareImg from "../../Public/images/prodcompare.svg";

const ProductCard = (props) => {
  const { grid } = props;

  let location = useLocation();

  return (
    <>
      <div
        className={` ${
          location.pathname === "/store" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link to=":id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wishImg} alt="wish" />
            </Link>
          </div>
          <div className="product-image">
            <img
              src={watchImg}
              alt="product image"
              className="img-fluid"
            />
            <img
              src={tvImg}
              alt="product image"
              className="img-fluid"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffc700"
            ></ReactStars>
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nihil
              dolor alias dignissimos soluta numquam cumque ratione, voluptates
              exercitationem. Dolor odit rerum ad laborum, quis dolore corrupti
              incidunt. Sapiente, odit!
            </p>
            <p className="price">PKR 100</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img
                  src={addcartImg}
                  alt="add-cart"
                />
              </Link>
              <Link>
                <img src={viewImg} alt="view" />
              </Link>
              <Link>
                <img
                  src={prodcompareImg}
                  alt="compare"
                />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={` ${
          location.pathname === "/store" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wishImg} alt="wish" />
            </Link>
          </div>
          <div className="product-image">
            <img
              src={watchImg}
              alt="product image"
              className="img-fluid"
            />
            <img
              src={tvImg}
              alt="product image"
              className="img-fluid"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffc700"
            ></ReactStars>
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nihil
              dolor alias dignissimos soluta numquam cumque ratione, voluptates
              exercitationem. Dolor odit rerum ad laborum, quis dolore corrupti
              incidunt. Sapiente, odit!
            </p>
            <p className="price">PKR 100</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img
                  src={addcartImg}
                  alt="add-cart"
                />
              </Link>
              <Link>
                <img src={viewImg} alt="view" />
              </Link>
              <Link>
                <img
                  src={prodcompareImg}
                  alt="compare"
                />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;

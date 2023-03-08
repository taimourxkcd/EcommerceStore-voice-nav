import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";

import watchImg from "../../Public/images/watch.jpg";
import grImg from "../../Public/images/gr.svg";
import gr2Img from "../../Public/images/gr2.svg";
import gr3Img from "../../Public/images/gr3.svg";
import gr4Img from "../../Public/images/gr4.svg";


const OurStore = () => {
  const [grid, setGrid] = useState(4);

  return (
    <div>
      <Meta title={"Our Store"} />
      <BreadCrumb title=" Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop by Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availablility</h5>
                  <div>
                    <div className="form-check">
                      <label className="form-check-label" htmlFor="">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name=""
                          id=""
                          value="checkedValue"
                        />
                        In Stock (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label" htmlFor="">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name=""
                          id=""
                          value="checkedValue"
                        />
                        Out of Stock (0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="From"
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput1"
                        placeholder="To"
                      />
                      <label htmlFor="floatingInput">To</label>
                    </div>
                  </div>

                  <h5 className="sub-title">Colors</h5>

                  <div className="d-flex flex-wrap">
                    <Color />
                  </div>
                  <h5 className="sub-title">Size</h5>

                  <div className="form-check">
                    <label className="form-check-label" htmlFor="color-1">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name=""
                        id="color-1"
                        value="checkedValue"
                      />
                      S (2)
                    </label>
                  </div>

                  <div className="form-check">
                    <label className="form-check-label" htmlFor="color-2">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name=""
                        id="color-12"
                        value="checkedValue"
                      />
                      M (2)
                    </label>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Headphone
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Laptop
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Mobile
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Vivo
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img
                        src={watchImg}
                        alt="watch"
                        className="img-fluid"
                      />
                    </div>
                    <div className="w-50">
                      <h5>
                        Kids headphones bulk 10 pack mutli colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffc700"
                      />
                      <b>300 PKR</b>
                    </div>
                  </div>

                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img
                        src={watchImg}
                        alt="watch"
                        className="img-fluid"
                      />
                    </div>
                    <div className="w-50">
                      <h5>
                        Kids headphones bulk 10 pack mutli colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffc700"
                      />
                      <b>300 PKR</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p
                      className="mb-0 d-block"
                      style={{ width: "100px", "margin-bottom": "0" }}
                    >
                      Sort By:
                    </p>
                    <select name="" className="form-control form-select" id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected="selected">
                        Best Selling
                      </option>
                      <option value="title-ascending">
                        Alhabetically, A-Z
                      </option>
                      <option value="title-descending">
                        Alhabetically, Z-A
                      </option>
                      <option value="price-ascending">
                        Price, Low to High
                      </option>
                      <option value="price-descending">
                        Price, High to Low
                      </option>
                      <option value="created-ascending">
                        Date, old to new
                      </option>
                      <option value="created-descending">
                        Date, new to old
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">21 Products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        src={gr4Img}
                        alt="grid"
                        className="d-block img-fluid"
                      />
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        src={gr3Img}
                        alt="grid"
                        className="d-block img-fluid"
                      />

                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        src={gr2Img}
                        alt="grid"
                        className="d-block img-fluid"
                      />

                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        src={grImg}
                        alt="grid"
                        className="d-block img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStore;

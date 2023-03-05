import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare"} />
      <BreadCrumb title="Compare" />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src={require("../../Public/images/cross.svg")}
                  alt="cros"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img
                    src={require("../../Public/images/watch.jpg")}
                    alt="watch"
                  />
                </div>

                <div className="compare-product-details">
                  <h5 className="title">
                    Honor Ti 7.0 1 GB ROM 7 Inch With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price mb-3 mt-3"> PKR 10,000.00</h6>
                  <div>
                    <div className="product-detail">
                      <h5>type</h5>
                      <p>Watch</p>
                    </div>
                    <div className="product-detail">
                      <h5>Availability</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color:</h5>
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h5>Size</h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src={require("../../Public/images/cross.svg")}
                  alt="cros"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img
                    src={require("../../Public/images/watch.jpg")}
                    alt="watch"
                  />
                </div>

                <div className="compare-product-details">
                  <h5 className="title">
                    Honor Ti 7.0 1 GB ROM 7 Inch With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price mb-3 mt-3"> PKR 10,000.00</h6>
                  <div>
                    <div className="product-detail">
                      <h5>type</h5>
                      <p>Watch</p>
                    </div>
                    <div className="product-detail">
                      <h5>Availability</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color:</h5>
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h5>Size</h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src={require("../../Public/images/cross.svg")}
                  alt="cros"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img
                    src={require("../../Public/images/watch.jpg")}
                    alt="watch"
                  />
                </div>

                <div className="compare-product-details">
                  <h5 className="title">
                    Honor Ti 7.0 1 GB ROM 7 Inch With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price mb-3 mt-3"> PKR 10,000.00</h6>
                  <div>
                    <div className="product-detail">
                      <h5>type</h5>
                      <p>Watch</p>
                    </div>
                    <div className="product-detail">
                      <h5>Availability</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color:</h5>
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h5>Size</h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src={require("../../Public/images/cross.svg")}
                  alt="cros"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img
                    src={require("../../Public/images/watch.jpg")}
                    alt="watch"
                  />
                </div>

                <div className="compare-product-details">
                  <h5 className="title">
                    Honor Ti 7.0 1 GB ROM 7 Inch With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price mb-3 mt-3"> PKR 10,000.00</h6>
                  <div>
                    <div className="product-detail">
                      <h5>type</h5>
                      <p>Watch</p>
                    </div>
                    <div className="product-detail">
                      <h5>Availability</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color:</h5>
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h5>Size</h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProduct;

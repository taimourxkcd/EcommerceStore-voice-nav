import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src={require("../../Public/images/main-banner-1.jpg")}
                  alt="main banner"
                  className="img-fluid round-3"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From PKR999.00 or PKR42.62/month</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between gap-7 align-items-center">
                <div className="small-banner position-relative fix-size">
                  <img
                    src={require("../../Public/images/catbanner-01.jpg")}
                    alt="main banner"
                    className="img-fluid round-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sale</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From PKR999 <br />
                      to PKR42.62/mo
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src={require("../../Public/images/catbanner-02.jpg")}
                    alt="main banner"
                    className="img-fluid round-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy iPad Air</h5>
                    <p>
                      From PKR999 <br />
                      to PKR42.62/mo
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src={require("../../Public/images/catbanner-03.jpg")}
                    alt="main banner"
                    className="img-fluid round-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>New Arrival</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From PKR999 <br />
                      to PKR42.62/mo
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src={require("../../Public/images/catbanner-04.jpg")}
                    alt="main banner"
                    className="img-fluid round-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sale</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From PKR999 <br />
                      to PKR42.62/mo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-10">
                  <img
                    src={require("../../Public/images/service.png")}
                    alt=""
                  />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over PKR50 </p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img
                    src={require("../../Public/images/service-02.png")}
                    alt=""
                  />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save upto 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img
                    src={require("../../Public/images/service-03.png")}
                    alt=""
                  />
                  <div>
                    <h6>Support 25/7</h6>
                    <p className="mb-0">Shop with an Expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img
                    src={require("../../Public/images/service-04.png")}
                    alt=""
                  />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory Default Price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img
                    src={require("../../Public/images/service-05.png")}
                    alt=""
                  />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src={require("../../Public/images/camera.jpg")}
                    alt="camera"
                  />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src={require("../../Public/images/tv.jpg")}
                    alt="camera"
                  />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src={require("../../Public/images/headphone.jpg")}
                    alt="camera"
                  />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src={require("../../Public/images/camera.jpg")}
                    alt="camera"
                  />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src={require("../../Public/images/camera.jpg")}
                    alt="camera"
                  />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src={require("../../Public/images/tv.jpg")}
                    alt="camera"
                  />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src={require("../../Public/images/headphone.jpg")}
                    alt="camera"
                  />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src={require("../../Public/images/camera.jpg")}
                    alt="camera"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <h3 className="section-heading">Featurd Collection</h3>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <h3 className="section-heading">Famous Products</h3>
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src={require("../../Public/images/famous-1.webp")}
                  alt="famous1"
                  className="img-fluid"
                />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>
                    From PKR399 or <br /> PKR150/mo. for 24 mo.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src={require("../../Public/images/famous-2f.jpg")}
                  alt="famous1"
                  className="img-fluid"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Studio Display</h5>
                  <h6 className="text-dark">600 nits of brightness.</h6>
                  <p className="text-dark">
                    From PKR5k or PKR1k/mo. for 24 mo.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src={require("../../Public/images/famous-3b.webp")}
                  alt="famous1"
                  className="img-fluid "
                />
                <div className="famous-content position-absolute ">
                  <h5 className="text-dark">SmartPhones</h5>
                  <h6 className="text-dark">Smart Phone 13 Pro.</h6>
                  <p className="text-dark">
                    From PKR5k or PKR1k/mo. for 24 mo.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src={require("../../Public/images/famous-4c.webp")}
                  alt="famous1"
                  className="img-fluid "
                />
                <div className="famous-content position-absolute ">
                  <h5 className="text-dark">Home Speakers</h5>
                  <h6 className="text-dark">Room filling Sound</h6>
                  <p className="text-dark">
                    From PKR5k or PKR1k/mo. for 24 mo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products </h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>

      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <h3 className="section-heading">Our Popular Products</h3>
            <div className="row">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </section>

      <section className="marque-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 ww-25">
                    <img
                      src={require("../../Public/images/brand-01.png")}
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 ww-25">
                    <img
                      src={require("../../Public/images/brand-02.png")}
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 ww-25">
                    <img
                      src={require("../../Public/images/brand-03.png")}
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 ww-25">
                    <img
                      src={require("../../Public/images/brand-04.png")}
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 ww-25">
                    <img
                      src={require("../../Public/images/brand-05.png")}
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 ww-25">
                    <img
                      src={require("../../Public/images/brand-06.png")}
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 ww-25">
                    <img
                      src={require("../../Public/images/brand-07.png")}
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 ww-25">
                    <img
                      src={require("../../Public/images/brand-08.png")}
                      alt="brand"
                    />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

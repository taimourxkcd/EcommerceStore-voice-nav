import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";

import mainbannerImg from "../../Public/images/main-banner-1.jpg"
import cartbanner1Img from "../../Public/images/catbanner-01.jpg"
import cartbanner2Img from "../../Public/images/catbanner-02.jpg"
import cartbanner3Img from "../../Public/images/catbanner-03.jpg"
import cartbanner4Img from "../../Public/images/catbanner-04.jpg"
import serviceImg from "../../Public/images/service.png"
import service2Img from "../../Public/images/service-02.png"
import service3Img from "../../Public/images/service-03.png"
import service4Img from "../../Public/images/service-04.png"
import service5Img from "../../Public/images/service-05.png"
import brand1Img from "../../Public/images/brand-01.png"
import brand2Img from "../../Public/images/brand-02.png"
import brand3Img from "../../Public/images/brand-03.png"
import brand4Img from "../../Public/images/brand-04.png"
import brand5Img from "../../Public/images/brand-05.png"
import brand6Img from "../../Public/images/brand-06.png"
import brand7Img from "../../Public/images/brand-07.png"
import brand8Img from "../../Public/images/brand-08.png"
import famous1Img from "../../Public/images/famous-1.webp"
import famous2Img from "../../Public/images/famous-2f.jpg"
import famous3Img from "../../Public/images/famous-3b.webp"
import famous4Img from "../../Public/images/famous-4c.webp"
import cameraImg from "../../Public/images/camera.jpg"
import tvImg from "../../Public/images/tv.jpg"
import headphoneImg from "../../Public/images/headphone.jpg"

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src={mainbannerImg}
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
                    src={cartbanner1Img}
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
                    src={cartbanner2Img}
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
                    src={cartbanner3Img}
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
                    src={cartbanner4Img}
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
                  <img src={serviceImg} alt="" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over PKR50 </p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={service2Img} alt="" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save upto 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={service3Img} alt="" />
                  <div>
                    <h6>Support 25/7</h6>
                    <p className="mb-0">Shop with an Expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={service4Img} alt="" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory Default Price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={service5Img} alt="" />
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
                    src={cameraImg}
                    alt="camera"
                  />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src={tvImg}
                    alt="camera"
                  />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src={headphoneImg}
                    alt="camera"
                  />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src={cameraImg}
                    alt="camera"
                  />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src={cameraImg}
                    alt="camera"
                  />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src={tvImg}
                    alt="camera"
                  />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src={headphoneImg}
                    alt="camera"
                  />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src={cameraImg}
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
                  src={famous1Img}
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
                  src={famous2Img}
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
                  src={famous3Img}
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
                  src={famous4Img}
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
                    <img src={brand1Img} alt="brand" />
                  </div>
                  <div className="mx-4 ww-25">
                    <img src={brand2Img} alt="brand" />
                  </div>
                  <div className="mx-4 ww-25">
                    <img
                      src={brand3Img}
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 ww-25">
                    <img
                      src={brand4Img}
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 ww-25">
                    <img
                      src={brand5Img}
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 ww-25">
                    <img
                      src={brand6Img}
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 ww-25">
                    <img
                      src={brand7Img}
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 ww-25">
                    <img
                      src={brand8Img}
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

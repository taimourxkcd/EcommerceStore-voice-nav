import React, {useState, useEffect} from "react";
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
 const [product, setProduct] = useState(null);
 const location = useLocation();

 useEffect(() => {
   const fetchProduct = async () => {
     try {
       const response = await fetch("http://localhost:3000/api/v1/products/28");
       const data = await response.json();
       setProduct(data);
     } catch (error) {
       console.error("Error fetching product:", error);
     }
   };

   fetchProduct();
 }, []);

 if (!product) {
   return null; // Render a loading state or placeholder if product data is not available yet
 }

 const imgPath = product.image_path;

  return (
    <div className={`col-3`}>
      <Link to=":id" className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <button className="border-0 bg-transparent">
            <img src={wishImg} alt="wish" />
          </button>
        </div>
        <div className="product-image">
          <img
            src={product.image_path}
            alt="product image"
            className="img-fluid"
          />
          <img
            src={product.image_path2}
            alt="product image"
            className="img-fluid"
          />
        </div>
        <div className="product-details">
          <h6 className="brand">{product.brand}</h6>
          <h5 className="product-title">{product.title}</h5>
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
          <p className="price">{product.price}</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <button className="border-0 bg-transparent">
              <img src={addcartImg} alt="add-cart" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={viewImg} alt="view" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={prodcompareImg} alt="compare" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

import React, { useContext } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";

import { CartContext } from "../State/CartContext";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const calculateTotal = (cartItems) => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.productId.price * item.quantity;
    });
    return total;
  };

  // Group cart items by productId
  const groupedItems = cartItems.reduce((groups, item) => {
    const { productId } = item;
    if (!groups[productId.id]) {
      groups[productId.id] = {
        item,
        quantity: 1,
      };
    } else {
      groups[productId.id].quantity += 1;
    }
    return groups;
  }, {});

  const uniqueItems = Object.values(groupedItems);
 console.log(
   "Colors:",
   uniqueItems.map((item) => item.item.productId.color)
 );

  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />

      <Container class1="cart-wrapper home-wrapper-2 py-2">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            {uniqueItems.map(({ item, quantity }) => (
              <div
                key={item.id}
                className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center"
              >
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img
                      src={item.productId.image_path}
                      alt="product img"
                      className="img-fluid"
                    />
                  </div>
                  <div>
                    <p>{item.productId.name}</p>
                    <p>Size: {item.productId.size}</p>
                    <p>Color: {item.productId.color}</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">$ {item.productId.price}</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      className="form-control"
                      type="number"
                      min={1}
                      max={10}
                      name=""
                      id=""
                      value={quantity}
                    />
                  </div>
                  <div>
                    <AiFillDelete className="text-danger" />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">$ {item.productId.price * quantity}</h5>
                </div>
              </div>
            ))}
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/product" className="button">
                Continue Shopping
              </Link>
              <div className="d-flex flex-column align-items">
                <h4>SubTotal: PKR {calculateTotal(cartItems)}</h4>
                <p>Taxes and Shipping calculated at checkout</p>
                <Link to="/checkout" className="button">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;

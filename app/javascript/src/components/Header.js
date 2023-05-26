import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import compareImg from "../../Public/images/compare.svg";
import wishlistImg from "../../Public/images/wishlist.svg";
import userImg from "../../Public/images/user.svg";
import cartImg from "../../Public/images/cart.svg";
import menuImg from "../../Public/images/menu.svg";
import { useNavigate } from "react-router-dom";

import "regenerator-runtime/runtime";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Header = () => {
  // send search query to the backend
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await fetch("/products/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: searchQuery }),
      });
      const data = await response.json();
      setSearchResults(data);
      console.log(data);

      navigate("/searchproduct", { state: { searchResults: data } });
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };
  // Code for button press control starts here:

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.ctrlKey) {
        SpeechRecognition.startListening({ continuous: true });
      }
      if (event.key === "Escape") {
        SpeechRecognition.stopListening();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  //Code for button press control ends here

  const commands = [
    {
      command: "go to home",
      callback: ({ goHome }) => navigate("/"),
    },
    {
      command: "go to about",
      callback: ({ goFav }) => navigate("/about"),
    },
    {
      command: "go to contact",
      callback: ({ goNew }) => navigate("/contact"),
    },
    {
      command: "go to our store",
      callback: ({ goHome }) => navigate("/product"),
    },
    {
      command: "go to cart",
      callback: ({ goFav }) => navigate("/cart"),
    },
    {
      command: "go to blogs",
      callback: ({ goNew }) => navigate("/blogs"),
    },
    {
      command: "compare products",
      callback: ({ goHome }) => navigate("/compare-product"),
    },
    {
      command: "go to wish list",
      callback: ({ goFav }) => navigate("/wishlist"),
    },
    {
      command: "scroll down",
      callback: () => {
        window.scrollTo({
          top: window.pageYOffset + 500,
          behavior: "smooth", // This makes the scrolling smooth instead of instant
        });
      },
    },
    {
      command: "scroll up",
      callback: () => {
        window.scrollTo({
          top: window.pageYOffset - 500,
          behavior: "smooth", // This makes the scrolling smooth instead of instant
        });
      },
    },
    {
      command: "scroll to the top",
      callback: () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },
    },
    {
      command: "scroll to the bottom",
      callback: () => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      },
    },
    {
      command: "scroll to the bottom",
      callback: () => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      },
    },
  ];

  const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping over PKR100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:
                <a className="text-white" href="tel:+92 3328578135">
                  +0900-78601
                </a>
              </p>
            </div>
            <div>
              <input value={transcript} type="text"></input>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white ">VoiceMart</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here..."
                  value={searchQuery}
                  onChange={handleChange}
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <button
                  onClick={handleSearch}
                  className="input-group-text p-3"
                  id="basic-addon2"
                >
                  <BsSearch className="fs-6" />
                </button>
                {searchResults.map((product) => (
                  <Link to={`/searchproduct/${product.id}`} key={product.id}>
                    <div>
                      <h3>{product.name}</h3>
                      {/* Display other relevant product information */}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links gap-1 d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/compare-product"
                    className="d-flex align-items-center text-white"
                  >
                    <img src={compareImg} alt="" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="./wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={wishlistImg} alt="wishlist" />
                    <p className="mb-0">
                      Favourite <br /> wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={userImg} alt="user" />
                    <p className="mb-0">
                      Log in <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={cartImg} alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">PKR 500</p>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={userImg} alt="user" />
                    <p className="mb-0">Logout</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-15">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={menuImg} alt="" />
                      <span className="me-5 d-inline-block">
                        Shop Categories
                      </span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item text-white " to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white " to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white " to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">Our Store</NavLink>
                    <NavLink to="blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

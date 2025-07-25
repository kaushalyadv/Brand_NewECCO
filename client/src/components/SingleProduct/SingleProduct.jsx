import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Context } from "../../utils/context";
import "../Header/Header";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const [buttonText, setButtonText] = useState("ADD TO FAVORITE");
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  const { handleAddCart, handleAddFav } = useContext(Context);

  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };

  const handleFavoriteClick = () => {
    setIsActive((current) => !current);
    setButtonText(isActive ? "ADD TO FAVORITE" : "ADDED TO FAVORITES");
    handleAddFav(data.data[0], quantity);
  
    const animDiv = document.querySelector(".anim");
    animDiv.classList.toggle("animate");
  
    setTimeout(() => {
      animDiv.classList.toggle("animate");
    }, 1000);
    setTimeout(() => {
      setButtonText("ADD TO FAVORITE");
    }, 1000);
  };

  if (!data) return null;

  const product = data.data[0].attributes;

  return (
    <div className="Single-Product-main-content">


<div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={process.env.REACT_APP_DEV_URL + product.img.data[0].attributes.url}
              alt=""
            />
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">&#8377;{product.price}</span>
            <span className="desc">{product.desc}</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button
  className="add-to-cart-button"
                onClick={() => {
                  handleAddCart(data.data[0], quantity);
                  setQuantity(1);
                }}
              >
                <FaCartPlus size={20} />
                &nbsp;&nbsp;ADD TO CART
              </button>
            </div>
            <span className="divider" />

            <div className="info-item">
              <span className="text-bold">
                Category: <span>{product.categories.data[0].attributes.title}</span>
              </span>
              <span className="text-bold">Share:</span>
              <span className="social-icons">
                <FaFacebookF size={16} />
                <FaTwitter size={16} />
                <FaInstagram size={16} />
                <FaLinkedinIn size={16} />
                <FaPinterest size={16} />
              </span>      <button
        className={`favorite ${isActive ? "animate-like" : ""}`}
        onClick={handleFavoriteClick}
      >
        <AiOutlineHeart />
        &nbsp; <span>{buttonText}</span>
      </button>
      </div>
          </div>
        </div>
        <RelatedProducts productId={id} categoryId={product.categories.data[0].id} />
      </div>    </div>
  );
};

export default SingleProduct;

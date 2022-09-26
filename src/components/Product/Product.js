import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";

const Product = ({product,handleAddToCart}) => {
  // console.log(props);
  // const {product,handleAddToCart}=props;
  const { name, img, seller, price, ratings } =product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product_info">
        <p className="product_name">{name}</p>
        <p>Price: ${price}</p>
        <p>
          <small>Seller:{seller}</small>
        </p>
        <p>
          <small>Ratings:{ratings}</small>
        </p>
      </div>
      
      <button  onClick={()=>handleAddToCart(product)} className="btn_cart"> 
        <p className="btn_text">Add to Cart</p> 
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;

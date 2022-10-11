import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import "./ReviewItem.css";

const RivewItem = ({handleRemoveItem, product }) => {
  const {id, name, price, quantity,shipping, img } = product;
  return (
    <div className="review_item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review_details_container">
        <div className="review_details">
          <p>{name}</p>
          <p>
          <p>
            <small>Price{price}</small>
          </p>
          <p>
            <small>Shipping:{shipping}</small>
          </p>
            <small>Quantity{quantity}</small>
          </p>
        </div>
        <div className="delete_container">
          <button onClick={()=>handleRemoveItem(id)} className="btn_delete">
            <FontAwesomeIcon className="delete_icon" icon={faTrashAlt}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RivewItem;

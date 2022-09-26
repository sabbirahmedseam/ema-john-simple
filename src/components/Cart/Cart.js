import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h4>Order summary in Cart</h4>
      <h5>Order Summary:{cart.length}</h5>
    </div>
  );
};

export default Cart;

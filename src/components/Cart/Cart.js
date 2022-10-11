import React from "react";
import "./Cart.css";

const Cart = ({ clearCart, cart, children }) => {
  // console.log(cart);
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;

    total = total + product.price * product.quantity;
    //  console.log(total);
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;
  // console.log(typeof tax,typeof grandTotal);

  return (
    <div className="cart">
      <h4>Order summary in Cart</h4>
      <p>Order Summary:{quantity}</p>
      <p>Total price:${total} </p>
      <p>Total Shipping:${shipping} </p>
      <p>Tax:${tax} </p>
      <p>Grand Total:${grandTotal.toFixed(2)} </p>
      <button onClick={clearCart}>Clear Cart</button>
      {children}
    </div>
  );
};

export default Cart;

import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import RivewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const { products, initialCart } = useLoaderData(); //{ products: products, initialCart: initialCart }
  const [cart, setCart] = useState(initialCart);
  const handleRemoveItem = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };
  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div>
      <div className="shop_container">
        <div className="orders_container">
          {cart.map((product) => (
            <RivewItem
              key={product.id}
              product={product}
              handleRemoveItem={handleRemoveItem}
            ></RivewItem>
          ))}
          {cart.length === 0 && (
            <h2>
              No Items for Review. Please Shop <Link to="/">Shop More</Link>
            </h2>
          )}
        </div>
        <div className="cart_container">
          <Cart clearCart={clearCart} cart={cart}>
           
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;

import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart = (product) => {
    // console.log(product);
    // support:data to vai nicher theke send korlam jemon 'product' to pathailamm
    //don't do this cart.push(product)  (copy korle valo normally eivabe array te bosano hoy kintu react e copy kore bosate hobe)
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="shop_container">
      <div className="products_container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart_container">
        <Cart cart={cart}> </Cart>
      </div>
    </div>
  );
};

export default Shop;

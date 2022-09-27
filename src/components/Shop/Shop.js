import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // console.log("products load before fetch");
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        // console.log('products loaded');
      });
  }, []);

  useEffect(() => {
    // console.log("local storage first line", products);
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find(
        (product) => product.id === id
      );
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
        // console.log(addedProduct);
      }
    }
    setCart(savedCart);
    // console.log('local storage finished');
  }, [products]);

  const handleAddToCart = (selectedProduct) => {
    console.log(selectedProduct);
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity=exists.quantity+1;
      newCart=[...rest,exists];
    }

    // support:data to vai nicher theke send korlam jemon 'product' to pathailamm
    //don't do this cart.push(product)  (copy korle valo normally eivabe array te bosano hoy kintu react e copy kore bosate hobe)
    setCart(newCart);
    addToDb(selectedProduct.id);
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

import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Cart = () => {
  // consuming data from the store
  const cart = useSelector((state) => {
    return state.cart;
  });
  console.log(cart);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {cart.map((product) => (
        <ProductCard product={product} key={Math.random().toString()} />
      ))}
    </div>
  );
};

export default Cart;

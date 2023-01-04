import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "react-router-dom";
import ProductCart from "../components/ProductCard";
import LoadingPage from "../utils/LoadingPage";
const Home = () => {
  // using the state from the store(initial state)
  // !process is--> initial state-> create store and set the initial state there. and provide the store via Provider form app.js
  const state = useSelector((state) => state);
  const navigation = useNavigation();

  // console.log(state);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  if (navigation.state === "loading") {
    return <h1 className="text-6xl">Loading...</h1>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {products.map((product) => (
        <ProductCart product={product} key={Math.random().toString()} />
      ))}
    </div>
  );
};

export default Home;

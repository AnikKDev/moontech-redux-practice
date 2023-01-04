import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  // using the state from the store(initial state)
  // !process is--> initial state-> create store and set the initial state there. and provide the store via Provider form app.js
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      <h1>This is home page</h1>
    </div>
  );
};

export default Home;

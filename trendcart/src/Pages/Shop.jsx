import React from "react";
import Hero from "../Components/Hero/Hero";
import Items from "../Components/Items/Items";
import Popular from "../Components/Popular/popular";
import "../Styling/Shop.css";
import Footer from "../Components/Footer/Footer";

const Shop = () => {
  return (
    <div>
      {" "}
      <Hero />
      <Items />
      <Popular />
      <Footer />
    </div>
  );
};
export default Shop;

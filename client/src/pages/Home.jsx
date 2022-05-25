import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import MainOffer from "../components/MainOffer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import ProductPrev from "../components/ProductPrev";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <MainOffer/>
      <ProductPrev/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;

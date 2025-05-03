import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const heroImages = [
  "https://previews.123rf.com/images/lenanichizhenova/lenanichizhenova1706/lenanichizhenova170600944/80233673-happy-family-shopping.jpg",
  "https://img.freepik.com/premium-psd/banner-template-online-fashion-sale_23-2148585403.jpg",
  "https://img.freepik.com/free-psd/horizontal-banner-template-big-sale-with-woman-shopping-bags_23-2148786755.jpg",
  "https://img.freepik.com/free-vector/gradient-shopping-discount-horizontal-sale-banner_23-2150321996.jpg",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      <h1 className="hero-heading">
        Get up to 20% cashback + Free Delivery on{" "}
        <span className="highlight-text">First Order</span>
      </h1>

      <div className="hero-image-wrapper">
        <img
          src={heroImages[currentIndex]}
          alt="Hero"
          className="hero-main-image"
        />
      </div>

      <div className="hero-content">
        <div className="hero-box">
          <h2>NEW ARRIVAL</h2>
          <h5>New</h5>
          <h5>Collection</h5>
          <h5>for everyone</h5>
          <button
            className="collection-btn"
            onClick={() => navigate("../Collection/Collection.jsx")}
          >
            Latest Collection
          </button>
        </div>

        <div className="scrolling-img-wrapper">
          <img
            src="https://img.freepik.com/free-photo/two-beautiful-women-shopping-town_1303-16426.jpg"
            alt="Scrolling"
            className="scrolling-img"
          />
        </div>

        <div className="hero-box">
          <h2>NEW ARRIVAL</h2>
          <h5>New</h5>
          <h5>Collection</h5>
          <h5>for everyone</h5>
          <button
            className="collection-btn"
            onClick={() => navigate("../Collection/Collection.jsx")}
          >
            Latest Collection
          </button>
        </div>

        <div className="video-section">
          <video controls autoPlay loop muted className="video">
            <source
              src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/Bo-ziHq_jlbqx8330/videoblocks-sell16_bf6eitlb3__2de05e0e4d9479db30a1bf08385a1810__P360.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Hero;

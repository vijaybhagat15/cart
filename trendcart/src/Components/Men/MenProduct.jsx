import React, { useEffect, useState } from "react";
import "./MenProduct.css";
import { menProducts } from "../../Components/common/staticCommonData";
import { addToCart } from "../../Components/common/commonComponent";
import { useNavigate } from "react-router-dom";
import Collection from "../../Components/Collection/Collection";

const MenPage = () => {
  const [cart, setCart] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const toggleDropdown = (title) => {
    setActiveDropdown((prev) => (prev === title ? null : title));
  };

  const categories = [
    {
      title: "Western",
      items: ["Dresses", "T-shirt", "Jeans & Trousers"],
    },
    {
      title: "Beauty & Health",
      items: ["Skincare", "Haircare", "Makeup"],
    },
    {
      title: "Accessories",
      items: ["Gym instrument", "Watches", "Bracelets"],
    },
    {
      title: "Bags & Footwear",
      items: ["Handbags", "Sneakers", "Sandals"],
    },
  ];

  return (
    <div className="men-page">
      <div className="title">
        <h2>Men's Collection</h2>
        <div className="category-list">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="category"
              onClick={() => toggleDropdown(cat.title)}
            >
              {cat.title} ⬇
              <div
                className={`dropdown ${
                  activeDropdown === cat.title ? "show-dropdown" : ""
                }`}
              >
                <ul>
                  {cat.items.map((item, i) => (
                    <li key={i} onClick={() => navigate("/collection")}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img
        src="https://tipsmake.com/data/images/collection-of-the-most-beautiful-fashion-banners-picture-32-8h2n0YQtr.jpg"
        alt="Banner"
      />
      <h2>Products</h2>

      <div className="men-products">
        {menProducts.map((product) => (
          <div key={product.id} className="men-product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p className="price">₹{product.price}</p>
            <p className="rating">⭐ {product.rating}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenPage;

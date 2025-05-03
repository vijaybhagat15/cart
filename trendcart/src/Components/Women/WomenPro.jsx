import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./WomenPro.css";
import { womenProducts } from "../../Components/common/staticCommonData";
import { addToCart } from "../../Components/common/commonComponent";

const WomenPage = () => {
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
      items: ["Dresses", "Tops", "Jeans & Trousers"],
    },
    {
      title: "Beauty & Health",
      items: ["Skincare", "Haircare", "Makeup"],
    },
    {
      title: "Jewelry & Accessories",
      items: ["Earrings", "Necklaces", "Bracelets"],
    },
    {
      title: "Bags & Footwear",
      items: ["Handbags", "Sneakers", "Sandals"],
    },
  ];

  return (
    <div className="women-page">
      <div className="title">
        <h2>Women's Collection</h2>
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
        src="https://i.pinimg.com/736x/ba/65/e2/ba65e2699cf758b587a820d5529ed9ea.jpg"
        alt="Banner"
      />
      <h2>Products</h2>

      <div className="women-products">
        {womenProducts.map((product) => (
          <div key={product.id} className="women-product-card">
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

export default WomenPage;

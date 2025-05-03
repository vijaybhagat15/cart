import React, { useEffect, useState } from "react";
import "./Kidsproduct.css";
import { kidsProducts } from "../../Components/common/staticCommonData";
import { addToCart } from "../../Components/common/commonComponent";
import { useNavigate } from "react-router-dom";

const KidsPage = () => {
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
      title: "Accessories",
      items: ["Playing Tools", "Bags", "Toys"],
    },
    {
      title: "Bags & Footwear",
      items: ["Handbags", "Sneakers", "Sandals"],
    },
  ];

  return (
    <div className="kids-page">
      <div className="title">
        <h2>Kid's Collection</h2>
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
        src="https://img.freepik.com/premium-psd/baby-fashion-cloth-wear-sale-banner-post-promotional-web-banner-psd-file_673898-771.jpg"
        alt="Kids Banner"
      />
      <h2>Products</h2>

      <div className="kids-products">
        {kidsProducts.map((product) => (
          <div key={product.id} className="kids-product-card">
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

export default KidsPage;

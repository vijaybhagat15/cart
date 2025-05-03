import React, { useState } from "react";
import "./Items.css";
import img1 from "../../assets/img1.webp";
import img2 from "../../assets/img2.webp";
import img3 from "../../assets/img3.webp";
import img4 from "../../assets/img4.webp";
import img7 from "../../assets/img 7.webp";
import img8 from "../../assets/img 8.webp";
import img9 from "../../assets/img 9.webp";
import img10 from "../../assets/img10.webp";

const itemsData = [
  { id: 1, img: img1, name: "Kurti", price: "₹1500", rating: 4.5 },
  { id: 2, img: img2, name: "Kurti", price: "₹1200", rating: 4.0 },
  { id: 3, img: img3, name: "Kurti", price: "₹1800", rating: 4.8 },
  { id: 4, img: img4, name: "Kurti", price: "₹1300", rating: 4.2 },
  { id: 5, img: img7, name: "dress", price: "₹800", rating: 5.0 },
  { id: 6, img: img8, name: "dress", price: "₹1000", rating: 4.0 },
  { id: 7, img: img9, name: "dress", price: "₹1400", rating: 4.5 },
  { id: 8, img: img10, name: "dress", price: "₹1200", rating: 4.9 },
];

const getStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0 ? "⭐" : "";
  return (
    "⭐".repeat(fullStars) +
    halfStar +
    "☆".repeat(5 - fullStars - (halfStar ? 1 : 0))
  );
};

const Items = () => {
  const [showItems, setShowItems] = useState(true);

  return (
    <div className="items-wrapper">
      <h3>Popular in Women</h3>

      {showItems && (
        <div className="items-grid">
          {itemsData.map((item) => (
            <div key={item.id} className="item-card">
              <img src={item.img} alt={item.name} />
              <p className="item-name">{item.name}</p>
              <div className="item-price">{item.price}</div>
              <div className="item-rating">{getStars(item.rating)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Items;

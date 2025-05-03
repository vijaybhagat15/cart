import React from "react";
import "./Collection.css";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const products = {
  men: [
    {
      id: 1,
      name: "Men's Jacket",
      price: 49.99,
      image:
        "https://images.meesho.com/images/products/357594486/yx0yw_400.webp",
    },
    {
      id: 2,
      name: "Men's Sneakers",
      price: 59.99,
      image:
        "https://images.meesho.com/images/products/502411825/u2q2b_400.webp",
    },
    {
      id: 1,
      name: "Men's Casual Shirt",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSDYth9fL5PGdEY88qUUx5a5RIddM9kazD7BEMXPgIzru0BPFac7xBuR1buE8IlqxwRXufrCnqQAsoZRKHBZxjKfHOvodJST-sg079Wtq4h",
      price: 1299,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Men's Shirt",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQVW-W-a3H4gvnUZllojM4b6NSBp7IVsbIyUDTZiDHQs6Balux_QxPnIdgSu7YwEWscDQ1TVbnU1Xx9rkJIvvuHlnqBTIZRGVpdi8qRe4xU",
      price: 2499,
      rating: 4.3,
    },
    {
      id: 3,
      name: "Men's Tshirt",
      image:
        "https://sensesindia.in/cdn/shop/files/1-2_986c27bd-4fb8-4d82-a0a5-cd0abeaea2d0.jpg?v=1738751908",
      price: 799,
      rating: 4.6,
    },
    {
      id: 4,
      name: "Men's Sneakers",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTvd5COZ2x6iOCdcx6eqmJaHxsCilCQCnN4aYcqnVemm0QI9z6nFVcBrjXawxsMtbakSbPf-M2n9R7WtURpOwsV7Rjjc8iNoJGeIS8vLvwtE77vPk7cG7kB&usqp=CAc",
      price: 2999,
      rating: 4.2,
    },
    {
      id: 5,
      name: "Men's shandal",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS3WfgVkvcZO5rmNjpTxgNFI0wAWwiu2IBwW3fCKg8KISpgYnWCpvDKdJMynGHveQ6F087SCbpCMdw23l2xqzgrZLdnnezCtAOcV1T06E3K3-Ejoh8QyrUupuw39TJCTiIMcMRIsnew0V8&usqp=CAc",
      price: 1499,
      rating: 4.7,
    },
    {
      id: 6,
      name: "Men's Sneakers",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTE4_rs6BxRj_wFU75QWk7Yn2YxoH3MLeZWxAsRt1knsQqldaqqNt-u4tfl8_pSY1Vqog_9YIg_3W9mdKL0lDi5aYbi9S90shh9PeCCZQ0s2b3-lt16M64BYw",
      price: 1399,
      rating: 4.4,
    },
    {
      id: 7,
      name: "Men's Hoodie",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRadTVosbrvlJbw74TTvG6EalcuqvqD5p3Q9OSvFN02m7LG8X0BCd6uBgdloFyKvrY0bUGH8msi3UmKyuGS-Z7oqNFvbjWAEMYKcnZRlAFGqxMEQCvJ3oO2ZA&usqp=CAc",
      price: 1299,
      rating: 4.3,
    },
    {
      id: 8,
      name: "Men's Jacket",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcThEbMAx7f1Vm3oXQwrMUqHHaT-w9gqer4imc2_PLDqxAsas5e4HiiCYKSClmHliE8srAD6R1JFU3-PKpQS8xJzfSkU6foMD1sSoXuhFAUqp9nSyIQvTS2qSw",
      price: 1899,
      rating: 4.9,
    },
  ],
  women: [
    {
      id: 3,
      name: "Women's Handbag",
      price: 39.99,
      image:
        "https://images.meesho.com/images/products/375071525/h8ot5_400.webp",
    },
    {
      id: 6,
      name: "Women's Jutti",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQd5hD1f4YY6Y-F-BEkF9n3HiNyrlcLadjD4bCyGZsrIJaE7icgnJsNnO7W2hDmr89b6NZJ0pXXAYETVCEBOYX0HeXrfxiB2esvpH4BjLI",
      price: 1399,
      rating: 4.4,
    },
    {
      id: 7,
      name: "Saree",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQZNvmvYsXCIAJ1N9KiLvfPEjsOr4wDMxRwGy4rD0Ik4kaXJCiF5o2rDBJBUpQ-gjs54kwONRPHc83F9Sp51aaPG4a6OkGd8PQO0KERQxAe",
      price: 1699,
      rating: 4.3,
    },
    {
      id: 8,
      name: "Dress",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQM0ifdQEaAm3fDQpylO9XPtu8V2vqwJDqV7wyVbrhUJeXsrNC6hZHXV806MlpZDFLQjTjOAa-vXlevZmFQbpJPFUk-btgkZgiRJeMPxjg",
      price: 2599,
      rating: 4.9,
    },
    {
      id: 1,
      name: "Women Dress",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcThcYG_s3lbxwTMkmVFNR85rBXxdbzeBU5BbTOxo6fDDHQe9AI1tH-wDtyceyLKPQvggPVikBhSq6U1TfiSf-PZkrtQyji_D8OWxQ-dwJcexVlhOty1iexdfQ",
      price: 2199,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Women Dress",
      image:
        "https://www.fablestreet.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0486%2F0634%2F7416%2Fproducts%2FDR671MRON_m1.jpg%3Fv%3D1722525838&w=1920&q=75",
      price: 1099,
      rating: 4.3,
    },
    {
      id: 3,
      name: "Women's Tops",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQHF7OVbSkTW36ezcumYOCe9WmdpFslgJsUUbYQ9hxuRjaFPVFkkNDtUfOWa4PAudU4Sb5jtuTnE4M836xJppi1k0_uNgfs4tVf_rSioAbaw7ipW46NYZZLgg&usqp=CAc",
      price: 799,
      rating: 4.6,
    },
    {
      id: 4,
      name: "Women's Sneakers",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS6lHasiOyNRGUm0ZwRqU1X87bhdqi_lnvYyCz94w1ep3mA5ASlu5_vuloXsRe6HD5q_nN9O4ZmSQEzkIeGdFij5BK6HgVR9iYwTTeVjwYl",
      price: 899,
      rating: 4.2,
    },
    {
      id: 5,
      name: "Women's Shandal",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRGH1lpGxV6Prhc1ivtQZqPvH8UqZmNZrVN5eUP4J7na1Lkfr1HIfJDhaUG2ml8X9wQW36QKHAp-K3d-t-cduRZzFOZam6L5j2PwfkXdp9e0D2KxHY3uUna",
      price: 1499,
      rating: 4.7,
    },
    {
      id: 4,
      name: "Women's Sunglasses",
      price: 29.99,
      image:
        "https://images.meesho.com/images/products/507388869/qqo5y_400.webp",
    },
  ],
  kids: [
    {
      id: 5,
      name: "Kids' Backpack",
      price: 19.99,
      image:
        "https://images.meesho.com/images/products/143885751/9n0bz_400.webp",
    },
    {
      id: 6,
      name: "Kids' Hat",
      price: 14.99,
      image:
        "https://images.meesho.com/images/products/362880636/vejei_512.webp",
    },
    {
      id: 1,
      name: "Gil's Dress",
      image:
        "https://images.meesho.com/images/products/394441294/tadrd_400.webp",
      price: 1299,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Boy's Dress",
      image:
        "https://images.meesho.com/images/products/277918274/vil5j_400.webp",
      price: 2499,
      rating: 4.3,
    },
    {
      id: 3,
      name: "Gil's Dress",
      image:
        "https://images.meesho.com/images/products/341951757/jldzs_400.webp",
      price: 799,
      rating: 4.6,
    },
    {
      id: 4,
      name: "Rubber Band",
      image:
        "https://images.meesho.com/images/products/434266949/g05ge_400.webp",
      price: 2999,
      rating: 4.2,
    },
    {
      id: 5,
      name: "Winter Wear",
      image:
        "https://images.meesho.com/images/products/396690968/roolg_400.webp",
      price: 1499,
      rating: 4.7,
    },
    {
      id: 6,
      name: "Caps",
      image:
        "https://images.meesho.com/images/products/404184207/jwaop_400.webp",
      price: 1399,
      rating: 4.4,
    },
    {
      id: 7,
      name: "Elegant Boys",
      image:
        "https://images.meesho.com/images/products/423113004/mkstv_400.webp",
      price: 1299,
      rating: 4.3,
    },
    {
      id: 8,
      name: "Flip Flop",
      image:
        "https://images.meesho.com/images/products/442968261/wt5vg_400.webp",
      price: 1899,
      rating: 4.9,
    },
  ],
};

const ProductCard = ({ image, name, price }) => (
  <div className="product-card">
    <img src={image} alt={name} className="product-image" />
    <h3 className="product-name">{name}</h3>
    <p className="product-price">${price}</p>
    <button className="buy-now">Buy Now</button>
  </div>
);
const scrollToDown = () => {
  const menSection = document.getElementById("men");
  if (menSection) {
    menSection.scrollIntoView({ behavior: "smooth" });
  }
};

const Shop = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="shop-nav">
        <h3
          className="brand"
          onClick={() => navigate("/Shop")}
          style={{ cursor: "pointer" }}
        >
          TrendKart
        </h3>
        <a href="#home">Home</a>
        <a href="#men">Men</a>
        <a href="#women">Women</a>
        <a href="#kids">Kids</a>
      </nav>

      {/* Hero Section */}
      <div id="home" className="hero">
        <h1>Shop the Latest Trends</h1>
        <p>Get up to 50% off on selected items</p>
        <button className="shop-now" onClick={scrollToDown}>
          Shop Now
        </button>
      </div>

      {/* Men's Section */}
      <div id="men" className="category-section">
        <h2>Men's Accessories</h2>
        <div className="product-grid">
          {products.men.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      {/* Women's Section */}
      <div id="women" className="category-section">
        <h2>Women's Accessories</h2>
        <div className="product-grid">
          {products.women.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      {/* Kids' Section */}
      <div id="kids" className="category-section">
        <h2>Kids' Accessories</h2>
        <div className="product-grid">
          {products.kids.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;

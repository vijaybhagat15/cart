import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const UserProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [wishlistedItems, setWishlistedItems] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (!storedUser) {
      navigate("/login"); // Redirect to login if user is not found
    } else {
      setUser(storedUser);
      setWishlistedItems(wishlist);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("wishlist");
    navigate("/login");
  };

  return (
    <div className="profile-container">
      {user ? (
        <>
          {/* User Profile Section */}
          <div className="profile-header">
            <img
              src={
                user.profilePhoto && user.profilePhoto !== ""
                  ? user.profilePhoto
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkuHGQcoh2XCa6j_kBji17CIrfC0YMdzKaeyH7nVWmLTK91zTcEeisGgAl_YEZnItoioE&usqp=CAU"
              }
              alt="User Profile"
              className="profile-photo"
            />
            <h2>Welcome, {user.fullName} 👋</h2>
          </div>

          <div className="profile-details">
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Contact:</strong> {user.contact}
            </p>
            <p>
              <strong>Bank UPI:</strong> {user.bankUPI || "Not provided"}
            </p>
          </div>

          {/* Wishlisted Items Section */}
          <div className="wishlist-section">
            <h3>Your Wishlist</h3>
            {wishlistedItems.length > 0 ? (
              <ul className="wishlist">
                {wishlistedItems.map((item, index) => (
                  <li key={index} className="wishlist-item">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="wishlist-img"
                    />
                    <p>{item.name}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No items wishlisted yet.</p>
            )}
          </div>

          {/* Logout Button */}
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <p>Redirecting to login...</p>
      )}
    </div>
  );
};

export default UserProfile;

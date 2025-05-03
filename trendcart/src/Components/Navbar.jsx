import React, { useState } from "react";
import logo from "../assets/logo.png";
import shoppingcart from "../assets/shoppingcart.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let getUser = localStorage.getItem("user");
  getUser = getUser ? JSON.parse(getUser) : undefined;
  let name = getUser?.fullName || "Login";
  const cartCount = JSON.parse(localStorage.getItem("cart") || "[]").length;

  const handleNavClick = (menuItem) => {
    setMenu(menuItem);
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-[#f2e1f4] shadow-md z-[1000] px-4 sm:px-10 py-2 flex items-center justify-between h-[60px]">
      {/* Left section: Logo and Brand */}
      <div className="flex items-center gap-3 flex-1">
        <Link to="/" onClick={() => handleNavClick("Shop")}>
          <img src={logo} alt="Logo" className="w-[45px] cursor-pointer" />
        </Link>
        <p className="text-[#9504f5] text-xl sm:text-2xl font-bold font-sans">TRENDKART</p>
      </div>

      {/* Hamburger Icon */}
      <div
        className="sm:hidden flex flex-col gap-[4px] cursor-pointer ml-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="w-[25px] h-[3px] bg-gray-800 rounded"></span>
        <span className="w-[25px] h-[3px] bg-gray-800 rounded"></span>
        <span className="w-[25px] h-[3px] bg-gray-800 rounded"></span>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        className="hidden sm:block w-[250px] px-3 py-1.5 border border-[#d52feb] rounded-md outline-none text-sm"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Center menu */}
      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } sm:flex flex-col sm:flex-row absolute sm:static top-[60px] left-0 w-full sm:w-auto bg-[#f2e1f4] sm:bg-transparent shadow-md sm:shadow-none sm:justify-center gap-2 sm:gap-6 px-4 sm:px-0 py-2 sm:py-0 z-[1001] sm:flex-[6] items-start sm:items-center`}
      >
        {["Shop", "Men", "Women", "Kids"].map((item) => (
          <li
            key={item}
            onClick={() => handleNavClick(item)}
            className="text-[16px] font-medium text-[#2b2a2a] hover:text-[#b335d9] cursor-pointer w-full sm:w-auto"
          >
            <Link to={`/${item === "Shop" ? "" : item}s`} className="w-full block">
              {item}
              {menu === item && <hr className="border-none h-[1.5px] bg-[#ce06fa] rounded-md w-[80%] mt-1" />}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right Section: Login & Cart */}
      <div className="hidden sm:flex items-center gap-5 justify-end flex-1 mr-[100px] relative">
        <Link to="/login">
          <button className="bg-[#faf7f7] border border-gray-800 text-[14px] px-4 py-2 font-semibold rounded hover:bg-[#b768eb] transition">
            {name}
          </button>
        </Link>
        <Link to="/cart" className="relative">
          <img src={shoppingcart} alt="Cart" className="w-[28px] cursor-pointer" />
          <div className="absolute top-[-8px] right-[-8px] bg-[#cd05fa] text-white text-[12px] w-[15px] h-[15px] rounded-full flex items-center justify-center">
            {cartCount}
          </div>
        </Link>
      </div>

      {/* Mobile Login & Cart */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-[60px] right-2 bg-[#f2e1f4] p-3 flex flex-col items-end gap-2 z-[1002]">
          <Link to="/login">
            <button className="bg-[#faf7f7] border border-gray-800 text-[14px] px-3 py-1 font-semibold rounded hover:bg-[#b768eb] transition">
              {name}
            </button>
          </Link>
          <Link to="/cart" className="relative">
            <img src={shoppingcart} alt="Cart" className="w-[24px]" />
            <div className="absolute top-[-6px] right-[-6px] bg-[#cd05fa] text-white text-[10px] w-[13px] h-[13px] rounded-full flex items-center justify-center">
              {cartCount}
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

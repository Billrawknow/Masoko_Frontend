import React, { useContext, useState,useRef } from "react";

import "./Navbar.css";
import logo from "../Assests/logo.png";
import cart_icon from "../Assests/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from '../Assests/nav_dropdown.png'

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems }= useContext(ShopContext);
  const menuRef =useRef();
  const dropdown_toggle = (e) =>{
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
  }
  const menuColors = {
    
    shop: "green",
    men: "blue",
    women: "green",
    kids: "blue",
  };
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />

        <p> RAWKNOW </p>
      </div>
      <img className="nav-dropdown" onClick={dropdown_toggle} src= {nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          {" "}
          <Link style={{textDecoration: 'none'}} to="/"> Shop </Link>{" "}
          {menu === "shop" ? (
            <hr style={{ backgroundColor: menuColors.shop }} />
          ) : (
            <></>
          )}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          {" "}
          <Link style={{textDecoration: 'none'}} to="/men"> Men </Link>{" "}
          {menu === "men" ? (
            <hr style={{ backgroundColor: menuColors.men }} />
          ) : (
            <></>
          )}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          {" "}
          <Link style={{textDecoration: 'none'}} to="/women"> Women </Link>{" "}
          {menu === "women" ? (
            <hr style={{ backgroundColor: menuColors.women }} />
          ) : (
            <></>
          )}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          {" "}
          <Link style={{textDecoration: 'none'}} to="/kids"> Kids </Link>{" "}
          {menu === "kids" ? (
            <hr style={{ backgroundColor: menuColors.kids }} />
          ) : (
            <></>
          )}{" "}
        </li>
      </ul>
      <div className="nav-logon-cart">
        <Link to="/login">
          <button> Login </button>
        </Link>
        <Link style={{textDecoration: 'none'}} to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count"> {getTotalCartItems ()} </div>
      </div>
    </div>
  );
};

export default Navbar;

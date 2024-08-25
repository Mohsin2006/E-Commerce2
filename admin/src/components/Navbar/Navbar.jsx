import React from 'react';
import "./Navbar.css";
import navlogo from "../../assets/logo_big.png";
import navProfile from "../../assets/nav-profile.svg";
const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='nav-logo' src={navlogo} alt="" />
      <p style={{fontSize:"24px",fontWeight:"bold",fontFamily:"cursive"}}>The Daily Shop</p>
      <img src={navProfile} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar

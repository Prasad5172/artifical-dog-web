import React, { useState } from 'react';
import './Navbar.css'; // Create a separate CSS file for styling
import ThemeSwitch from "../Buttons/ThemeSwitch/ThemeSwitch";
import MultipleLang from '../Buttons/MultipleLang/MultipleLang';


const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    let toggle = document.getElementById("menu-toggle");
    toggle.classList.toggle('menu-toggle-active');
  }


  const handleClick = () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");
    navLinks.classList.toggle("open");
    links.forEach((link) => {
      link.classList.toggle("fade");
    });
    hamburger.classList.toggle("toggle");

  }

  return (
    <nav className='d-flex justify-content-between'>
      <div class="logo d-flex align-items-center ml-4 nav-left-margin">
        <img src="insta1square.JPG" alt="Logo Image" />
        <h3>Jinko Inu</h3>
      </div>

      <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Solutions</a></li>
        <li><a href="#">Products</a></li>
      </ul>
      <div className="row nav-right-margin ">
        <div className="d-flex gap-2">
          <ThemeSwitch />
          <MultipleLang />
          <div class="hamburger" onClick={handleClick}>
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

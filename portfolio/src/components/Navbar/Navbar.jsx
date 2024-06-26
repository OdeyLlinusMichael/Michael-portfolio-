import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import './Navbar.css';
import logo from '../../assets/logo.png';
import Typed from 'typed.js'; // Import Typed.js library

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const typed = new Typed(".auto-type", {
      strings: ["ODEY LINUS MICHAEL", "A FREELANCER", "A UI/UX DESIGNER", "A PRODUCT DESIGNER", "A GRAPHICS DESIGNER", "A Frontend Developer", "A Nocode Developer"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true 
    });

    // Cleanup function
    return () => {
      typed.destroy(); // Destroy Typed instance to prevent memory leaks
    };
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div id="header">
      <div className="container">
        <nav>
          <img src={logo} alt="logo" className="logo" />
          <ul id="sidemenu" style={{ right: menuOpen ? '0' : '-200px' }}>
            <li><a href="#header">Home</a></li>
            <li><a href="#About">About me</a></li>
            <li><a href="#hero">Resume</a></li>
            <li><a href="#Apor">Portfolio</a></li>
            <li><a href="#serq2">Services</a></li>
            <li><a href="#conq2">Contact</a></li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="close-icon" onClick={closeMenu}>
                <path fill="#ffffff" d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>
              </svg>
            </li>
          </ul>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="menu-icon" onClick={openMenu}>
            <path fill="#ff0000" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
          </svg>
        </nav>
        <motion.div
        className="txt1"
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p>HI THERE!</p>
      </motion.div>

      <motion.div
        className="wrapper"
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1>
          I'M <span className="auto-type"></span>
        </h1>
      </motion.div>

      <motion.div
        className="txt2"
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h1>BASE IN LAGOS, NIGERIA</h1>
      </motion.div>
      </div>
    </div>
  );
};

export default Navbar;

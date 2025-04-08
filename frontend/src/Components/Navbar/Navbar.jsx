import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import wishlist_icon from '../Assets/wishlist.png'; // <-- Make sure this image exists
import { ShopContext } from '../../Context/ShopContext';
import { WishlistContext } from '../../Context/WishlistContext'; // <-- Import WishlistContext
import nav_dropdown from '../Assets/nav_dropdown.png';
import { useTheme } from "../../Context/ThemeContext";

const Navbar = () => {

  let [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const { wishlistItems } = useContext(WishlistContext); // <-- Use WishlistContext
  const { darkMode, setDarkMode } = useTheme();

  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className={`nav ${darkMode ? "dark" : "light"}`}>

      <Link to='/' onClick={() => { setMenu("shop") }} style={{ textDecoration: 'none' }} className="nav-logo">
        <img src={logo} alt="logo" />
        <p id='logo-name'>GenZTrendz</p>
      </Link>
      <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => { setMenu("shop") }}><Link to='/' style={{ textDecoration: 'none' }}>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("mens") }}><Link to='/mens' style={{ textDecoration: 'none' }}>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("womens") }}><Link to='/womens' style={{ textDecoration: 'none' }}>Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("kids") }}><Link to='/kids' style={{ textDecoration: 'none' }}>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("about") }}><Link to='/about' style={{ textDecoration: 'none' }}>About</Link>{menu === "about" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("contact") }}><Link to='/contact' style={{ textDecoration: 'none' }}>Contact</Link>{menu === "contact" ? <hr /> : <></>}</li>
        <li></li>
      </ul>

      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
          ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace("/"); }}>Logout</button>
          : <Link to='/login' style={{ textDecoration: 'none' }}><button>Login</button></Link>}

        {/* Wishlist Icon */}
        <Link to="/wishlist">
          <img src={wishlist_icon} alt="wishlist" className="nav-icon" />
        </Link>
        <div className="nav-cart-count">{wishlistItems.length}</div>

        {/* Cart Icon */}
        <Link to="/cart"><img src={cart_icon} alt="cart" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>

        {/* Dark Mode Toggle */}
        <button onClick={() => setDarkMode(!darkMode)} className="dark-mode-toggle">
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </div>
  )
}

export default Navbar;

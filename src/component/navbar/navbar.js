import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import "./navbar.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const { cartCount } = useCart();

  return (
    <div className='nav'>
        <div className='logo'>
            <Link to="/"><h3>Timbu Cloud</h3></Link>
        </div>
        <ul className='nav-list'>
            <li>Home </li>
            <li>Contact Us</li>
            <li>Shop</li>
            <li>About</li>

        </ul>
        <Link to="/cart"><div className='cart-iterator'>
            <span className='cart-iterator-box'><IoCartOutline id='ic'/>Cart <span id='cartQty'>{cartCount}</span></span>
        </div></Link>
        <div className='menuBtn'><GiHamburgerMenu /></div>
    </div>
  )
}

export default Navbar
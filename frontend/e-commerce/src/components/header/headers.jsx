
import { Link } from "react-router";
import React from 'react'

function Header() {
  return (
    <nav className="nav-menu container">
        <div className="logo">
            <Link to='/'>NOMAD</Link>
        </div>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/shop'>Shop</Link>
            </li>
            <li>
                <div className="cart-container">
                    <i className="bi bi-cart4 cart"></i>
                    <span className="cart-count">5</span>
                </div>
            </li>
        </ul>
    </nav>
  )
}

export default Header
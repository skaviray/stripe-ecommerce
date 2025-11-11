
import { Link, useNavigate } from "react-router";
import React, { useContext } from 'react'
import { CartContext } from "../../context/cart-context";

function Header() {
    const { itemCount } = useContext(CartContext)
    const navigate = useNavigate()
    console.log(itemCount)
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
                    <button onClick={() => navigate('/cart')}>
                    <i className="bi bi-cart4 cart"></i>
                    {
                        itemCount > 0 ? <span className="cart-count">{itemCount}</span>: null
                    }
                    
                    </button>
                </div>
            </li>
        </ul>
    </nav>
  )
}

export default Header
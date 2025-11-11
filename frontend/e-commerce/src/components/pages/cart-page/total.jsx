import React from 'react'
import { useNavigate } from 'react-router'

function Total({itemCount, total, clearCart}) {
    console.log(clearCart)
    const navigate = useNavigate()
  return (
    <div className='total-container'>
        <div className='total'>
            <p> Total Items: {itemCount}</p>
            <p>{`Total: $${total}`}</p>
        </div>
        <div>
            <button className='is-black nomad-btn' onClick={() => navigate('/checkout')}>
                <div className='text'>CHECKOUT</div>
            </button>
            <button className='is-white nomad-btn' onClick={() => clearCart()}>
                CLEAR
            </button>
        </div>
    </div>
  )
}

export default Total
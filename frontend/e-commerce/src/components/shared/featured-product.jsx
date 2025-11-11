// import React from 'react'
import { useNavigate } from 'react-router-dom';
import { isInCart } from '../../helpers';
import { CartContext } from '../../context/cart-context';
import { useContext } from 'react';
function FeaturedProduct(props) {
    const { id, title, description, imageUrl, price} = props
    const product = {title, imageUrl, price, id, description}
    const navigate = useNavigate()
    const {addProduct,increaseProductCount, cartItems} = useContext(CartContext)
  return (
    <div className='featured-product'>
        <div className='featured-image' onClick={() => navigate(`/product/${id}`)}>
            <img src={imageUrl} alt='product' />
        </div>
        <div className='name-price'>
            <h3>{title}</h3>
            <p>{price}</p>
            {
                !isInCart(product, cartItems) &&
                <button className='is-black nomad-btn' onClick={() => addProduct(product)}>
                    <div className='text'>ADD TO CART</div>
                </button>
            }
            {
                isInCart(product, cartItems) &&
                <button className='nomad-btn' onClick={() => increaseProductCount(product)}>
                    ADD More
                </button>
            }

        </div>
    </div>
  )
}

export default FeaturedProduct
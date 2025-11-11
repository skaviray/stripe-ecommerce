import React from 'react'

import {PlusCircleIcon, MinusCircleIcon, TrashIcon} from '../../icons'

function CartItem({product,decreaseProduct, increaseProductCount,deleteProduct, clearCart}) {
    console.log(product)
    console.log(deleteProduct)
    const { title, imageUrl, price, quantity} = product
  return (
    <div className='cart-item'>
        <div className='item-image'>
            <img src={imageUrl} />
        </div>
        <div className='name-price'>
            <h4>{title}</h4>
            <p>${price}</p>
        </div>
        <div className='quantity'>
            <p>{`Quantity: ${quantity}`}</p>
        </div>
        <div className='btns-container'>
            <button className='btn-increase' onClick={() => increaseProductCount(product)}>
                <PlusCircleIcon width='20px' />
            </button>
            {
                quantity === 1 &&
                <button className='btn-trash' onClick={() => deleteProduct(product)}>
                    <TrashIcon width='20px' />
                </button>
            }
            {
                quantity > 1 &&
                <button className='btn-decrease' onClick={() => decreaseProduct(product)}>
                    <MinusCircleIcon width='20px' />
                </button>
            }
        </div>
    </div>
  )
}

export default CartItem
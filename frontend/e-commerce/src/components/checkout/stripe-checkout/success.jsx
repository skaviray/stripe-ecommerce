import React,{useContext, useEffect} from 'react'
import { useNavigate } from 'react-router'
import Layout from '../../shared/layout'
import { CartContext } from '../../../context/cart-context'

function Success() {
    const {clearCart, cartItems} = useContext(CartContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (cartItems.length != 0) {
            clearCart()
        }
    }, [clearCart])
  return (
    <Layout>
    <div className='success-page'>
        <h1>Thank you for your order</h1>
        <p>We are currently processing your order and 
         will send you a confirmation shortly</p>
         <div className='success-button-container'>
            <button className='success-button is-black' onClick={() => navigate('/shop')}>
                <div className='text'>Continue Shopping</div>
            </button>
         </div>
    </div>
    </Layout>
  )
}

export default Success
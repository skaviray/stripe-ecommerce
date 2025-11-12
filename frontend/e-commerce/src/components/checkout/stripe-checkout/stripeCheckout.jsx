import React, {useContext, useEffect, useState} from 'react'
import { useStripe } from '@stripe/react-stripe-js'
import { CartContext } from '../../../context/cart-context'
import { fetchSessionIdFromApi } from '../../../helpers'

function StripeCheckout() {
    const [email, setEmail] = useState('')
    const {cartItems} = useContext(CartContext)
    const stripe = useStripe()
    const handleGuestCheckout = async (e) => {
        e.preventDefault()
        const line_items = cartItems.map(item => {
            return {
                quantity: item.quantity,
                price_data: {
                    currency: "usd",
                    unit_amount: item.price * 100,
                    product_data: {
                        name: item.title,
                        description: item.description,
                        images: [item.imageUrl]
                    }
                }
            }
        })
        console.log(line_items)
        const response = await fetchSessionIdFromApi("create-checkout-session", {
            body: {
                line_items,
                customer_email: email
            }
        })
        const {url} = response 
        console.log(url)
        window.location.href = url;
    }
  return (
    <form onSubmit={handleGuestCheckout}>
        <div>
            <input 
            type='email'
            onChange={e => setEmail(e.target.value)}
            placeholder='Email'
            value={email}
            className='nomad-input'
            />
        </div>
        <div className='submit-btn'>
            <button type='submit' className='nomad-btn is-black submit'>
                <div className='text'>Checkout</div>
            </button>
        </div>
    </form>
  )
}

export default StripeCheckout
import React,{useContext} from 'react'
import Layout from '../../shared/layout';
import CartItem from './cartItem';
import { CartContext } from '../../../context/cart-context';
import Total from './total';
function CartPage() {
  const {increaseProductCount,decreaseProduct,deleteProduct,clearCart, itemCount, total, cartItems } = useContext(CartContext)
  console.log(cartItems)
  // console.log(decreaseProduct)
  const allItems = cartItems.map(product => 
        <CartItem product={product}
        decreaseProduct={decreaseProduct} 
        increaseProductCount={increaseProductCount}
        deleteProduct={deleteProduct}
        clearCart={clearCart}
        key={product.id} />)
  return (
    <Layout>
      <>
      <h1 style={{textAlign: 'center', font: "bold"}}>Cart</h1>
      {
        cartItems.length === 0 ? 
        <div className='empty-cart'>Your Cart is empty</div> :
        <>
        <div className='cart-page'>
          <div className='cart-item-container'>
            {
              allItems
            }
          </div>
          <Total itemCount={itemCount} clearCart={clearCart} total={total} />
        </div>
        </>
      }
      </>
    </Layout>
  )
}

export default CartPage
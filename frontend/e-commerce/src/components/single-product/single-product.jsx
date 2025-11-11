import React, {useContext, useState, useEffect} from 'react'
import { ProductsContext } from '../../context/products-context'
import { CartContext } from '../../context/cart-context'
import Layout from '../shared/layout'
import { useParams, useNavigate } from 'react-router'
import { isInCart } from '../../helpers';

function SingleProduct() {
    const {products} = useContext(ProductsContext)
    const {addProduct, increaseProductCount, cartItems} = useContext(CartContext)
    const {id} = useParams()
    const [product, setProduct] = useState(null)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    useEffect(() =>{
        const product = products.find(product => Number(product.id )=== Number(id))
        if (!product) {
            navigate("/shop")
        } else {
            setProduct(product)
            setLoading(false)
        }
    }, [products, id, navigate])
    if (loading) return <div></div>
    const {imageUrl, title, price, description} = product
  return (
    <div className='single-cart-container'>
        <Layout>
            <div className='single-product-container'>
                <div className='product-image'>
                    <img src={imageUrl} alt="product" />
                </div>
                <div className='product-details'>
                    <div className='name-price'>
                        <h3>{title}</h3>
                        <p>{price}</p>
                    </div>
                    <div className='add-to-cart-btns'>
                        { !isInCart(product, cartItems) &&
                        <button className='nomad-btn is-black' onClick={() => addProduct(product)} >
                            <div className='text'>ADD TO CART</div>
                        </button>
                        }
                        { isInCart(product, cartItems) &&
                        <button className='nomad-btn' onClick={() => increaseProductCount(product)}>
                            ADD MORE
                        </button>
                        }
                        <button className='is-black nomad-btn'>
                            <div className='text'>PROCEED TO CHECKOUT</div>
                        </button>
                    </div>
                    <div className='product-description'>
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    </div>
  )
}

export default SingleProduct
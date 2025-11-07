import React, {useContext, useState, useEffect} from 'react'
import { ProductsContext } from '../../context/products-context'
import Layout from '../shared/layout'
import { useParams, useNavigate } from 'react-router'

function SingleProduct() {
    const {products} = useContext(ProductsContext)
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
    })
    if (loading) return <div></div>
    const {imageUrl, title, price, description} = product
  return (
    <div>
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
                        <button className='button is-blue nomad-btn'>
                            ADD TO CART
                        </button>
                        <button className='button is-black nomad-btn'>
                            PROCEED TO CHECKOUT
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
import React,{useContext} from 'react'
import {ProductsContext} from '../../context/products-context'
import FeaturedProduct from '../shared/featured-product'

function FeaturedCollection() {
  const { products } = useContext(ProductsContext);
  const productItems = products
    .filter((_, i) => i < 4)
    .map((product) => (
      <div className="column is-one-quarter" key={product.id}>
        <FeaturedProduct {...product} />
      </div>
    ));

  return (
    <section className="section featured-collection">
      <div className="container has-text-centered">
        <h2 className="title is-3 mb-5">Featured Collection</h2>
        {/* Bulma grid layout */}
        <div className="columns is-multiline is-centered">
          {productItems}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCollection;
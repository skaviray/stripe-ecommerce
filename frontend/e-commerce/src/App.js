import './App.css';
import { ReactDOM } from 'react-dom/client';
import {Routes, Route} from 'react-router-dom'
import HomePage from './components/homePage';
import NotFound from './components/notFound';
import Shop from './components/pages/shop';
import SingleProduct from './components/single-product/single-product';
import CartPage from './components/pages/cart-page/cartPage';
import Checkout from './components/checkout/checkout';
import Success from './components/checkout/stripe-checkout/success';
import Cancelled from './components/checkout/stripe-checkout/cancel';
function App() {
  return (
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/success' element={<Success />} />
        <Route path='/cancel' element={<Cancelled />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
  );
}

export default App;

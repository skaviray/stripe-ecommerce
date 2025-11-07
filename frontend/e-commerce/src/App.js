import './App.css';
import { ReactDOM } from 'react-dom/client';
import {Routes, Route} from 'react-router-dom'
import HomePage from './components/homePage';
import NotFound from './components/notFound';
import Shop from './components/pages/shop';
import SingleProduct from './components/single-product/single-product';
function App() {
  return (
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
  );
}

export default App;

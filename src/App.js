import './App.css';
import Navbar from './component/navbar/navbar';
import Home from "./pages/home/home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDisplay from "./component/productdisplay/ProductDisplay";
import Checkout from './pages/checkout/checkout';
import Cart from './pages/cart/cart';
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/product/:id" element={<ProductDisplay/>}/>
          <Route path='checkout' element={<Checkout/>}/>
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;


















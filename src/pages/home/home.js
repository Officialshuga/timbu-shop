import React, { useState } from 'react';
import { IoIosArrowRoundUp } from "react-icons/io";
import { BsBriefcase } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./home.css";
import { all_products } from "../../component/assets/all_products";
import model from "../../component/assets/modelshoe.jpg";
import { useCart } from '../../context/CartContext';





const Home = () => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div className='hero'>
        <div className='hero-sec-one'>
          <h2>Timbu Cloud Online Shoe Shop</h2>
          <h5>Your number one online shoe shop.</h5>
        </div>
        <div id='circle'> <img src={model} alt='modelshoe' id='pic'/> </div>
      </div>
      <h3 id='product-heading'>OUR PRODUCT</h3>
      <div className='product-container'>
        {all_products.map((item) => (
          
          <div key={item.id} className='card-container'>
          <Link to={`/product/${item.id}`}> <img src={item.image} alt={item.name} /> </Link>
            <h3>
              <Link to={`/product/${item.id}`}>{item.name}</Link>
            </h3>
            <p>${item.newPrice}</p>
            <div className='btn'>
                <select onChange={(e) => setQuantity(parseInt(e.target.value))}>
                  {[...Array(10).keys()].map(x => (
                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                  ))}
                </select>
                <button onClick={() =>{alert(`Add ${item.name} to cart??`); addToCart(item, quantity)}}>Add to Cart</button>
              </div>
          </div>
          
        ))}
      </div>
      <footer>
          <div className='first'><IoIosArrowRoundUp /></div>
          <div className='briefcase'>
            <div className='brief'><BsBriefcase id='bc'/><h3>PRODUCTS</h3></div>
            <div className='person'><IoPerson id='bc'/><h3>JOIN TIMBU CLOUDS</h3></div>
            <div><FaRegEnvelope id='bc'/><h3>CONTACT</h3></div>
          </div>
          <address>
            For your orders and enrolment, you can call or WhatsApp
            Favour Adiatu on (+234) 81 1341 7773
            Surulere, Lagos, Nigeria
          </address>
        </footer>
    </>
  );
};

export default Home;














import React from 'react';
import { useParams } from 'react-router-dom';
import { all_products } from '../../component/assets/all_products';
import "./ProductDisplay.css";
import { useCart } from '../../context/CartContext';




const ProductDisplay = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const productDetails = all_products.find(p => p.id === productId);


  const { addToCart } = useCart();



  return (
    <div>
      {productDetails ? (
        <>

         <div className='first-part'>
            <img src={productDetails.image} alt='helper'/>
              <div className='details'>
                <h2> {productDetails.name} </h2>
                <p>${productDetails.newPrice}.00</p>
                <button onClick={() =>{alert(`Add to cart??`); addToCart(productDetails)}}>Add to Cart</button>
              </div>
         </div>

          <div className='sec-part'>
            <h1>DESCRIPTION</h1>
            <p>{productDetails.Description}</p>
            <ol>
              {productDetails.features.map((f, i)=>{
                return <li key={`feature${i}`}>{f}</li>
              })}
            </ol>
          </div>

        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDisplay;






















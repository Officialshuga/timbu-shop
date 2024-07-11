import React from 'react';
import { useCart } from '../../context/CartContext';
import "./cart.css"
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, total, removeFromCart, cartCount } = useCart();

  return (
    <div>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
        <div className='two-content'>
  <div className='cartitems'>
    <div className='heading'>
      <h3>Shopping Cart</h3>
      <h3>{cartCount} Items</h3>
    </div>
    <hr />
    {/* <div className='cartitems-format-main'>
      <p> PRODUCT</p>
      <p>TITLE </p>
      <p> QUANTITY</p>
      <p>PRICE </p>
      <p> TOTAL</p>
    </div> */}
    <table className='customers'>
      <tbody>
      <tr>
                <th>Product Details</th>
                <th>Title</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
          </tr>
        {cart.map((items) => (
        
          <tr key={items.id}>
            <td> <img src={items.image} alt={items.name} width="50" className='carticon-product-icon' /></td> 
            <td> <p><span>{items.name}</span></p> </td>
            <td>  <button>{items.quantity}</button></td>
            <td> <span>${items.newPrice}</span></td>
            <td>  <span>${items.newPrice * items.quantity}</span></td>
            <td><button onClick={() => removeFromCart(items.id)}>Remove</button></td>

          </tr>
          
        ))}
      </tbody>


    </table>
    <Link to="/"><p>Continue Shopping</p></Link>
  </div>

  <div className='summary-page'>
    <h3>Order Summary</h3>
    <hr />
    <div id="items">
      <p>ITEMS {cartCount}</p>
      <p>Total: ${total}.00</p>
    </div>
    <label id='ship'>SHIPPING</label>
    <select id="selected-delivery">
      <option>Standard Delivery - $5.00</option>
      <option>Free Delivery</option>
    </select>
    <h3>PROMO CODE</h3>
    <input id='promo-code' placeholder='Enter Your Code' />
    <button id='apply'>APPLY</button><br />
    <hr />
    <div className='pricing'>
      <p>Total Cost</p>
      <p>${total}.00 </p>
    </div>
    <Link to="/checkout"><button id='checkout'> Checkout </button></Link>
  </div>
</div>


        </>
      )}
    </div>
  );
};

export default Cart;














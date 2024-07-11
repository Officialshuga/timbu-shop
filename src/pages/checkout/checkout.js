import React from 'react'
import "./checkout.css"
import masterCard from "../../component/assets/master card.png"
import paypal from "../../component/assets/paypal.png"
import visa from "../../component/assets/visa.png"

const Checkout = () => {
  return (
    <>
      <div className='checkout-cont'>
       <div className='contact-info'>
            <label>Contact</label><br/>
            <div className='emnu'>
              <input type='email' placeholder='Email'/>
              <input type='number' placeholder='Number'/>
            </div>

            <label>Shipping Information</label><br/>
            <div className='input-names'> <input placeholder='First Name' type='text'/> <input placeholder='Last Name' type='text'/></div>
            <div className='input-info'>
              <select className='select-items' label='country'>
                  <option>Nigeria </option>
                  <option> Ghana</option>
                  <option> Kenya</option>
                  <option> Malawi</option>
                  <option> Cameroon</option>
                  <option> South Africa</option>
                </select>
              <input placeholder='State' type='text'/>
              <input placeholder='City' type='text'/>
              <input placeholder='Postal Code' type='text'/>
              <input id="address" placeholder='Address' type='text'/> 
            </div>
        </div>
        <div className='payment-section'>
            <h2>Payment Method</h2>
            <div className="payment-icons">
                <input type='checkbox'/><img id='icons' src={masterCard} alt='masterCard'/>
                <input type='checkbox' /><img id='icons' src={paypal} alt='masterCard'/>
                <input type='checkbox' /><img id='icons' src={visa} alt='masterCard'/>
                {/* <input type='checkbox' /> */}
            </div>
            <div>
              <div className='card-infos'>
                <label>Card Number*</label>
                <input type='number'/>
                <label>Card Holder*</label>
                <input type='text'/>
              </div>
              <div className='card-info'>
                <label>Expiry Date</label>
                <select className='select-month' name='month'>
                  <option>January </option>
                  <option> February</option>
                  <option> March</option>
                  <option> April</option>
                  <option> May</option>
                  <option> June</option>
                  <option> July</option>
                  <option> August</option>
                  <option> September</option>
                  <option> October</option>
                  <option>November </option>
                  <option> Decemeber</option>
                </select>


                <label>Expiry Date</label>
                <select className='select-month' name='year'>
                  <option>2024 </option>
                  <option> 2025</option>
                  <option> 2026</option>
                  <option> 2027</option>
                  <option> 2028</option>
                  <option> 2029</option>
                  <option> 2030</option>
                </select>
                <label>CVV*</label>
                <input required type='text'/>
              </div>
            </div>
        </div> 
       </div>
    </>
  )
}

export default Checkout;
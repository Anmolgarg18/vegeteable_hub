import React, { useState, useEffect } from 'react';
import '../App.css';
import '../images/css/cart.css';
import img1 from '../images/paylogo.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CartList({ cart }) {
    
  const navigate=useNavigate()
  const [CART, setCART] = useState([]);
  useEffect(() => {
    setCART(cart);
  }, [cart]);

  

  const handleDecreaseQuantity = (cartindex) => {
    const updatedCart = CART.map((item, index) =>
      cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
    );
    setCART(updatedCart);
  };

  const handleIncreaseQuantity = (cartindex) => {
    const updatedCart = CART.map((item, index) =>
      cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCART(updatedCart);
  };

  const calculateTotal = () => {
     return CART.map((item) => item.price * item.quantity).reduce((total, value) => total + value, 0);
  };

  const handlePayment = () => {

    // Load the Razorpay script dynamically and handle payments
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => {
      const options = {
        key: "rzp_test_we99WBJeeieUdV", // Replace with your actual API key
        amount: calculateTotal() * 100, // Amount in paisa
        currency: 'INR',
        name: 'The Vegetable Hub',
        description: 'Vegetables',
        image: img1,
        // Add other options as needed
      };
      const razorpayObject = new window.Razorpay(options);
      razorpayObject.on('payment.failed', function (response) {
        alert('Payment Failed');
      });
      razorpayObject.open();
      setCART([]);
      CART?.map((cartItem, cartindex) => {
      axios.post('https://serverlogin-89vb.onrender.com/saveorder',{email:"abc@gmail.com",name:cartItem.name,quantity:cartItem.quantity,price:cartItem.price})
      .then(result => {console.log(result)})
      })
      
    };

    document.head.appendChild(script);
  };

  return (
    <div>
      {CART?.map((cartItem, cartindex) => {
        return (
          <div className="cart" key={cartindex}>
            <img src={cartItem.url} width={40} alt={cartItem.name} />
            <span1>
              <b>{cartItem.name}</b>
            </span1>
            <button onClick={() => handleDecreaseQuantity(cartindex)}>-</button>
            <span>
              <b>{cartItem.quantity}</b>
            </span>
            <button onClick={() => handleIncreaseQuantity(cartindex)}>+</button>
            <span2>
              <i className="fa-solid fa-indian-rupee-sign "></i>
              <b>{cartItem.price * cartItem.quantity}</b>
            </span2>
          </div>
        );
      })}
      <div className="total">
        <span>Total</span>
        <i className="fa-solid fa-indian-rupee-sign "></i>
        {calculateTotal()}
        <button type="submit" id="Login" onClick={handlePayment}>
          BuyNow
        </button>
      </div>
    </div>
  );
}

export default CartList;

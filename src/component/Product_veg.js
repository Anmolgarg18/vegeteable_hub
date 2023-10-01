import '../App.css';
import ProductList from './ProductList'
import CartList from './CartList';
import { useState } from 'react';

import onion from '../images/ve/onion.jpeg';
import garlic from '../images/ve/garlic.jpeg';
import corriander from '../images/ve/corriander.jpeg';
import cauliflower from '../images/ve/cauliflower.jpeg';
import cabbage from '../images/ve/cabbage.jpeg';
import capsicum from '../images/ve/capsicum.jpeg';
import ginger from '../images/ve/ginger.jpeg';
import brinjal from '../images/ve/brinjal.jpeg';
import tomato from '../images/ve/tomato.jpeg';
import potato from '../images/ve/potato.jpeg';
import Navbar from './navbar';


function Product_veg() {
  
  const [product, setProduct] = useState([
    {
      url: onion,
      name: 'Onion',
      category: 'Vegetable',
      seller: 'Seller: saini farms',
      price: 22
    },
    {
      url: garlic,
      name: 'Garlic',
      category: 'vegetable',
      seller: 'Seller: Garg farms',
      price: 110
    },
    {
      url: corriander,
      name: 'Corriander',
      category: 'Vegetable',
      seller: 'Saini farms',
      price: 15
    },
    {
      url: cauliflower,
      name: 'Cauliflower',
      category: 'Vegetable',
      seller: 'Saini farms',
      price: 40
    },
    {
      url: cabbage,
      name: 'Cabbage',
      category: 'Vegetable',
      seller: 'Garg farms',
      price: 15
    },
    {
      url: capsicum,
      name: 'Capsicum',
      category: 'Vegetable',
      seller: 'Saini farms',
      price: 100
    },
{
      url: ginger,
      name: 'Ginger',
      category: 'Vegetable',
      seller: 'Saini farms',
      price: 17
    },
{
      url: brinjal,
      name: 'Brinjal',
      category: 'Vegetable',
      seller: 'Garg farms',
      price: 48
    },
{
      url: tomato,
      name: 'Tomato',
      category: 'Vegetable',
      seller: 'Garg farms',
      price: 100
    },
	
	{
      url: potato,
      name: 'Potato',
      category: 'Vegetable',
      seller: 'Saini farms',
      price: 24
    },

  ])

  const [cart,setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart,{...data,quantity:1}])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Navbar count = {cart.length} 
        handleShow={handleShow}></Navbar>
      {
        showCart ?
        <CartList cart={cart}></CartList> :
        <ProductList product={product} addToCart={addToCart}></ProductList>
  
      }
      </div>
  );
} 
 
 export default Product_veg;




 
import '../App.css';
import ProductList from './ProductList'
import CartList from './CartList';
import { useState } from 'react';
import Navbar from './navbar';

import apple from '../images/fruit/apple.jpeg';
import banana from '../images/fruit/banana.jpeg';
import pear from '../images/fruit/pear.jpeg';
import dragon from '../images/fruit/dragon.jpeg';
import melon from '../images/fruit/melon.jpeg';
import pomegrenate from '../images/fruit/pomegrenate.jpeg';
import plum from '../images/fruit/plum.jpeg';
import tangerine from '../images/fruit/tangerine.jpeg';
import lemon from '../images/fruit/lemon.jpeg';
import pineapple from '../images/fruit/pineapple.jpeg';



function Product_fruit() {
    
  const [product, setProduct] = useState([
    {
      url: apple,
      name: 'Apple',
      category: 'Fruits',
      seller: 'Seller: saini farms',
      price: 22
    },
    {
      url: banana,
      name: 'Banana',
      category: 'Fruits',
      seller: 'Seller: Garg farms',
      price: 110
    },
    {
      url: pear,
      name: 'Pear',
      category: 'Fruits',
      seller: 'Saini farms',
      price: 15
    },
    {
      url: dragon,
      name: 'Dragon',
      category: 'Fruits',
      seller: 'Saini farms',
      price: 40
    },
    {
      url: melon,
      name: 'Melon',
      category: 'Fruits',
      seller: 'Garg farms',
      price: 15
    },
    
    {
      url: pomegrenate,
      name: 'pomegrenate',
      category: 'Fruits',
      seller: 'Saini farms',
      price: 100
    },
{
      url: plum,
      name: 'Plum',
      category: 'Fruits',
      seller: 'Saini farms',
      price: 17
    },
{
      url: tangerine,
      name: 'Tangerine',
      category: 'Fruits',
      seller: 'Garg farms',
      price: 48
    },
{
      url: lemon,
      name: 'Lemon',
      category: 'Fruits',
      seller: 'Garg farms',
      price: 100
    },
	
	{
      url: pineapple,
      name: 'Pineapple',
      category: 'Fruits',
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

 export default Product_fruit;
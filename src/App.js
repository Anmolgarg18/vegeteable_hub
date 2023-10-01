import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './component/home';
import Product_veg from './component/Product_veg';
import Product_fruit from './component/Product_fruit';
import Login from './component/Login';
import Accounts from './component/Accounts';
import React from 'react';
import PageNotFound from './component/pagenotfound';
import AboutUs from './component/AboutUs';
import PricePredictor from './component/pricePredictor';
import Orders from './component/orders';
function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/> 
      <Route path='/register' element={<Accounts/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/product' element={<Product_veg/>}/>
      <Route path='/product_f' element={<Product_fruit/>}/>
      <Route path='/pricepredictor' element={<PricePredictor/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path="*" element={<PageNotFound/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;

import React,{useState,useEffect} from 'react'
import axios from 'axios'
import '../images/css/orders.css';
export default function  Orders() {
    const [cart,setcart]=useState([])
    
    const getdata=async ()=>{
        const s=await axios.get('https://serverlogin-89vb.onrender.com/orders');
        //console.log(s.data[0])
        setcart(s.data);
    }
    useEffect(()=>{
        getdata()
    },[])
  return (
    <div>
      <div className='mainhead'>
     <h1>  Total <span>orders</span></h1></div>
         {cart?.map((cartItem, cartindex) => {
        return (
          
          <div className="cart" key={cartindex}>
            <span1>
            
              <b>{cartItem.name}</b>
            </span1>
            <span>
              <b>{cartItem.quantity}</b>
            </span>
            <span2>
              <i className="fa-solid fa-indian-rupee-sign "></i>
              <b>{cartItem.price * cartItem.quantity}</b>
            </span2>
            <span2>
              <b>{cartItem.email}</b>
            </span2>
          </div>
        );
      })} 
    </div>
  )
}

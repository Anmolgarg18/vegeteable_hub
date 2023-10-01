import React from "react";

import { Link } from "react-router-dom";
import Footer from "./footer";
import Service from "./Service";
import Cate from "./Cate";



export default function Main() {
  return (
    <div className="country">
      {/* <nav className="nav3">
        <div className="navimg">
        <img
            src={require("../images/main.jpg")}
            width="100%"
            height="100%"
            alt="fresh Vegetables and fruits"
            style={{ borderRadius: 5}}
          />
        </div>
      </nav> */}
       <div className="mainhead"> <b><h1>Our <span>Services</span></h1></b></div>
      <Service/>
      <div className="mainhead" > <b><h1>Shop By <span>Category</span></h1></b></div>
      <Cate/>
      <Footer/>
      
      
    </div>
   
  );
}

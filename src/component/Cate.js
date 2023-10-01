
import React from 'react';
import '../images/css/cate.css';
import { Link } from "react-router-dom";

function Cate(){
    return(
<div className="photo">
  <Link to="/product"><img
            src={require('../images/img/vegetables.jpg')}
           
            style={{ borderRadius: 5}}
          /></Link>
  <Link to="/product_f"><img
            src={require('../images/img/fruits.jpg')}
        
            style={{ borderRadius: 5}}
          /></Link>
  <img
            src={require('../images/img/dairy.jpg')}
          
            style={{ borderRadius: 5}}
          />
</div>

    );
}
export default Cate;


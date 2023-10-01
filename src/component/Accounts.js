import React ,{useState} from "react";
import '../images/css/account.css';
import {Link} from 'react-router-dom';
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const Accounts = () =>{
    const[email , setEmail] = useState()
    const[phone , setPhone] = useState()
    const[password ,setPassword] = useState()
  const navigate = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('https://login-wr13.onrender.com/register',{email,phone,password})
      .then(result => {console.log(result)
      navigate('/login')  //put path for homepage here 
      })
      .catch(err=> console.log(err))
    }
    
    return (
    <div className="headcontainers">
    
    <div className="containers">
      <div className="login">
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <hr />
          <p>Welcome !</p>
          <label>Email</label>
          <input type="text" name="email" placeholder="abc@example.com" onChange={(e) => setEmail(e.target.value)} />
          <label>Phone</label>
          <input type="number" name="phone" placeholder="9123876105" onChange={(e) => setPhone(e.target.value)}/>
          <label>Password</label>
          <input type="password" name="password" placeholder="Enter Your Password!" onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" id="submit">Submit</button>  
          <p>Already a member? <Link to="/login" style={{ color: 'blue'}}>Login</Link> </p>
        </form>
        
        
      </div>
      <div className="pic">
      <img
          src={require("../images/logo.png")}
                      />
      </div>
    </div>
    </div>
    );
}
export default Accounts;
import React ,{useState} from "react";
import '../images/css/login.css';
import {Link} from 'react-router-dom';
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const[email , setEmail] = useState()
    const[password ,setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('https://login-wr13.onrender.com/login',{email,password})
      .then(result => {console.log(result)
        if(result.data === "Success"){
          navigate('/product')
        }
        
      })
      .catch(err=> console.log(err))
    }

return (
    <div className="headcontainers">
        
      <div className="containers">
        <div className="login">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <hr />
            <p>Explore the World!</p>
            <label>Email</label>
            <input type="text" placeholder="abc@example.com" name="email" onChange={(e) => setEmail(e.target.value)} />
            <label>Password</label>
            <input type="password" placeholder="Enter your password!" name="password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" >Submit</button>
            <p>
              Not a member? <Link to="/register" style={{ color: 'blue' }}>Sign-Up</Link>
            </p>
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
export default Login;
import React from 'react'
import "../images/logincss.css";
export default function Register() {
  return (
    <div>
      <div className="container">
        <h2 className="text-center">Registration Form</h2>
        <div className="mainBox">
          <form>
            <div className="box">
              <label htmlFor="firstName"><p className="text">First Name</p></label>
              <input type="text" name="firstName" style={{ width: "50vh" }} />
            </div>
            <div className="box">
              <label htmlFor="lastName"><p className="text">Last Name</p></label>
              <input type="text" name="lastName" style={{ width: "50vh" }} />
            </div> 
            <div className="box">
              <label htmlFor="Email"><p className="text">Email</p></label>
              <input type="email" name="email" style={{ width: "50vh" }} />
            </div> 
            <div className="box">
              <label htmlFor="phoneNo"><p className="text">Phone No</p></label>
              <input type="number" name="phoneNo" style={{ width: "50vh" }} />
            </div> 
            <div className="box">
              <label htmlFor="address"><p className="text">Address</p></label>
              <input type="text" name="address" style={{ width: "50vh" }} />
            </div> 
            <div className="box">
              <label htmlFor="favrate"><p className="text">Favrate</p></label>
              <input type="text" name="favrate" style={{ width: "50vh" }} />
            </div> 
            <div className="box">
            <div className="btn btn-primary btnSize">Register</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

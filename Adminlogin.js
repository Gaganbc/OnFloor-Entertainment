import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import "./Signup.css";
import { Link } from 'react-router-dom';


export const Login = () => {

  return(
    <div className='main'>
      <div className='sub-main1'>
        <div>
          <div className='img'>
            <div className='container-image'>
            </div>


          </div>
          <div>
            <h1> Admin login </h1>
            <div>
              <input type="text" placeholder="Id" className="name"/>
            </div>
            <div className="second-input">
              <input type="text" placeholder="Password" className="name"/>
            </div>

            <div className="login-button">
              <Link to="/Adminhomepage">
            <button className='login12'>Login</button></Link>
            </div>
            
          </div>


        </div>

      </div>
    </div>
  )
}

export default Login
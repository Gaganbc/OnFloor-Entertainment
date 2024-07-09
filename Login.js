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
            <h1> Login </h1>
            <div className="second-input">
              <input type="text" placeholder="Name" className="Name"/>
            </div>
            <div className="second-input">
              <input type="text" placeholder="Email" className="Email"/>
            </div>

            <div className="login-button">
              <Link to='/Mainpage'>
            <button className='login'>Login</button></Link>
            </div>
            
            <p className="link">
                 <a href="Forgotpassword">Forgot password</a> 
              </p>

              <p className="link">
                 <a>if u dont have an account?</a> <a href="Signup">Signup</a>
              </p>
            
          </div>


        </div>

      </div>
    </div>
  )
}

export default Login
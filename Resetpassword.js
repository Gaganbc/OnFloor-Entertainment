import React from 'react'
import { Link } from 'react-router-dom'


export const Resetpassword = () => {
  return (
    <div className='main'>
      <div className='sub-main2'>
        <div>
          <div className='img'>
            <div className='container-image'>
            </div>
            
          </div>
          <div>
            <h1> New Password </h1>
            <div>
              <input type="text" placeholder="Enter Password" className="Enter OTP"/>
            </div>
            <div>
              <input type="text" placeholder="Re-enter Password" className="Enter OTP"/>
            </div>

            <div className="login-button">
            <Link to="/Login">
            <button className='confirm'>Confirm</button></Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}


export default Resetpassword

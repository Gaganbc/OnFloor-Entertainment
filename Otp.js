import React from 'react'
import { Link } from 'react-router-dom'

export const Otp = () => {
  return (
    <div className='main'>
      <div className='sub-main2'>
        <div>
          <div className='img'>
            <div className='container-image'>
             {/*  <img src={profile} alt="profile" className="profile"/> */}
            </div>
            
          </div>
          <div>
            <h1> Enter OTP </h1>
            <div>
              <input type="text" placeholder="Enter OTP" className="Enter OTP"/>
            </div>

            <div className="login-button">
                <Link to="/Resetpassword">
            <button className='confirm'>Confirm</button></Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
export default Otp
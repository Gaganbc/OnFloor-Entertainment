import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'


export const Forgotpassword = () => {

  return(
    <div className='main'>
      <div className='sub-main2'>
        <div>
          <div className='img'>
            <div className='container-image'>
            </div>
            
          </div>
          <div>
            <h1> Reset password </h1>
            <div>
              <input type="text" placeholder="Email id" className="Email id"/>
            </div>

            <div className="login-button">
              <Link to="/Otp">
            <button className='confirm'>Confirm</button></Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Forgotpassword 
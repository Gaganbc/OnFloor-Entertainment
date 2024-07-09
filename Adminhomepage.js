import React from 'react'
import { Link } from 'react-router-dom';
import "./Adminhomepage.css";

export const Adminhomepage = () => {
  return (
    <div>
      {/* <div className="Logout">
            <Link to="/Adminlogin">
            <button className='logout'>Logout</button></Link>
            </div> */}
      <div className="UD">
        <div>
   {/* <div className="editdetails">
       <div className='Edit'>User details
       <div className="login-button">
       <Link to="/Adminuserdetails">
     <button className='login12'>View</button></Link>
     </div></div>
     </div> */}
     <div>
      <div className="editdetails">
      <div className='Edit'>Classes Available
      <div className="login-button">
      <Link to="/Adminclassavail">
      <button className='login12'>View</button></Link>
      </div></div></div>
      </div>
      <div>
      <div className="editdetails">
      <div className='Edit'>Democlass Registration
      <div className="login-button">
      <Link to="/Admindemoclass">
      <button className='login12'>View</button></Link>
      </div></div></div>
      </div>
      <div className="editdetails">
      <div className='Edit'>Admission
      <div className="login-button">
      <Link to="/Adminregistration">
      <button className='login12'>View</button></Link>
      </div></div></div>
      </div>
      <div className="editdetails">
      <div className='Edit'>Payment
      <div className="login-button">
      <Link to="/Adminpay">
      <button className='login12'>View</button></Link>
      </div></div></div>
      <div className="editdetails">
      <div className='Edit'>Contact-us
      <div className="login-button">
      <Link to="/Admincont">
      <button className='login12'>View</button></Link>
      </div></div></div>
      </div>
     </div>
  )
}
export default Adminhomepage
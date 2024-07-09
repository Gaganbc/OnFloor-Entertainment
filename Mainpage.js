import React from 'react'
import "./mainpage.css";
import { Link } from 'react-router-dom';
const Mainpage = () => {
  return (
    <div>
      <div>
      {/* <div className="Logout">
            <Link to="/Login">
            <button className='cu'>Logout</button></Link>
            </div> */}
            <div>
    <a className='CU' href='Contact'><button className='cu'>Contact Us</button></a></div></div>
<div>
          <div className="oe">
    <h1 className="text">ONFLOOR ENTERTAINMENT</h1></div>
    <div className="rr">
    <div className="aboutonfloor">
        <p className='art'>OnFloor Entertainment is a Art classes registration website where various forms of arts will be available to learn and register to attend the offline classes regularly on the monthly/annual basis.</p></div> 
    <div className="Classes">
        <Link to="/classes">
            <button className="Classesavailable">Classes Available</button></Link>
            </div>
            <div className="Classes">
        <Link to="/userpay">
            <button className="Classesavailable">Payment Details</button></Link>
            </div>
            </div></div>
    </div>
  )
}

export default Mainpage
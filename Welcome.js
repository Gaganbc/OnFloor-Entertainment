import React from 'react'
import "./Welcome.css";
import { Link } from 'react-router-dom';
const Welcome = () => {
  return (
      <div className='bodu' >
          <div classname="ofe">
    <h1 className="text">Welcome to ONFLOOR ENTERTAINMENT</h1></div>
    <div className="kk">
    <div className="welcome1">
        <Link to="/google">
            <button className="button1">Login</button></Link>
            </div>
            
            {/* <div className="welcome2">
                <Link to="/Adminlogin">
            <button className="button2" >Admin Login</button></Link>
            
            </div> */}
            </div>
    </div>
  )
}

export default Welcome
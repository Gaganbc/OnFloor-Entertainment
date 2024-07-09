import React from 'react'
import { Link } from 'react-router-dom';
import '../Component/Thankyou.css';

export const Thankyou = () => {
  return (
    <div className='hm' >
    <h1>Payment is succesfull</h1>
    <h2>Thank You for registering</h2>
    <div className='CVB'>
    <Link to='/mainpage'>
    <button className="cvb">Go back to Main page</button></Link>
    </div></div>
  )
}
export default Thankyou
import React from 'react'
import '../Component/slotbookingdone.css';
import { Link } from 'react-router-dom';

const slotbookingdone = () => {
  return (

    <div className='hl' >
        <h1>Slot Booking is Successfull</h1>
        <div className='BNM'>
        <Link to='/mainpage'>
    <button className="bnm">Go back to Main page</button></Link>
        </div></div>
  )
}

export default slotbookingdone
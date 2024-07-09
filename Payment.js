import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import "./Payment.css";
import { Link } from 'react-router-dom';
import Axios  from 'axios';

export const Payment = () => {

  const [id] = useState(0);
  const [name, setName] = useState("");
  const [mode, setMode] = useState("");
  const [phone_no, setPhone_no] = useState("");
  const [upi, setUpi] = useState("");
  


  const addpay = () => {
    
    if(name !=='' && mode !==''){
      if(phone_no !=='' && upi !==''){
            Axios.post('http://localhost:3001/pay', {
        id: id,
        name : name,
        mode: mode,
        phone_no: phone_no,
        upi: upi
        
    }).then(() => {
        console.log('Successfully created client record.')
    }); 
          } else {alert('Every Field is required')}
        } else {alert('Every Field is required')}
    
}




  return (
    <div>
      <form action='/Thankyou'>
    <div className='ad'>
    <h1 className='Admission'> Payment</h1>
    <div className="select">
    <label className="RRR">User Name : </label>
    <div className="round">
      <input onChange={(event)=>{setName(event.target.value)}} type="text" placeholder="User Name" className="hmm" required/>
    </div></div>
    <div className="select">
    <label className="RRR">payment mode: </label>
    <div className="round">
      {/* <input type="text" placeholder="Paymentmode" className="hmm"/> */}
      <select onChange={(event)=>{setMode(event.target.value)}} required>
        <option>--select--</option>
        <option>Google pay</option>
        <option>Phone pay</option>
      </select>
    </div>
    </div>
    <div className="select">
    <label className="RRR">Phone Number: </label>\
    <div className="round">
    <input onChange={(event)=>{setPhone_no(event.target.value)}} type="text" placeholder="phone Number" className="hmm" required/>
    </div></div>
    <div className="select">
    <label className="RRR">Upi Id</label>
    <div className="round">
      <input onChange={(event)=>{setUpi(event.target.value)}} type="text" placeholder="UPI Id" className="hmm" required/>
    </div></div>
    <label className="RRR">Amount to be paid : Rs.3999/-</label>

    </div>
    <div className="Thankyou">
    {/* <Link to='/Thankyou'> */}
  <button type='submit' className='thankyou' onClick={addpay}>Register</button>
  {/* </Link> */}
  <Link to='/Admission'>
  <button className='thankyou'>Back</button></Link>
  </div>
  </form>
  </div>
  )
}
export default Payment
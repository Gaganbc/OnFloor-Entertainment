import React, { useState }  from 'react'
import "./Contact.css";
import Axios  from 'axios';
import { Link } from 'react-router-dom';



export const Myprofile = () => {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const addmessage = () => {

    Axios.post('http://localhost:3001/contact', {
        name: name,
        email: email,
        message: message
    }).then(() => {
        console.log('Successfully created client record.')
    }); 
}


  return (
   <div>
    <div className='ad'>
    <h1 className='Admission'>Contact Us</h1>
    <div className="select">
    <input type="text" onChange={(event)=>{setName(event.target.value)}} placeholder="Your Name" className="select"/>
    </div>
    <div className="select">
      <input type="text" onChange={(event)=>{setEmail(event.target.value)}} placeholder="Email-Id" className="select"/>
    </div>
    <div className="select">
      <input type="text" onChange={(event)=>{setMessage(event.target.value)}} placeholder="Type your message" className="select"></input>
      </div>
    </div>
    <div className="submit">
      <Link to="/Mainpage">
    <button onClick={addmessage} className='Submit'>Submit</button></Link>
    </div>
    </div>
  
  )
}
export default Myprofile
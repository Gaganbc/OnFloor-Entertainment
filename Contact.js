import React, { useState }  from 'react'
import "./Contact.css";
import Axios  from 'axios';
import { Link, useNavigate } from 'react-router-dom';



export const Contact = () => {
 
  const history = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const addmessage = () => {

    if(name !=='' && email !==''){
      if(message !==''){
        Axios.post('http://localhost:3001/contact', {
        name: name,
        email: email,
        message: message
    }).then(() => {
        console.log('Successfully created client record.')
        history.push('/Mainpage')
    }); 
      } else {alert('Every Field is required')}
    } else {alert('Every Field is required')}
}


  return (
   <div>
     <form action='/Mainpage'>
    <div className='ad'>
    <h1 className='Admission'>Contact Us</h1>
    <div className="select">
    <label className="RRR">Your Name: </label>
    <div className="round">
    <input type="text" onChange={(event)=>{setName(event.target.value)}} placeholder="Your Name" className="hmm" required />
    </div></div>
    <div className="select">
    <label className="RRR">Email-Id: </label>
    <div className="round">
      <input type="text" onChange={(event)=>{setEmail(event.target.value)}} placeholder="Email-Id" className="hmm" required />
    </div></div>
    <div className="select">
    <label className="RRR">Your Message: </label>
    <div className="round">
      <input type="text" onChange={(event)=>{setMessage(event.target.value)}} placeholder="Type your message" className="hmm" required></input>
      </div></div>
    </div>
    <div className="submit">
      {/* <Link to="/Mainpage"> */}
    <button onClick={addmessage} className='Submit'>Submit</button>
    {/* </Link> */}
    { <Link to="/Mainpage"> 
    <button onClick={addmessage} className='Submit'>Back</button></Link>}
    </div>
    </form>
    </div>
  
  )
}
export default Contact
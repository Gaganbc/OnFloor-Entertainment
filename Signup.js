import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import "./Signup.css";
// import  {Link}  from 'react-router-dom';
import Axios  from 'axios';
import { Link } from 'react-router-dom';

export const Signup = () => {


  const [id] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_no, setPhone_no] = useState("");
  const [password, setPassword] = useState(0);
  const [cpassword, setCpassword] = useState("");

  const addClientRecord = () => {

    Axios.post('http://localhost:3001/create', {
        id: id,
        name: name,
        email: email ,
        phone_no : phone_no ,
        password: password,
        cpassword: cpassword
    }).then(() => {
        console.log('Successfully created client record.')
    }); 
}



  return(
    <div className='main'>
      <div className='sub-main'>
        <div>
          <div className='img'>
            <div className='container-image'>
            </div>


          </div>
          <div>
            <h1> Signup </h1>
            <div classname="abcd">
            <div className="second-input">
            <input type="text" onChange={(event) => {setName(event.target.value)}} placeholder="UserName" className="hmm"/>
            </div>
            <div className="second-input">
              <input type="text" onChange={(event) => {setEmail(event.target.value)}} placeholder="Email id" className="hmm"/>
            </div>
            <div className="second-input">
              <input type="text" onChange={(event) => {setPhone_no(event.target.value)}} placeholder="Phone Number" className="hmm"/>
            </div>
            <div className="second-input">
              <input type="password" onChange={(event) => {setPassword(event.target.value)}} placeholder="Password" className="hmm"/>
            </div>
            <div className="second-input">
              <input type="password" onChange={(event) => {setCpassword(event.target.value)}} placeholder="Confirm Password" className="hmm"/>
            </div>
            </div>
           <Link to="/Login">
            <button onClick={addClientRecord } className='signup'>Signup</button></Link>``


            {/* <div className="login-button">
              <Link to="/Login">
            <button onClick={addClientRecord } className='signup'>Signup</button></Link>
            </div> */}
            
              <p className="link">
                 <a>Already have an account?</a> <a href="Login">Login here</a>
              </p>
            
          </div>


        </div>

      </div>
    </div>
  )
}
export default Signup
import React from 'react'
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Component/Democlass.css';
import { useState } from 'react';
import Axios from 'axios';


export const Democlass = () => {


  const [data, setData] = useState([]);


  useEffect(() => {
    Axios.get('http://localhost:3001/getclass').then((res) => {
        console.log(res);
        setData(res.data);
        console.log(data);
    });
}, [data]);

const history = useNavigate();

  const [id] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [aclass, setAclass] = useState("");
  const [dt, setDt] = useState("");
  const [tym, setTym] = useState("");

  const adddemo = () => {
  
    if(name !=='' && email !==''){
      if(phone !=='' && aclass !==''){
        if(dt !=='' && tym !==''){
          Axios.post('http://localhost:3001/createdemo', {
        id: id,
        name: name,
        email: email ,
        phone : phone ,
        aclass: aclass,
        dt : dt,
        tym : tym
    }).then(() => {
        console.log('Successfully created client record.')
        history.push('/Slotbookingdone')
    }); 
        } else {alert('Every Field is required')}
      }  else {alert('Every Field is required')}
    }  else {alert('Every Field is required')}
    
}

  return ( 
    <div className='hi'>
      <form action='Slotbookingdone'>
    <h1> Demo Class Details</h1>
    <div>
      <label className="RRR">Username: </label>
      <div className="round">
    <input onChange={(event) => {setName(event.target.value)}} type="text" placeholder="Name" className="hmm" required/>
    </div></div>
    <div className="ei">
    <label className="RRR">Email-Id: </label>
    <div className="round">
      <input type="text" onChange={(event) => {setEmail(event.target.value)}} placeholder="Email id" className="hmm" required/>
    </div></div>
    <div className="ei">
    <label className="RRR">Phone No: </label>
    <div className="round">
      <input type="text" onChange={(event) => {setPhone(event.target.value)}} placeholder="Phone Number" className="hmm" required/>
    </div></div>
    <div></div>
    <div className="choose">
     <label className="RRR"> Classes:  </label>
     <div className="roundr">
     <select className="hmm" onChange={(event) => {setAclass(event.target.value)}} required>  
     <option>--select--</option>   
     {
              data.map(clientdata => {
                return(
        < option>{clientdata.classes}</option>

        )
      })
    }
     </select>
    </div></div>
    <div className="dem">
    <label className="RRR">Date: </label>
    <div className="round">
     
    <input type="date" onChange={(event) => {setDt(event.target.value)}} placeholder="demo" className="hmm" required/>
    </div></div>
    <div className="choose">
     <label className="RRR">Timings:  </label>
     <div className="roundr">
     <select className="hmm" onChange={(event) => {setTym(event.target.value)}} required> 
     <option>--select--</option>    
     <option value=" 11.00 A.M">
       11.00 A.M
     </option>
     <option value="7.00 P.M">7.00 P.M</option>
     </select>
     </div></div>
    
    <div className="ll">
        {/* <Link to='/Slotbookingdone'> */}
    <button type='submit' onClick={adddemo} className="confirm">Confirm</button> 
    {/* </Link> */}
    <Link to='/Classes'>
    <button className="confirm">Back</button></Link>
    </div>
    </form>
    </div>  
  )
}
export default Democlass

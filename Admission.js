import React, { useState, useEffect }  from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import "./Admission.css";
import { Link, useNavigate } from 'react-router-dom';
import Axios  from 'axios';





export const Admission = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/getclass').then((res) => {
        console.log(res);
        setData(res.data);
        console.log(data);
    });
}, [data]);

const history = useNavigate();

  const [id] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [aclass, setAclass] = useState("");
  const [fee, setFee] = useState("");
  const [afrom, setAfrom] = useState("");
  const [ato, setAto] = useState("");
  


  const addadmis = () => {
    
    if(name !=='' && email !==''){
      if(phone !=='' && aclass !==''){
        if(fee!=='' && afrom !==''){
          if(ato !==''){
            Axios.post('http://localhost:3001/admis', {
        id: id,
        name : name,
        email: email,
        phone: phone,
        aclass: aclass,
        fee: fee,
        afrom: afrom,
        ato: ato
        
    }).then(() => {
        console.log('Successfully created client record.')
        history.push('/Payment')
    }); 
          } else {alert('Every Field is required')}
        } else {alert('Every Field is required')}
      } else {alert('Every Field is required')}
    } else {alert('Every Field is required')}
    
}



  return (
        <div className='adio' >
          <form action='/Payment'>
          <div className='adio' >
    <h1 className='Admission'> Admission </h1>
   
    <div className="select"> 
    <label className="RRR">Username: </label>
    <div className="round">
    <input type="text" onChange={(event)=>{setName(event.target.value)}} placeholder="UserName" className="hmm" required/>
    </div></div>
    <div className="select">
    <label className="RRR">Email-Id: </label>
    <div className="round">
      <input type="text" onChange={(event)=>{setEmail(event.target.value)}} placeholder="Email id" className="hmm" required/>
    </div></div>
    <div className="select">
    <label className="RRR">Phone No: </label>
    <div className="round">
      <input type="text" onChange={(event)=>{setphone(event.target.value)}} placeholder="Phone Number" className="hmm" required/>
    </div></div>
    <div className="select">
     <label className="RRR"> Classes:  </label>
     <div className="roundr">
     <select className="hmm" onChange={(event)=>{setAclass(event.target.value)}} required> 
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
    <div className="select">
     <label className="RRR"> Fee structure: </label>
     <div className="roundr">
     <select className="hmm" onChange={(event)=>{setFee(event.target.value)}} required> 
        <option>--select--</option>
        < option>Monthly</option>
        < option>Annually</option>
     </select>
    </div></div>
    <div className="select">
    <label className="RRR"> From: </label>
    <div className="round">
    <input type="date" onChange={(event)=>{setAfrom(event.target.value)}} placeholder="demo" className="hmm" required/>
    </div></div>
    <div className="select">
    <label className="RRR">To: </label>
    <div className="round">
    <input type="date" onChange={(event)=>{setAto(event.target.value)}} placeholder="demo" className="hmm" required/>
    </div></div>

    <div className="register">
    {/* <Link to="/Payment"> */}
    <button type='submit' onClick={addadmis} className='Register'>Payment</button>
    {/* </Link> */}
    <Link to="/Classes">
    <button className='Register'>Back</button>
    </Link>
    </div>
    </div>
    </form>
    </div>

  )    
}


export default Admission
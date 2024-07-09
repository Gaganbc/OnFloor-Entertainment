import React, { useState }  from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Axios  from 'axios';
import "./Addclasses.css";

 
export const Addclasses = () => {

  const history = useNavigate();
  const [id] = useState(0);
  const [classes, setClasses] = useState("");
  const [trainer, setTrainer] = useState("");
  const [mont, setMont] = useState("")
    
  const [anul, setAnul] = useState("")


  const addclasses = () => {
    
    if(classes !=='' && trainer !==''){
      if(mont !=='' && anul !==''){
    Axios.post('http://localhost:3001/createclass', {
        id: id,
        classes: classes,
        trainer: trainer, 
        mont: mont,
        anul: anul
    }).then(() => {
        console.log('Successfully created client record.')
        history.push('/Adminclassavail')
    }); 
  } else {alert('Every Field is required')}
} else {alert('Every Field is required')}
} 

  return (
    <div>
      <form action='/Adminclassavail'>


    <div className="classes">
            <h1> Classes </h1>
            <div className="second-input">
            <label className="RRR">Class: </label>
            <div className="round">
              <input type="text" placeholder="Class" onChange={(event)=>{setClasses(event.target.value)}} className="Name" required/>
            </div></div>
            <div className="second-input">
            <label className="RRR">Trainer Name: </label>
            <div className="round">
              <input type="text" placeholder="Trainer" onChange={(event)=>{setTrainer(event.target.value)}} className="Email" required/>
            </div></div>
            <div className="second-input">
            <label className="RRR">Monthly Fee: </label>
            <div className="round">
              <input type="text" placeholder="Monthly" onChange={(event)=>{setMont(event.target.value)}} className="Email" required/>
            </div></div>
            <div className="second-input">
            <label className="RRR">Annual fee: </label>
            <div className="round">
              <input type="text" placeholder="Anually" onChange={(event)=>{setAnul(event.target.value)}} className="Email" required/>
            </div></div>
            <div className="CSD">
              {/* <Link to='/Adminclassavail'> */}
            <button onClick={addclasses} className='csd'>Add</button>
            {/* </Link> */}
            </div>
            </div>
            </form>
    </div>
  )
}
export default Addclasses
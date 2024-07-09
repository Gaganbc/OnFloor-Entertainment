import React, { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios' 
import "./updateclass.css";

const Updateclass = () => {

    const history = useNavigate();

    const {id } = useParams();

    const [classes, setClasses] = useState("")

    const [trainer, settrainer] = useState("")

    const [mont, setMont] = useState("")
    
    const [anul, setAnul] = useState("")

    const updateclass =() =>{

        if(classes !=='' && trainer !==''){
            if(mont !=='' && anul !==''){
                axios.put('http://localhost:3001/updateclass',{
            id:id,
            classes:classes,
            trainer:trainer,
            mont:mont,
            anul:anul
        }).then((response) => {
            alert ("updated")
            history.push('/Adminclassavail')
        });
            } else {alert('Every Field is required')}
        } else {alert('Every Field is required')}
     } 

  return (
    <div>
        <form action='/Adminclassavail'>
                <div className="form-row">
                    <div className="form-group">
                        <label> Name:
                        <div className="round">
                            <input type="text" className="eee" placeholder='Name' onChange={(event)=>{setClasses(event.target.value)}} required></input></div>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>Trainer:
                        <div className="round">
                            <input type="text" className="fff" placeholder='Trainer' onChange={(event)=>{settrainer(event.target.value)}} required></input></div>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>Monthly fees:
                        <div className="round">
                            <input type="text" className="fff" placeholder='Monthly Fees' onChange={(event)=>{setMont(event.target.value)}} required></input></div>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>Annual fees:
                        <div className="round">
                            <input type="text" className="fff" placeholder='Annual fees' onChange={(event)=>{setAnul(event.target.value)}} required></input></div>
                        </label>
                    </div>

                </div>
                <div className="">
                    <div className="form-group3">
                        {/* <Link to="/Adminclassavail"> */}
                        <button type='submit' className="editclass"  onClick={updateclass} >Edit</button>
                        {/* </Link> */}
                    </div>
                </div>
            </form>
    </div>
  )
}

export default Updateclass
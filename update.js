import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios' 
// import './style/update.css'

const Update = () => {

    const {id } = useParams();

    const [name, setName] = useState("")

    const [email, setEmail] = useState("")

    const [phone_no, setPhone_no] = useState(0)

    const updatename =() =>{
        axios.put('http://localhost:3001/update',{
            id:id,
            name:name,
            email:email,
            phone_no:phone_no
        }).then((response) => {
            alert ("updated")
        })

    }

  return (
    <div>
        
        <form>
                <div className="form-row">
                    <div className="form-group">
                        <label> Name:
                            <input type="text" classname="ClientId" onChange={(event)=>{setName(event.target.value)}}></input>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>Email_id:
                            <input type="email" classname="ClientId" onChange={(event)=>{setEmail(event.target.value)}}></input>
                        </label>
                    </div>

                    <div className="form-group">
                        <label>Phone Number:
                            <input type="number" classname="ClientId" onChange={(event)=>{setPhone_no(event.target.value)}}></input>
                        </label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group3">
                        <button onClick={updatename} >Edit</button>
                    </div>
                </div>
            </form>

    </div>
  )
}

export default Update
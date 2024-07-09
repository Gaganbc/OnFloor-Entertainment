import React from 'react'
import { Table } from 'react-bootstrap'
import "./Adminuserdetails.css";
import { useState, useEffect } from 'react';
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';


export const Admindemoclass = () => {


  const [data, setData] = useState([]);

  const deleterecord = (e, id) =>{
    
    Axios.delete(`http://localhost:3001/deletedemo/${id}`).then((response) =>{
        alert("deleted")    
    })     
  }

  useEffect(() => {
    Axios.get('http://localhost:3001/getdemo').then((res) => {
        console.log(res);
        setData(res.data);
        console.log(data);
    });
}, [data]);

  return (
    <div><a className='Rg' href='Adminhomepage'><button className='rgr'>Back</button></a>
    <div className='userdetails'>
      <div className='UD'><h1 >Democlass</h1></div>
        <Table border={3} striped bordered hover className='tb'>
            <thead className='tb1'>
                <th>Name</th>
                <th>Email id</th>
                <th>Phone No</th>
                <th>Demo class</th>
                <th>Date</th>
                <th>Timings</th>
                <th>Delete</th>
            </thead>
            {
              data.map(clientdata => {
                return(
                  <tbody className="tb1">
                  <td>{clientdata.name}</td>
                  <td>{clientdata.email}</td>
                  <td>{clientdata.phone}</td>
                  <td>{clientdata.aclass}</td>
                  <td>{clientdata.dt}</td>
                  <td>{clientdata.tym}</td>
                  <td>
                    <button onClick={(e) => deleterecord(e,clientdata.id)}>Delete</button>
                  </td>
                </tbody>
                )
              })
            }
           
            
        </Table>
    </div>
    </div>
  )
}
export default Admindemoclass


import React from 'react'
import { Table } from 'react-bootstrap'
import "./Adminuserdetails.css";
import { useState, useEffect } from 'react';
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';


export const Adminregistration = () => {

  const [data, setData] = useState([]);

  const deleterecord = (e, id) =>{
    
    Axios.delete(`http://localhost:3001/deleteadmis/${id}`).then((response) =>{
        alert("deleted")    
    })     
  }

  useEffect(() => {
    Axios.get('http://localhost:3001/getadmis').then((res) => {
        console.log(res);
        setData(res.data);
        console.log(data);
    });
}, [data]);

  return (
    <div><a className='Rg' href='Adminhomepage'><button className='rgr'>Back</button></a>
    <div className='userdetails'>
      <div className='UD'><h1 >Admission Details</h1></div>
        <Table border={3} striped bordered hover className='tb'>
            <thead className='tb1'>
                <th>UserName</th>
                <th>Email id</th>
                <th>Phone No</th>
                <th>classes-opted</th>
                <th>Fee structure</th>
                <th>From</th>
                <th>To</th>
                <th>Action</th>
            </thead>
            {
              data.map(clientdata => {
                return(
                  <tbody className="tb1">
                  <td>{clientdata.name}</td>
                  <td>{clientdata.email}</td>
                  <td>{clientdata.phone}</td>
                  <td>{clientdata.aclass}</td>
                  <td>{clientdata.fee}</td>
                  <td>{clientdata.afrom}</td>
                  <td>{clientdata.ato}</td>

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
export default Adminregistration


import React from 'react'
import { Table } from 'react-bootstrap'
import "./Adminuserdetails.css";
import { useState, useEffect } from 'react';
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';


export const Adminclassavail = () => {

  const history = useNavigate();

  const [data, setData] = useState([]);

  const deleterecord = (e, id) =>{
    
    Axios.delete(`http://localhost:3001/deleteclass/${id}`).then((response) =>{
        alert("deleted")    
    })     
  } 

  useEffect(() => {
    Axios.get('http://localhost:3001/getclass').then((res) => {
        console.log(res);
        setData(res.data);
        console.log(data);
    });
}, [data]);

  return (
    <div>
    <a className='Rg' href='Adminhomepage'><button className='rgr'>Back</button></a>
    <div className='userdetails'>
      <div className='UD'><h1 >Classes Available</h1></div>


<Link to="/Addclasses">
      <button className="AC">Add Classes</button></Link>



        <Table border={3} striped bordered hover className='tb'>
            <thead className='tb1'>
                <th>Sl.No</th>
                <th>Classes</th>
                <th>Trainer</th>
                <th>monthly</th>
                <th>annually</th>
                <th>update</th>
                <th>Delete</th>
            </thead>
            {
              data.map(clientdata => {
                return(
                  <tbody className="tb1">
                  <td>{clientdata.id}</td>
                  <td>{clientdata.classes}</td>
                  <td>{clientdata.trainer}</td>
                  <td>Rs.{clientdata.mont}/-</td>
                  <td>Rs.{clientdata.anul}/-</td>
                  <td>
                    <button onClick={() => history(`/updateclass/${clientdata.id}`)}>Edit</button>
                  </td>
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
export default Adminclassavail


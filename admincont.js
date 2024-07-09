import React from 'react'
import { Table } from 'react-bootstrap'
import "./Adminuserdetails.css";
import { useState, useEffect } from 'react';
import Axios from 'axios'


export const Admin = () => {


  const [data, setData] = useState([]);

  const deleterecord = (e, id) =>{
    
    Axios.delete(`http://localhost:3001/deletecont/${id}`).then((response) =>{
        alert("deleted")    
    })     
  }

  useEffect(() => {
    Axios.get('http://localhost:3001/getcontact').then((res) => {
        console.log(res);
        setData(res.data);
        console.log(data);
    });
}, [data]);

  return (
    <div><a className='Rg' href='Adminhomepage'><button className='rgr'>Back</button></a>
    <div className='userdetails'>
      <div className='UD'><h1 >Message you received</h1></div>  
        <Table border={3} striped bordered hover className='tb'>
            <thead className='tb1'>
              <th>Id</th>
                <th>UserName</th>
                <th>Email Id</th>
                <th>message</th>
                <th>Delete</th>
            </thead>
            {
              data.map(clientdata => {
                return(
                  <tbody className="tb1">
                  <td>{clientdata.id}</td>
                  <td>{clientdata.name}</td>
                  <td>{clientdata.email}</td>
                  <td>{clientdata.message}</td>

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
export default Admin


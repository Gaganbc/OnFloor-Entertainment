import React from 'react'
import { Table } from 'react-bootstrap'
import "./Adminuserdetails.css";
import { useState, useEffect } from 'react';
import Axios from 'axios'


export const Adminpay = () => {


  const [data, setData] = useState([]);


  useEffect(() => {
    Axios.get('http://localhost:3001/getpay').then((res) => {
        console.log(res);
        setData(res.data);
        console.log(data);
    });
}, [data]);

  return (
    <div><a className='Rg' href='Adminhomepage'><button className='rgr'>Back</button></a>
    <div className='userdetails'>
      <div className='UD'><h1 >Payment</h1></div>  
        <Table border={3} striped bordered hover className='tb'>
            <thead className='tb1'>
              <th>Id</th>
                <th>UserName</th>
                <th>Payment mode</th>
                <th>phone number</th>
                <th>UPI</th>
            </thead>
            {
              data.map(clientdata => {
                return(
                  <tbody className="tb1">
                  <td>{clientdata.id}</td>
                  <td>{clientdata.name}</td>
                  <td>{clientdata.mode}</td>
                  <td>{clientdata.phone_no}</td>
                  <td>{clientdata.upi}</td>

                </tbody>
                )
              })
            }
           
            
        </Table>
    </div>
    </div>
  )
}
export default Adminpay


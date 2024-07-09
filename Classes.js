import React from 'react'
import '../Component/Classes.css'
 import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import { useState, useEffect } from 'react';

import Axios from 'axios'


const Classes = () => {


  const [data, setData] = useState([]);


  useEffect(() => {
    Axios.get('http://localhost:3001/getclass').then((res) => {
        console.log(res);
        setData(res.data);
        console.log(data);
    });
}, [data]);

  return (
    <div>
    <div className='heading'>
      <div className='CA'><h1 >Classes Available</h1></div>  
        <Table border={3} striped bordered hover className='tb'>
            <tr className='tb1'>
                <th>Sl.No</th>
                <th>Classes</th>
                <th>Trainer</th>
                <th>Fees(Monthly)</th>
                <th>Fees(Annually)</th>
                <th>class</th>
            </tr>
            {
              data.map(clientdata => {
                return(
            <tr className='tb1'>
                  <td>{clientdata.id}</td>
                  <td>{clientdata.classes}</td>
                  <td>{clientdata.trainer}</td>
                  <td>Rs.{clientdata.mont}/-</td>
                  <td>Rs.{clientdata.anul}/-</td>
                <td><a className='Democlasses' href='Democlass'><button className='dc'>Demo Class</button></a> </td>
            </tr>
             )
            })
          }
        </Table>

        <a className='Rg' href='Admission'><button className='rgr'>Register</button></a>
        <a className='Rg' href='Mainpage'><button className='rgr'>Back</button></a>
    </div>
    </div>
  )
}

export default Classes
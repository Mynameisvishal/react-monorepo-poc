import React,{useState,useEffect} from 'react'
import axios from 'axios';
import donationListHeader from '../constants/donationListHeader';
import {Button} from '@poc/func-component';

const Employees = () => {

    const [paymentData, setPaymentData] = useState([]);

    useEffect(async()=>{
        getAllData();
    },[])

    const getAllData= ()=>{
        axios.get('http://localhost:5000/donationList').then((response)=>{
            console.log(response);
            setPaymentData(response.data);
        })
    }

    return (
        <div className="container">
            <table className="table table-striped mt-5">
          <thead>
            <tr>
              {donationListHeader.map((item, key) => (
                <th key={key}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paymentData?.map((data, key) => (
              <tr key={key}>
                {Object.values(data).map((item, key) => (
                  <td
                    key={key}
                    style={{
                      color: `${key === 6 && "blue"}`,
                      cursor: `${key === 6 && "pointer"}`,
                    }}
                  >
                    {item}
                  </td>
                ))}
              </tr>
            ))} 
          </tbody>
        </table>
        <Button className="btn btn-primary mt-2 mx-3" value="Get Certificate"/> 
        </div>
    )
}

export default Employees


import React,{useState,useEffect} from "react";

import axios from "axios";



const Orders = () => {
  let [SellOrders,setSellOrders] = useState([]);
     useEffect(()=>{
         axios.get("https://zerodhabackend-m6gu.onrender.com/SellOrders").then((res)=>{
          console.log(res)
          setallOrders(res.data)
         })
     },[]);

   
  return (
    <>
      <h3 className="title">Orders ({SellOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Namet</th>
            <th>Qty.</th>
            <th>Price</th>
          </tr>
          {SellOrders.map((stock,index)=>{
           

            return(
              <tr key={index} >
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price}</td>
              
               
              </tr>
            )
          })}
        </table>
      </div>


    
    </>
  );
};

export default Orders;
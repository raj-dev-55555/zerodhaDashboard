// import React from "react";
// import { Link } from "react-router-dom";

// const Orders = () => {
//   return (
//     <div className="orders">
//       <div className="no-orders">
//         <p>You haven't placed any orders today</p>

//         <Link to={"/"} className="btn">
//           Get started
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Orders;

import React,{useState,useEffect} from "react";

import axios from "axios";


// import { holdings } from "../data/data";

const Orders = () => {
  let [allOrders,setallOrders] = useState([]);
     useEffect(()=>{
         axios.get("https://zerodhabackend-m6gu.onrender.com/allOrders").then((res)=>{
          console.log(res)
          setallOrders(res.data)
         })
     },[]);

   
  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Namet</th>
            <th>Qty.</th>
            <th>Price</th>
          </tr>
          {allOrders.map((stock,index)=>{
           

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
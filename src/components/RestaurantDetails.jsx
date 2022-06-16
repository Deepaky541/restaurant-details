import React from 'react'
import "./Restaurant.css"
import { useState } from 'react';
import { useEffect } from 'react';


export const RestaurantDetails = ({data}) => {
  const [pay, setpayment] = useState("");
 useEffect(() => {
     if (
       data.payments.card === true &&
       data.payments.cash === true &&
       data.payments.upi === true
     ) {
       setpayment("Accepts all types of payments")
     } else if (data.payments.card === true && data.payments.cash === true) {
       setpayment("Accepts card and cash payments");
     } else if (data.payments.cash === true && data.payments.upi === true) {
       setpayment("Accepts cash and upi payments");
     } else if (data.payments.card === true && data.payments.upi === true) {
       setpayment("Accepts card and upi payments");
     } else if (data.payments.card === true) {
       setpayment("Accepts card payments only");
     } else if (data.payments.cash === true) {
       setpayment("Accepts cash payments only");
     } else if (data.payments.upi === true) {
       setpayment("Accepts upi payments only");
     }
 }, [])
 
  
  
 
  
    return (
        <div className="card">
          <div className="image">
            <img src={data.url} alt="" />
          </div>
          <div className="title">
            <h1>{data.title}</h1>
            <p>{data.category}</p>
            <p>Cost Rs. {data.cost} for one</p>
            <div className="min">
              <p>Min Rs{data.min}</p>
              <div className="list">
                <ul>
                  <li>
                    <p>Up to {data.time} min</p>{" "}
                  </li>
                </ul>
              </div>
            </div>
            <p>{pay}</p>
          </div>
          <div className="section3">
            <h3>{data.ratings}</h3>
            <p>{data.votes} votes</p>
            <p>{data.reviews} reviews</p>
          </div>
        </div>
    );
}

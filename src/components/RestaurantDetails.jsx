import React from 'react'
import "./Restaurant.css"


export const RestaurantDetails = ({data}) => {
  return (
    <div className="card">
      <div className='image'>
        <img src={data.url} alt="" />
      </div>
      <div className='title'>
        <h1>{data.title}</h1>
        <p>{data.category}</p>
        <p>Cost Rs. {data.cost} for one</p>
        <div className='min'>
         <p>Min Rs{data.min}</p> 
         <div className='list'>
          <ul>
            <li><p>Up to {data.time} min</p> </li>
          </ul>
          </div>
        </div>
        <p>{data.payments}</p>
      </div>
      <div className='section3'>
        <h3 >{data.ratings}</h3>
        <p>{data.votes} votes</p>
        <p>{data.reviews} reviews</p>
      </div>
     
    </div> 
  );
}

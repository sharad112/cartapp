import React from 'react';
import { NavLink } from 'react-router-dom';
import data from "./Data";

const Product = () => {
  
 return(
    <div className='wrap'>
        {data.map((value)=>
        {
            return(
                <div className='card'>
       <div className='img'>
           <img src={value.image}/>
       </div>

       <div className='head'>
           <h1>{value.title}</h1>
       </div>

       <div className='price'>
           <p> {value.price}</p>
           <p> {value.rating.rate}</p>
       </div>

       <div className='desc'>
                {value.description}
       </div>

       <div className='buttons'>
           <button className='learn-more'><NavLink to={`/product/${value.id}`}>buy </NavLink></button>
       </div>
   </div>
            )
        })} 
    </div>
 )
 
}

export default Product
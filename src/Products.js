import React from 'react'
import {useParams} from 'react-router-dom';
import data from './Data';
const Products = () => {
   
    const {id}=useParams();
    console.log(data[id]);
    const display=(value)=>
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
     
   
        </div>
        )
    }
    
  return (
    <div> 

{display(data[id-1])}
    </div>
  )
}

export default Products
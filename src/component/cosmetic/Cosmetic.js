import React from 'react';
import { addToDb, removeDb } from '../utilities/FakeDb';
import './cosmetic.css'

const Cosmetic = (props) => {
  
  const {name,price,id}=props.cosmetic;

  const addToCart=(id)=>{
    addToDb(id);
  }

  const removeCart=(id)=>{
    removeDb(id);
  }

    return (
        <div className='product'>
            <h4>id: {id}</h4>
            <h1>buy {name}</h1>
            <h2>only for ${price}</h2>
            <button onClick={()=>addToCart(id)}>Add to cart: shortcut</button>
            <button onClick={()=> removeCart(id)}>Remove Cart</button>
            
        </div>
    );
};

export default Cosmetic;
import React from 'react';
import { addToDb } from '../utilities/FakeDb';
import './cosmetic.css'

const Cosmetic = (props) => {
  
  const {name,price,id}=props.cosmetic;

  const addToCart=(id)=>{
    addToDb(id);
  }



    return (
        <div className='product'>
            <h4>id: {id}</h4>
            <h1>buy {name}</h1>
            <h2>only for ${price}</h2>
            {/* <button onClick={addCartPeremeter}>Add to cart</button> */}
            <button onClick={()=>addToCart(id)}>Add to cart: shortcut</button>
            
        </div>
    );
};

export default Cosmetic;
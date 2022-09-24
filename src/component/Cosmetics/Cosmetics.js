import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cosmetic from '../cosmetic/Cosmetic';
import  { add, multiply, sum } from '../utilities/Utilities';


const Cosmetics = () => {
    const [cosmetics,setCosmetics]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
    },[])

    
  
    return (
        <div>
            <h1>this is from Cosmetics</h1>
            {
                cosmetics.map(cosmetic=><Cosmetic cosmetic={cosmetic}
                key={cosmetic.id}></Cosmetic>)
            }
         
        </div>
    );
};

export default Cosmetics;
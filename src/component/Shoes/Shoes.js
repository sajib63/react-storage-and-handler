import React from 'react';
import { multiply } from '../utilities/Utilities';

const Shoes = () => {
    const first=50;
    const second=50;
    const result=multiply(first, second);
    return (
        <div>
            <h1>this is from shoes</h1>
            <p>total result: {result}</p>


        </div>
    );
};

export default Shoes;
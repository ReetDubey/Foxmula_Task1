import React, { useState } from 'react';

const Display = () => {

    const [num, setNum] = useState(0);
    const IncNum = () => {
        setNum(num+1);
    }
    const DecNum = () => {
        if(num > 0){
        setNum(num-1);
        }else{
            alert("Sorry, value can't be negative");
            setNum(0) 
        }
    }
    return(
        <>
        <div className='main'>
            <div className='card'>
                <h1> {num} </h1>
            
            </div>
			
			<div className='card'>
                
                <div className='btn'>
                <button onClick = {IncNum}>Click to Increment</button>
                
            </div>
            </div>
        </div>
        </>
    )
}

export default Display
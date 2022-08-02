import React, { useEffect, useState } from 'react';
import './style.css';
// import { Container } from './styles';

function PageNavigation({count = 1,cb}) {
    const [dotsArr, setDotsArr] = useState([])
    const [activeDot, setActiveDot] = useState(0)
   
const handleSelectDot = (value) =>{
    setActiveDot(value) 
}

   useEffect(() => {
    const arr = []
        for (let i=0; i < count; i++) {
              arr.push(i)
 
    } 
    setDotsArr(arr)
    },[count] )

  return (

    <div className='dotsContainer'>
    {dotsArr.map(e => <button style={activeDot===e?{backgroundColor:'#ee3325'}:null} onClick={()=>{return cb(e+1),handleSelectDot(e)} } className="circle"/> )}
    
    </div>
  )
}

export default PageNavigation;
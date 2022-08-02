import React,{useState} from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function DefaultButton({to,text}) {
  const [buttonColor, setButtonColor] = useState('#999999')
  const handleChangeColor = (e='disable') => {
if(e==='active'){
  setButtonColor('#ee3424')
}
else{
  setButtonColor('#999999')

}
  }
  return (

    <div className='buttonHeader'>
         <Link  className='buttonHeader' onMouseEnter={()=>handleChangeColor('active')} onMouseLeave={()=>handleChangeColor('disable')} style={{textDecoration:'none',color:buttonColor}} to={to}>  {text} </Link> 
    </div>
  )
}

export default DefaultButton;
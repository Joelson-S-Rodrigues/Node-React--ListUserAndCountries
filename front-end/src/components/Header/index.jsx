import React from 'react';
import './style.css'
import DefaultButton from '../defaultButton/index'
//import { Container } from './styles';

function Header() {
  return (
    <div className="headerContainer">
      <div className="headerContent"> 
   <h1><b className='Tdteste'>T</b>este</h1>
   <div className='menuHeader'>
    <div style={{marginRight:10}}> 
    <DefaultButton to='/' text='Users'/>

    </div>
    <div style={{marginRight:10}}>
    <DefaultButton to='/countries'  text='Countries'/>

    </div>
   </div>
   </div>
    </div>
  )
}

export default Header;
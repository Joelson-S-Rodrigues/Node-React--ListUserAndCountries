import React from 'react';
import './style.css'

// import { Container } from './styles';

function StyleDivCountries({coutryName,borderCount}) {
  
  return (
    <div className='styleDiv'>
       <div className='contentDiv'> 
        <h2 className='nome'>Nome: {coutryName}</h2>
        <h2 className='sobrenome' >Numero de fronteiras: {borderCount}</h2>
        </div>
    </div>
  )
}

export default StyleDivCountries;
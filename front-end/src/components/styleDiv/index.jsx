import React from 'react';
import './style.css'

// import { Container } from './styles';

function StyleDiv({name,surName,email,avatar}) {
  console.log(name,surName,email,avatar)
  return (
    <div className='styleDiv'>
       <div className='avatarDiv'> 
        <img src={avatar} className='avatar' ></img> 
        </div>
       <div className='contentDiv'> 
        <h2 className='nome'>Nome: {name}</h2>
        <h2 className='sobrenome' >Sobrenome: {surName}</h2>
        <h2 className='email'>Email: {email}</h2>
        </div>
    </div>
  )
}

export default StyleDiv;
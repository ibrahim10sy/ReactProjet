import React from 'react';
import './Connexion.css'

export default function Connexion() {
  return (
    <div className='ins'>
      <div className='container-conn'>
      <h1>Connexion</h1>
      <input type='text' placeholder='Email' /> 
      <input type='password' placeholder='Mot de passe' /> 
      <input className='btn-ins' type='button' value='Créer un compte'/> 
      </div>
    </div>
  )
}

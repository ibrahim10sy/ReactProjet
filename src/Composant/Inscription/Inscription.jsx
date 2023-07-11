import React from 'react'
import './Inscription.css'
import { Link, NavLink } from 'react-router-dom';

export default function Connexion() {
  return (
    <div className='ins'>
      <div className='container-ins'>
      <h1>Inscription</h1>
      <input type='text' placeholder='Nom' /> 
      <input type='text' placeholder='Prenom' /> 
      <input type='text' placeholder='Email' /> 
      <input type='password' placeholder='Mot de passe' /> 
      <input className='btn-ins' type='button' value='Créer un compte'/> 
      <p>Vous avez déjà un compte? <NavLink to="/connexion">Connecter-vous</NavLink></p>
      </div>
    </div>
  )
}

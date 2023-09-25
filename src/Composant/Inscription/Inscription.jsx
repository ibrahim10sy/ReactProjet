import React, { useState } from 'react';
import './Inscription.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default function Inscription() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [mdp, setMdp] = useState('');

  const handleInscription = () => {
    const formData = {
      nom: nom,
      prenom: prenom,
      email: email,
      mdp: mdp
    };

    axios.post('/api/inscription', formData)
      .then((response) => {
        console.log(response.data.message); // Affiche le message de succès du backend
        // Vous pouvez rediriger l'utilisateur vers une page de connexion ici ou afficher un message de succès, etc.
      })
      .catch((error) => {
        console.error(error.response.data.message); // Affiche le message d'erreur du backend en cas d'échec d'inscription
      });
  };

  return (
    <div className='ins'>
      <div className='container-ins'>
        <h1>Inscription</h1>
        <input type='text' placeholder='Nom' onChange={(e) => setNom(e.target.value)} />
        <input type='text' placeholder='Prenom' onChange={(e) => setPrenom(e.target.value)} />
        <input type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='Mot de passe' onChange={(e) => setMdp(e.target.value)} />
        <input className='btn-ins' type='button' value='Créer un compte' onClick={() => handleInscription()} />
        <p>Vous avez déjà un compte? <NavLink to="/connexion">Connectez-vous</NavLink></p>
      </div>
    </div>
  );
}

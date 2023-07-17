import React from 'react'
import { ListeProduits } from '../ListeProduits/liste'
import './Home.css';
import { NavLink } from 'react-router-dom';
import { ListeProduits2 } from '../ListeProduits/liste2';
import { useState } from 'react';


export default function Home() {
  const [voirPlus, setVoirPlus] = useState(false);

  const handleClick = () => {
    setVoirPlus(true);
  };
  return (
    <div>
      <div>

        <div className='home-head'>
          {/*<img src='/assets/font1.JPEG'  style={{ width: '600px' }}/>*/}
          <div className="information">

            <h1>Bienvenue sur <span>IKABOUTIKII</span></h1>

            <h3>Les meilleures sont chez nous.</h3>

            <p className='p-h'>
              Faites vos achats en ligne
              en toute confiance.  <br />
              La meilleures sélection de
              produits à portée de clic
            </p>
            <div className='explore'>
              <a href="#exp">Explorer maintenant</a>
            </div>
          </div>
        </div>
       
        <div className='C-offre'>
          <box-icon className="low" name='low-vision'></box-icon>
          <p id='p-offre'>Offres du jour</p></div>
          <div className='trait'></div>
      </div>
      <div >
        <div className='container-home' >
          {ListeProduits.map((produit, id) => (
            <div key={id} className='container-h'>
              <img src={produit.imgSrc} alt="" className='img' />
              <p className="titre">{produit.title}</p>
              <p className='prix'>{produit.prix}</p>
              <div className='btn-home'>
                <NavLink to={`/details/${produit.id}`} className='btn-primary'>Acheter</NavLink></div>

            </div>

          ))}
        </div>



        {voirPlus && (<div className='container-home' >
          {ListeProduits2.map((produit, id) => (
            <div key={id} className='container-h'>
              <img src={produit.imgSrc} alt="" className='img' />
              <p className="titre">{produit.title}</p>
              <p className='prix'>{produit.prix}</p>
              <div className='btn-home'>
                <NavLink to={`/details/${produit.id}`} className='btn-primary'>Acheter</NavLink></div>

            </div>
          ))}
        </div>)}
        <div className="next-page">
          <button className='btn-primary' onClick={() => setVoirPlus(!voirPlus)}>
            {voirPlus ? "Voir moins" : "Voir plus"}
          </button>
        </div>
        <br />
      </div>
    </div>
  )
}

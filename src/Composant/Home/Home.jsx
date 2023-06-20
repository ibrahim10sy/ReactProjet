import React from 'react'
import { ListeProduits } from '../ListeProduits/liste'
import'./Home.css';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div>
    <div>
   
    <div className='home-head'>
   <img src='/assets/font.png'  style={{ width: '600px' }}/>
      <div className="information">

        <h1>Bienvenue sur <span>IKABOUTIKII</span></h1>

        <h3>Les meilleures sont chez nous.</h3>

        <p className='p-h'>
        Faites vos achats en ligne
        en toute confiance. 
        La meilleures sélection de  
        produits à portée de clic
        </p>
      <div className='explore'>
        <a  href="#exp">Explorer maintenant</a>
    </div>
    </div>
    </div>
    <div className='trait'></div>
    <div className='C-offre'>
    <box-icon className="low" name='low-vision'></box-icon>
    <p id='p-offre'>Offres du jour</p></div>
</div>
<div >
    <div className='container-home' >
    {ListeProduits.map((product,id) => (
      <div key={id} className='container-h'>
        <img src={product.imgSrc} alt="" className='img' />
        <p className="titre">{product.title}</p>
        <p className='prix'>{product.prix}</p>
        <div className='btn'>
        <NavLink to={`/details/${product.id}`} className='btn-primary'>Acheter</NavLink></div>
       
      </div>
     
    ))}
  </div>
    </div>
    </div>
  )
}
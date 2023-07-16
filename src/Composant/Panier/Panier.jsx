import React from 'react'
import './Panier.css';
import { UseSelector } from 'react-redux/es/hooks/useSelector';
import { ListeProduits } from '../ListeProduits/liste';
import { useParams } from 'react-router-dom';


export default function Pannier() {
  const { id } = useParams();
  const product = ListeProduits.find((product) => product.id == id);
  return (
    <div className='container-pannier'>
    <div className='container-details'>
    <div className='img-de'>
      <img src={product.imgSrc} alt='image' className='img-D' />
    </div>
    <div className='details'>
      <p className='titre'>{product.title}</p>
      <p className='desc'>{product.desc}</p>
      <p className='prix'>Prix : {product.prix}</p>
      <p className='taille'>Taille :</p>
      
      <p className='taille'>
        Quantité : <input type='number' className='quantite' />
      </p>
      
    </div>
  </div>
    </div>
  )
}

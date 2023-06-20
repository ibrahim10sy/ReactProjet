import React from 'react'
import { useParams } from 'react-router-dom';
import { ListeProduits } from '../ListeProduits/liste';
import './Details.css';

export default function Details() {

    const { id } = useParams();

    const product = ListeProduits.find((product => product.id == id));

    if(!product){
        return <div>Produit non trouvé</div>
    }
  return (
    <div className='details'>
      <h1>Détail du {product.title}</h1>
      <div className='container-details'>
            <div className='img-d'>
                <img src={product.imgSrc} alt='image' className='img-D' />
            </div>
            <div className='details'>
                <p className='titre'>{product.title}</p>
                <p className='desc'>{product.desc}</p>
                <p className='prix'>Prix : {product.prix}</p>
                <p className='taille'>Taille :</p>
                <select>
                <option  className='option' value={37}>37</option>
                <option className='option' value={38}>38</option>
                <option className='option' value={39}>39</option>
                <option className='option' value={40}>40</option>
                <option className='option' value={41}>41</option>
                </select>
                <p className='taille'>Quanité : <input type='number' className='quantite' /></p>
                <div className='btn'>
                <button className='btn-second'>Ajouter au pannier</button>
                <button className='second'>Acheter maintenant</button>
                </div>
            </div>
      </div>
    </div>
  )
}

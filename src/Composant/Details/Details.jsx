import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { ListeProduits } from '../ListeProduits/liste';
import './Details.css';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';

export default function Details() {
  const { id } = useParams();
  const produit = ListeProduits.find((produit) => produit.id == id);
  const dispatch = useDispatch();

  const ajouterAuPanier = (produit) => {
    dispatch(addCart(produit));
  };

  if (!produit) {
    return <div>Produit non trouvé</div>;
  }

  return (
    <div className='details'>
      <h1>Détail du {produit.title}</h1>
      <div className='trait'></div>
      <div className='container-details'>
        <div className='img-de'>
          <img src={produit.imgSrc} alt='image' className='img-D' />
        </div>
        <div className='details'>
          <p className='titre'>{produit.title}</p>
          <p className='desc'>{produit.desc}</p>
          <p className='prix'>Prix : {produit.prix}</p>
          <p className='taille'>Taille :</p>
          <select>
            <option className='option' value={37}>
              37
            </option>
            <option className='option' value={38}>
              38
            </option>
            <option className='option' value={39}>
              39
            </option>
            <option className='option' value={40}>
              40
            </option>
            <option className='option' value={41}>
              41
            </option>
          </select>
          <p className='taille'>
            Quantité : <input type='number' className='quantite' />
          </p>
          <div className='btn-details'>
            <button className='btn-d' onClick={() => ajouterAuPanier(produit)}>
              Ajouter au panier
            </button>
            <NavLink to='/pannier' className='btn btn-outline-dark'>
              Voir le panier
            </NavLink>

          </div>
        </div>
      </div>
    </div>
  );
}
 
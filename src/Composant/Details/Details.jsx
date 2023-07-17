import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { ListeProduits } from '../ListeProduits/liste';
import './Details.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';

export default function Details() {
  const { id } = useParams();
  const produit = ListeProduits.find((produit) => produit.id == id);
  const dispatch = useDispatch();

  const ajouterAuPanier = (produit) => {
    dispatch(addToCart(produit));
  };

  if (!produit) {
    return <div>Produit non trouvé</div>;
  }

  return (
    <div className='details'>
      <h1>Détail du <span>produit</span></h1>
      <div className='trait'></div>
      <div className='container-details'>
        <div className='img-de'>
          <img src={produit.imgSrc} alt='image' className='img-D' />
        </div>
        <div className='details-content'>
          <p className='titre'>{produit.title}</p>
          <p className='desc'>{produit.desc}</p>
          <p className='prix'>Prix : {produit.prix}</p>
          <div className='select-container'>
            <p className='taille'>Taille :</p>
            <select className='taille-select'>
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
          </div>
          <div className='quantite-container'>
            <p className='taille'>
              Quantité : <input type='number' className='quantite' />
            </p>
          </div>
          <div className='btn-container'>
            <button className='btn-d' onClick={() => ajouterAuPanier(produit)}>
              Ajouter au panier
            </button>
            <NavLink to='/panier' className='btn btn-outline-dark'>
              Voir le panier
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

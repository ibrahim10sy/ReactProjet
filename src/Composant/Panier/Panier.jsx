import React from 'react';
import { useSelector } from 'react-redux';
import cartReducer from '../redux/cartReducer';
import './Panier.css'
import { useDispatch } from 'react-redux';
import { delToCart } from '../redux/actions';

export default function Panier() {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const supprimerDuPanier = (produit) => {
    dispatch(delToCart(produit));
  };

  return (
    <div className='panier'>
      <h1>Votre-<span>Panier</span></h1>
      <div className='trait'></div>
      {cartItems.map((produit,product) => (
        <div className='cart-container' key={produit.id}>
          <ul class="cart-items">
            <li class="cart-item">
              <img src={produit.imgSrc} alt="mon image" />
              <div class="item-details">
                <h3>{produit.title}</h3>
                <p>{produit.desc}</p>
                <span class="item-price">{produit.prix}</span>
                <div class="quantity">
                  <input type="number" min="1" value="1" />
                  <button class="btn-remove" onClick={() => supprimerDuPanier(produit)}>Supprimer</button>
                </div>
              </div>
            </li>
          </ul>
          <div class="cart-total">
            <span>Total: </span>
            <span class="total-price">{produit.prix} FCFA</span>
          </div>
          <button class="btn-checkout">Payer Maintenant</button>


        </div>


      ))}

    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';
import './ProduitDetails.css'

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const dispatch = useDispatch();

  const ajouterAuPanier = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (response.ok) {
          const productData = await response.json();
          setProduct(productData);
        } else {
          console.error('Erreur de chargement des données du produit');
        }
      } catch (error) {
        console.error('Erreur lors de la requête API', error);
      }
    };

    getProduct();
  }, [id]);

  return (
    <div className='product-details'>
      <h1>Détail du <span>produit</span></h1>
      <div className='trait'></div>
      <div className='container-details'>
        <div className='image-container'>
          <img src={product.image} alt='image' className=' product-image ' />
        </div>
        <div className='details-container'>
          <h5 className='title'>{product.title}</h5>
          <p className='description'>{product.description}</p>
          <p className='price'>Prix : {product.price}</p>
          <p className='size'>Taille :</p>
          <select className='size-select'>
            <option value={37}>37</option>
            <option value={38}>38</option>
            <option value={39}>39</option>
            <option value={40}>40</option>
            <option value={41}>41</option>
          </select>
          <div className="quantity-container">
            <label>Quantité </label>
            <input type="number" min="1" defaultValue="1" />
          </div>
          <br />
          <div className='buttons-container'>
            <button className='add-to-cart-button' onClick={() => ajouterAuPanier(product)}>
              Ajouter au panier
            </button>
            <NavLink to='/panier' className='view-cart-button btn btn-outline-dark'>
              Voir le panier
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

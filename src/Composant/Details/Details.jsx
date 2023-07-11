import React from 'react'
import { useParams } from 'react-router-dom';
import { ListeProduits } from '../ListeProduits/liste';
import './Details.css';
import { NavLink } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addCart } from '../redux/action';

export default function Details() {

    const { id } = useParams();

    const product = ListeProduits.find((product => product.id == id));

    if(!product){
        return <div>Produit non trouvé</div>
    }

    // const dispatch = useDispatch();
    // const addProduct = (product) => {
    //   dispatch(addCart(product));
    // }
  return (
    <div className='details'>
      <h1>Détail du {product.title}</h1>
      <div className='trait'></div>
      <div className='container-details'>
            <div className='img-de'>
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
                <div className='btn-details'>
                 <button className="btn-d" >Ajouter au panier</button>
                  <NavLink to="/pannier" className="btn btn-outline-dark">Voir le panier</NavLink>
                </div>

            </div>
      </div>
    </div>
  )
}

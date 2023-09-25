import React, { useState, useEffect } from 'react';
import'./Produits.css'
import {NavLink} from 'react-router-dom';

// import { useParams } from 'react-router-dom';

const Products = ({ filterText }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  //const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
     //setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
       // setLoading(false);
        console.log(filter);
      }
    };

    getProducts();

    return () => {
      componentMounted = false;
    };
  }, []);

 
    return (
      <div>
      <h1>Nos<span>-Produits</span></h1>
      <div className='trait'></div>
        <div className='buttons'>
          <button className='btn-primary'>Tout</button>
          <button className='btn-primary'>Pour Homme</button>
          <button className='btn-primary'>Pour femme</button>
          <button className='btn-primary'>Accessoire</button>
          <button className='btn-primary'>Electronique</button>
        </div>
        <div className='product-cards'>
        
          {filter.map((product) => {
            if (product.title.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
              return null;
            } else {
              return (
                <div className='product-card' key={product.id}>
                  <img src={product.image} className='product-images' alt={product.title} />
                  <div className='product-details'>
                    <h5 className='product-title'>{product.title.substring(0, 12)}</h5>
                    <p className='product-price'>{product.price}FCFA</p>
                   
                    <NavLink to={`/produitdetails/${product.id}`} className='btn-primary'>Acheter</NavLink>

                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  };


export default Products;

import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import { NavLink } from "react-router-dom";

// import Store from './redux/store';

//import skeleton from './react-loading-skeleton';

const Product = () =>{

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const[loading, setLoading] = useState(false);
  
   
    

    useEffect(() => {
        const getProduct = async () => {
             setLoading(true);
             const response = await fetch('https://fakestoreapi.com/products/${id}');
             setProduct(await response.json()); 
             setLoading(false);
        }
       getProduct();
      }, [])

     const Loading = () =>{
        return(
          <div>
          
          <div className="col-md-6">
            <skeleton height={400} />
          </div>

          
          </div>
        )
      } 
      const ShowProduct = () =>{
        return(
          <div>
              <div className="col-md-6">
              <img src={product.image}  alt={product.title} height="400px" width="400px" />
              </div>
              <div className="col-md-6">
              <h4 className="text-uppercase text-black-50">
                {product.category}
              </h4>
              <h1 className="display-5">{product.title}</h1>
              <p className="lead fw-bolder">
                Rating {product.rating && product.rating.rate}
                <i className="fa fa-star"></i>
              </p>
              <h3 className="display-6 fw-bolde my-4">{product.price}FCFA</h3>
               <p className="lead">{product.description}</p>
               <button className="btn btn-outline-dark px-4 py-2">Ajouter au panier</button>
               <NavLink  to="/pannier " className="btn btn-outline-dark">Voir le panier</NavLink>
         </div>
        </div>
        )
      }

      return (
        <div>
              <div className="container py-5">
              <div className="row py-4 ">
              <h1>Détails du {product.title} </h1>
              <div className='trait'></div>
                  {loading ? <Loading /> : <ShowProduct/>}
              </div>   
              </div>   
        </div>
      )


    }
  export default Product;
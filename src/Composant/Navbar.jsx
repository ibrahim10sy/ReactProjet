import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addToCart } from './redux/actions';

export default function Navbar({ filterText, onFilterTextChange }) {
//  const state = useSelector((state) => state.cartItems);
 const cartItems = useSelector((state) => state.cartItems);

  return (
    <div>
      <div className='entete'>
        <div className='entete-con'>
          <div className='tel'>
            <box-icon name='phone' type='solid' animation='tada'></box-icon>
            <p>+223 00 00 00 00</p>
          </div>
          <div className='tel'>
            <box-icon name='mail-send' flip='horizontal'></box-icon>
            <p>ikaboutiki@gmail.com</p>
          </div>
        </div>
        <div className='tel'>
          <box-icon name='instagram-alt' type='logo' flip='horizontal' color='#1b3358'></box-icon>
          <box-icon name='facebook-circle' type='logo' color='#1b3358'></box-icon>
          <box-icon name='twitter' type='logo' color='#1b3358'></box-icon>
        </div>
        <div className='tel'>
          <p>info</p>
          <box-icon name='info-circle' type='solid' color='#1b3358'></box-icon>
        </div>
      </div>

      <div className='header-one'>
        <div className='logo-div'>
          <img src='/logo/logo.png' className='logo' style={{ width: '40px' }} />
          <p>boutiki</p>
        </div>
        <input
          type='search'
          className='inpt'
          placeholder='Recherche sur ikaboutiki...'
          value={filterText}
          onChange={(e) => onFilterTextChange(e.target.value)}
        />
        <div className='connexion'></div>

        <div className='con'>
          <NavLink to='/connexion'>Connexion</NavLink>
        </div>
        <div className='media'>
          <div className='md-s'>
            <NavLink to='/panier'>
              <i className='bx bxs-cart-alt'></i>
              <span className='ncard'>{cartItems.length}</span>
            </NavLink>
          </div>
        </div>
        <div className='md-s'>
          <NavLink to='/inscription'>
            <i className='bx bxs-user'></i>
          </NavLink>
        </div>
        <div className='md-s'>
          <NavLink to=''>
            <box-icon name='user' type='solid' flip='horizontal'></box-icon>{' '}
          </NavLink>
          <div className='relative'>
            {/* <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              className="w-10 min-w-[40px] h-10 min-h[40px] drop-shadow-xl cursor-pointer rounded-full"
              alt="userprofile"
              onClick={login}
            /> */}
          </div>
        </div>
      </div>

      <div className='header-two'>
        <div className='cat'>
          <select name='Categorie' value='categorie' id=''>
            <option value='Pour homme'>Catégories</option>
            <option value='Pour homme'>Pour homme</option>
            <option value='Pour femme'>Pour femme</option>
            <option value='Pour enfant'>Pour enfant</option>
          </select>
          <a href='#'>Meilleurs produits</a>
        </div>
        <div className='head'>
          <ul className='NavLink'>
            <Link className='NavLink' to='/'>
              Accueil
            </Link>
            <Link className='NavLink' to='/produits'>
              Produits
            </Link>
            <Link className='NavLink' to='/apropos'>
              À propos
            </Link>
            <Link className='NavLink' to='/service'>
              Services
            </Link>
            <Link className='NavLink' to='/contact'>
              Contacts
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

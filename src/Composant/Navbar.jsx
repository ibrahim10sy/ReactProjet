import { Button } from 'bootstrap'
import { BoxIcon } from 'boxicons'
import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Navbar({filterText,onFilterTextChange}) {
  return (
    <div>
   
    <div className='entete'>
        <div className='entete-con'>
        <div className='tel'>
        <box-icon name='phone' type='solid' animation='tada' ></box-icon>
        <p>+223 00 00 00 00</p>
        </div>
        <div className='tel'>
        <box-icon name='mail-send' flip='horizontal' ></box-icon>
        <p>ikaboutiki@gmail.com</p>
        </div>
    </div>
    <div className='tel'>
    <box-icon name='instagram-alt' type='logo' flip='horizontal' color='#1b3358' ></box-icon>
    <box-icon name='facebook-circle' type='logo' color='#1b3358' ></box-icon>
    <box-icon name='twitter' type='logo' color='#1b3358' ></box-icon>
    </div>
    <div className='tel'>
        <p>info</p>
        <box-icon name='info-circle' type='solid' color='#1b3358' ></box-icon>
    </div>
    </div>

    <div className='header-one'>
    <div className='logo-div'>
    <img src='/logo/logo.png' className="logo" style={{ width: '40px' }}/>
    <p>boutiki</p>
    </div>
        <input type='search' placeholder='Recherche sur ikaboutiki...' value={filterText} onChange={(e)=> onFilterTextChange(e.target.value)} />
        <div className='connexion'></div>
        <div className='con'><a>Connexion</a></div>
        <div className='media'>
        <div className='md-s'>
        <NavLink to="/connexion"><box-icon name='user' type='solid' flip='horizontal' ></box-icon></NavLink></div>
        <div className='md-s'>
        <NavLink to="/inscription"><box-icon name='user' type='solid' flip='horizontal' ></box-icon> </NavLink></div>
        <div className='md-s'>
        <NavLink to="/pannier"><box-icon name='user' type='solid' flip='horizontal' ></box-icon> </NavLink></div>
        </div>
    </div>

    <div className='header-two'>
    <div className='cat'>
    <select name="Categorie" value="categorie" id="">
        <option value="Pour homme">Categories</option>
        <option value="Pour homme">Pour homme</option>
        <option value="Pour femme">Pour femme</option>
        <option value="Pour enfant">Pour enfant</option>
    </select>
      <a href='#'>Meilleures produits</a>
    </div>
    <div className='head'>
      <ul className='NavLink'>
      <Link className='NavLink'  to="/">Accueil</Link>
      <Link className='NavLink' to="/produits">Produits</Link>
      <Link className='NavLink' to="/apropos">A propos</Link>  
      <Link className='NavLink' to="/service">Service</Link>  
      <Link className='NavLink' to="/contact">Contacts</Link>  
     
      </ul>
    </div>
    </div>
    </div>
  )
}

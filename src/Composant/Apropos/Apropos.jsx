import React from 'react'
import './Apropos.css';

export default function Apropos() {
  return (
    <div className='apropos'>
      <h1>A propos <span>de nous</span></h1>
      <div className='trait'></div>

      <div className='container-ap'>
      <div className='text'>
      <p>Bamako,ACI 2000</p>
      <p>ikaboutiki est une société de vente d'article</p>
      <p>
      Notre mission est d’offrir à nos clients un vaste choix de produits (selon votre catégorie : homme, femme, enfant). Notre expérience en la matière nous permet de sources le meilleur rapport qualité/prix pour vous. Et nous mettons un point d’honneur à vous proposer un excellent service client et assistance. Nous espérons que vous aimerez nos produits autant que nous aimons les trouver pour vous.</p>
    </div>
    <div className='img-con'>
    <div className='img-d' >
    <img className='img-p' src='/assets/arr1Propos.jpg' />
    <img className='img-p' src='/assets/arr2Propos.jpg' /> 
    </div>
    <div >
    <img className='img-p-1' src='/assets/arr3Propos.jpg' />
    </div>
      </div>
      </div>
    </div>
  )
}

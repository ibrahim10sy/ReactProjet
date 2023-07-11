import React from 'react'
import './Footer.css'



export default function Footer() {
  return (
    <div className='footer'>
      <h1>Envie d'idées de style et de friandises?</h1>
      <h3>S'inscrire à notre newsletters</h3>
      <div className='new'>
      <input type='text' placeholder='Votre Email' className='i-foot'/>
      <button>S'inscrire</button>  
      </div>
      <div className='foot'>
     
     <div className='support'>
     <h4>SUPPORT</h4>
     <p>Contact Us</p>
     <p>FAQs</p>
     <p>Guide des tailles</p>
     <p>expédition & Retour</p>
     </div>

     <div className='boutique'>
     <h4>BOUTIQUE</h4>
     <p>Achats pour homme</p>
     <p>Achat pour femme</p>
     <p>Achat pour enfant</p>
     <p>Réduction</p>
     </div>

     <div className='entreprise'>
     <h4>ENTREPRISE</h4>
     <p>Notre histoire</p>
     <p>Carrières</p>
     <p>Termes & Conditions</p>
     <p>Confidentialité & Cookie</p>
     </div>

     <div className='contact'>
     <h4>CONTACT</h4>
     <p>1-202-555-0105</p>
     <p>1-202-555-0105</p>
     <p>ikaboutiki@gmail.com</p>
     </div>
     <div className='social-media'>
     <h4>Ikaboutiki.</h4>
     <p>Suivez nous nos réseaux sociaux</p>
     <div className='media'>
       
  </div>
  </div>

      </div>
      <hr />
      <div className='copy'>
        <p>
        copyright ©{new Date().getFullYear()} IKABOUTIKI.Tous droit reservée
        </p>
      </div>
    </div>
  )
}

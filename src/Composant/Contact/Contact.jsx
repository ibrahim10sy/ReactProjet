import React from 'react'
import './Contact.css';

function Contact() {
  return (
    <div className='container-contact'>
      <h1>contactez<span>-nous</span></h1>
      <div className='trait'></div>
      <div className='contact-con'>
        <div>
          <img className='img-c' src='/assets/OIP.jpg' />
        </div>
        <div className='cont-c'>
          <input type='text' placeholder='Nom complet' className='input-contact' /> <br />
          <input type='text' placeholder='telephone' /> <br />
          <input type='text' placeholder='Objet' />
          <textarea />
          <input type='button' className='btn-contact' value="Envoyer" />
        </div>

      </div>
      <div className='coordonner'>
        <div>
          <p id='p'>coordonnées</p>
          <div className='coor'>
            <a href="tel:+223 79 00 00 00">APPELER MAINTENANT</a>
          </div>
          <p>+223 79 00 00 00</p>
        </div>
        <div>
          <p id='p'>coordonnées</p>
          <div className='coor'>
            <a href="tel:+223 79 00 00 00">ITINERAIRE</a>
          </div>
          <p>Hamdallaye ACI 2000</p>
          <p>près de la place can</p>
        </div>
        <div>
          <p id='p'>Horaire d'ouverture</p>
          <p>LUN : 9:00-23:00</p>
          <p>MAR : 9:00-23:00</p>
          <p>MER : 9:00-23:00</p>
          <p>JEU : 9:00-23:00</p>
          <p>VEN : 9:00-23:00</p>
          <p>SAM : 12:00-23:00</p>
          <p>DIM : 14:00-21:00</p>
        </div>
      </div>
    </div>
  )
}
export default Contact;
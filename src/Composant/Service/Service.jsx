import React from 'react'
import './Service.css'



export default function Service() {
  return (
    <div className='container-service'>
    <h1>Nos<span>-Services</span></h1>
    <div className='trait'></div>
      <div className='service-one'>
        <img  src='/assets/scooter.png' />
        <div>
        <p className='para'>Livraison gratuite</p>
        <p>Nous livrons tous nos produits gratuitement. Nous proposons avec supplément, des livraisons rapides</p>
        <div className='icon-s'>
        <i class='bx bxs-like'></i>
        <i class='bx bxs-message-rounded-dots'></i>
        </div>
        </div>
      </div>
      <hr style={{marginLeft:'9rem', marginRight:'9rem'}} />

      <div className='service-one'>
        <img  src='/assets/pEnligne.png' />
        <div>
        <p className='para'>Paiement en ligne</p>
        <p>La vente en ligne est aujourd'hui un canal de vente nécessaire à la réussite de nombreuses entreprises. Ik@boutik vous offre la possibilité de payer vos achats en ligne par paiement paypal, carte de crédit ou orange money.</p>
        <div className='icon-s'>
        <i class='bx bxs-like' onclick="toggleActiveState(event)"></i>
        <i class='bx bxs-message-rounded-dots'></i>
        </div>
        </div>
      </div>
      <hr style={{marginLeft:'9rem', marginRight:'9rem'}} />

      <div className='service-one'>
        <img  src='/assets/protectionAche.png' />
        <div>
        <p className='para'>Remboursement</p>
        <p>Grâce à la politique de remboursement de Ik@boutiki, vous êtes protégé si le fournisseur n'expédie pas à temps ou ne répond pas aux exigences de qualité ou de produit convenues. Cela vous permet d'acheter en toute confiance.</p>
        <div className='icon-s'>
        <i class='bx bxs-like'></i>
        <i class='bx bxs-message-rounded-dots'></i>
        </div>
        </div>
      </div>
      <hr style={{marginLeft:'9rem', marginRight:'9rem'}} />
    </div>
  )
}

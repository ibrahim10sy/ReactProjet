import './App.css';
import { Routes,Route } from "react-router-dom";
import Footer from './Composant/Footer/Footer';
import Home from './Composant/Home/Home';
import Produits from './Composant/Produits/Produits';
import Navbar from './Composant/Navbar';
import { useState } from 'react';
import Apropos from './Composant/Apropos/Apropos';
import ProduitDetails from './Composant/ProduitDetails/ProduitDetails';
import Inscription from './Composant/Inscription/Inscription';
import Details from './Composant/Details/Details';
import Contact from './Composant/Contact/Contact';
import Service from './Composant/Service/Service';
import Connexion from './Composant/Connexion/Connexion';
import Pannier from './Composant/Pannier/Pannier';

function App() {

  const[input, setInput] = useState('');
  const[filterText, setFilterText] = useState('');


  return (
    <div className="App">
    <Navbar filterText={filterText}  onFilterTextChange={setFilterText} />
  {/*<Home />*/}
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/details/:id" element={<Details/>}/>
    <Route path="/produits" element={<Produits filterText={filterText} />}/>
    <Route path="/produitdetails/:id" element={<ProduitDetails/>}/>
    <Route path="/apropos" element={<Apropos />}/>
    <Route path="/service" element={<Service />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/connexion" element={<Connexion />}/>
    <Route path="/inscription" element={<Inscription />}/>
    <Route path="/pannier" element={<Pannier />}/>
   
    </Routes>
    
    <Footer />
    </div>
    
  );
}

export default App;

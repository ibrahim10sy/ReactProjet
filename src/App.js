import './App.css';
import { Routes,Route } from "react-router-dom";
import Footer from './Composant/Footer/Footer';
import Home from './Composant/Home/Home';
import Produits from './Composant/Produits/Produits';
import Navbar from './Composant/Navbar';
import { useState } from 'react';
import Apropos from './Composant/Apropos/Apropos';
import ProduitDetails from './Composant/Product/ProduitDetails';
import Connexion from './Composant/Connexion/Connexion';
import Details from './Composant/Details/Details';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

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
    <Route path="/produitsd/:id" element={<ProduitDetails/>}/>
    <Route path="/apropos" element={<Apropos />}/>
    <Route path="/connexion" element={<Connexion />}/>
    </Routes>
    
    <Footer />
    </div>
    
  );
}

export default App;

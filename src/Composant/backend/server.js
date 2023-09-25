const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(express.json());
app.use(cors());

// Configuration de la connexion à la base de données MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ecom_db"
});

// Connectez-vous à la base de données MySQL
db.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à la base de données : ", err);
  } else {
    console.log("Connecté à la base de données MySQL !");
  }
});

// Route pour l'inscription
app.post('http://localhost:8081/api/inscription', (req, res) => {
  const { nom, prenom, email, mdp } = req.body;

  // Vérifier si les données requises ont été envoyées depuis le formulaire
  if (!nom || !prenom || !email || !mdp) {
    return res.status(400).json({
         message: 'Tous les champs sont requis.' });
  }

  const nouveauUtilisateur = {
    nom: nom,
    prenom: prenom,
    email: email,
    mot_de_passe: mdp
  };

  const req = 'INSERT INTO users SET ?';

  db.query(req, nouveauUtilisateur, (err, result) => {
    if (err) {
      console.error("Erreur lors de l'enregistrement des données dans la base de données :", err);
      return res.status(500).json({ message: 'Une erreur est survenue lors de l\'inscription.' });
    }

    console.log("Utilisateur enregistré avec succès !");
    return res.status(201).json({ message: 'Inscription réussie !' });
  });
});

const PORT = 8081;

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}...`);
});

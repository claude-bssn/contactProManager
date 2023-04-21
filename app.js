const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const contactApiRoutes = require("./routes/api/contactApiRoute");
const contactRoute = require("./routes/contactRoute");
const path = require('path');
const favicon = require('serve-favicon');

// charge le ficher de config .env
dotenv.config();
// crée l'app express
const app = express();
// supprime le message DeprecationWarning
mongoose.set('strictQuery', true);

// ######################### connexion MongoDB #########################
// effectue la connexion à MongoDB
mongoose.connect(process.env.MONGO_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true, 
})
  .then(() => console.log("Connexion à MongoDB a réussie")) 
  .catch((error) => console.log("Connexion à MongoDB a échouée" + error));

// ######################### middleware #########################

// parse pour les formulaires
app.use(bodyParser.urlencoded({ extended: false }));
// parse pour le json
app.use(bodyParser.json());
// définie le moteur de template
app.set('view engine', 'ejs');
// définie le dossier opu se trouve les template
app.set('views', path.join(__dirname, 'views'));
// permet de décoder les infos qui sont dans le body
app.use(express.urlencoded({ extended: true}));
// déclare un dossier public de l'app
app.use(express.static(path.join(__dirname, 'public')));
// middleware pour changer le favicon
app.use(favicon(path.join(__dirname, '/public/favicon.png')))





// #########################ROUTER#########################
// indique l'url de départ des routes pour userApiRoute
app.use("/api", contactApiRoutes);

// indique l'url de départ des routes pour userApiRoute
app.use("/contact", contactRoute);

// indique la 404 en cas de mauvaise route
app.use((req, res) => {
  res.status(404);
  res.render("404");
});

app.listen(8080, () => {
  console.log('Le serveur est démarré sur le port 8080 !');
}); 
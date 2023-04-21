const Contact = require("../models/contact");

// on récupère toutes les taches par order alphabétique et on les passe à la vue à l'aide de la variable de data 
module.exports.getContact = (req, res) => {
  // collation s'occupe de rendre la requête case insensitive
  Contact.find().collation({locale: "fr" }).sort({lastName: 1})
    .then((data) => {
      res.status(200);
      res.render("home", {contacts: data})
    }) 
    .catch((error) => res.status(400).json(error));
  ;
};
// récupère un contact par son id et affiche les details dans la page item
module.exports.getContactById = (req, res) => {
  Contact.findOne({ _id: req.params.id })
    .then((data) => {
      res.status(200);
      res.render("item", {contact: data});
    })
    .catch((err) => console.log(err));
};

// affiche du formulaire de création de contact
module.exports.newContactGet = (req, res) => {
  res.render("add-item");
};

// crée un nouveau contact
module.exports.newContactPost = (req, res) => {
  // renseigne la date du jour automatiquement
  req.body.creationDate =  new Date().toISOString();
  let contact = new Contact(req.body);
  
  // verification que les champs soient bien tous renseignés
  let errorArray = [];
  if (contact.lastName == '') {errorArray.push("Veuillez renseigner votre nom");} 
  if (contact.firstName == '') {errorArray.push("Veuillez renseigner votre prénom");} 
  if (contact.company == '') {errorArray.push("Veuillez renseigner le nom de votre société");}
  if (contact.address == '') {errorArray.push("Veuillez renseigner votre adresse");}
  if (contact.phone == '') {errorArray.push("Veuillez renseigner votre numéro de téléphone");}
  if (contact.email == '') {errorArray.push("Veuillez renseigner votre email");}
  if (contact.sector == '') {errorArray.push("Veuillez renseigner votre secteur d'activité");}
  
  if(errorArray.length !== 0 ) {
    // renvoie sur le formulaire avec les erreurs et les informations déjà renseignées
    res.render('add-item', {contact: contact, errors: errorArray})
  }
  else {
    // enregistre en bdd si tous les champs requis sont bien renseigné
    contact.save()
      .then(() => {
          res.status(200);
          res.redirect("/contact");
      }) 
       .catch((error) => res.status(400).json(error));
  }
};

// récupère in contact par son id et l'affiche dans le formulaire de modification prérempli
module.exports.updateGet = (req, res) => {
  Contact.findOne({ _id: req.params.id })
    .then((data) => {
      res.status(200);
      res.render("edit-item", {contact: data});
    })
    .catch((err) => console.log(err));
};

// vérifie les information du formulaire et enregistre les modifications en BDD
module.exports.updatePost = (req, res) => {
  req.body.modifiedAt = new Date().toISOString();
  let contact = req.body;

   // verification que les champs soient bien tous renseignés
   let errorArray = [];
   if (contact.lastName == '') {errorArray.push("Veuillez renseigner votre nom");} 
   if (contact.firstName == '') {errorArray.push("Veuillez renseigner votre prénom");} 
   if (contact.company == '') {errorArray.push("Veuillez renseigner le nom de votre société");}
   if (contact.address == '') {errorArray.push("Veuillez renseigner votre adresse");}
   if (contact.phone == '') {errorArray.push("Veuillez renseigner votre numéro de téléphone");}
   if (contact.email == '') {errorArray.push("Veuillez renseigner votre email");}
   if (contact.sector == '') {errorArray.push("Veuillez renseigner votre secteur d'activité");}
   
   if(errorArray.length !== 0 ) {
     // renvoie sur le formulaire avec les erreurs et les informations déjà renseignées
     res.render('edit-item', {contact: contact, errors: errorArray})
   }
   else {
    Contact.updateOne({ _id: req.params.id}, req.body) 
      .then(() => {
        res.status(200);
        res.redirect('/contact');
      }) 
      .catch((error) => res.status(400).json(error))
    }
};
// suppression d'un contact
module.exports.deleteContact = (req, res) => {
  Contact.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200);
      res.redirect('/contact');
    }) 
    .catch((error) => res.status(400).json(error))
};
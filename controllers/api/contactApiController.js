const Contact = require("../../models/contact");

// récupération de tous les contacts au format json
module.exports.getContact = (req, res) => {
  Contact.find()
    .then((data) => res.status(200).json(data)) 
    .catch((error) => res.status(400).json(error));
  ;
};

// récupération d'un contact par son Id
module.exports.getContactById = (req, res) => {
  Contact.findOne({ _id: req.params.id })
    .then((data) => res.status(200).json(data)) 
    .catch((err) => console.log(err));
};

// création d'un contact
module.exports.newContactPost = (req, res) => {
  //  // renseigne la date du jour automatiquement
  //  req.body.creationDate =  new Date().toISOString();
  console.log(req.body);
   let contact = new Contact(req.body);

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
     res.status(400).json(errorArray)
   } else {
     contact.save()
       .then((data) => { res.status(200).json(data);}) 
       .catch((error) => res.status(400).json(error));
  }
};

// vérifie les information du formulaire et enregistre les modifications en BDD
module.exports.updateContact = (req, res) => {
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
     res.status(400).json(errorArray)
   } else {
    Contact.updateOne({ _id: req.params.id}, req.body) 
    .then((data) => res.status(200).json(data)) 
    .catch((error) => res.status(400).json(error))
  }
};

// suppression d'un contact
module.exports.deleteContact = (req, res) => {
  Contact.deleteOne({ _id: req.params.id })
  .then((data) => res.status(200).json(data)) 
  .catch((error) => res.status(400).json(error))
};
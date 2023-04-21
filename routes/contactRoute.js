const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

// route pour récupérer la liste des contact 
router 
  .get("/", contactController.getContact);

// route pour récupérer un contact par l'id
router 
  .get("/show/:id", contactController.getContactById);

// route pour afficher le formulaire de création de contact
router.route("/new") 
  .get(contactController.newContactGet);

// route de création de contact
router.route("/new") 
  .post(contactController.newContactPost);

// route afficher le formulaire de mise a jour de contact
router.route("/edit/:id")
  .get(contactController.updateGet);

// route de mise a jour de contact
router.route("/edit/:id")
  .post(contactController.updatePost);

// route de suppression de contact
router.route("/delete/:id") 
  .get(contactController.deleteContact);

module.exports = router;
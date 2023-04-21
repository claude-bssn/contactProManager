const express = require("express");
const router = express.Router();
const contactApiController = require("../../controllers/api/contactApiController");

// route pour récupérer la liste des contact : localhost/api/contact
router.route("/").get(contactApiController.getContact);

// route pour récupérer un contact par l'id
router.route("/:id").get(contactApiController.getContactById);

// route de création de contact
router.route("/new").post(contactApiController.newContactPost);

// route de mise a jour de contact
router.route("/edit/:id").put(contactApiController.updateContact);

// route de suppression de contact
router.route("/delete/:id").delete(contactApiController.deleteContact);

module.exports = router;

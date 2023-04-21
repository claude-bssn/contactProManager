const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

// route pour récupérer la liste des users : localhost/api/users
router 
  .get("/", contactController.getContact);

router 
  .get("/show/:id", contactController.getContactById);

router.route("/new") 
  .get(contactController.newContactGet);

router.route("/new") 
  .post(contactController.newContactPost);

router.route("/edit/:id")
  .get(contactController.updateGet);

router.route("/edit/:id")
  .post(contactController.updatePost);

// route de suppression 
router.route("/delete/:id") 
  .get(contactController.deleteContact);

module.exports = router;
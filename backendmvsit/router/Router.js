const express = require("express");
const {
  contactcontroller,
  hiremecontroller,
} = require("../controller/Contactcontroller");
const router = express.Router();
router.post("/contact", contactcontroller);
router.post("/hireme", hiremecontroller);
module.exports = router;

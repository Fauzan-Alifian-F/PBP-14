const express = require("express")
const {homepage, about} = require('../controller/homecontroller');
const router = express.Router()
router.get("/", homepage);
router.get("about", about);
module.exports = router;
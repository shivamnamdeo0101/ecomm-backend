const express = require("express");
const { getUser } = require("../controllers/user");


const router = express.Router();

router.route("/get-user").get(getUser);

module.exports = router;

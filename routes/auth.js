const express = require("express");
const {  createUser, getUser } = require("../controllers/user");

const router = express.Router();

router.route("/create-user").post(createUser);
router.route("/get-all-user").get(getUser);


module.exports = router;

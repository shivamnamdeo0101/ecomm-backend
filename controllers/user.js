const { default: mongoose } = require("mongoose");
const User = require("../models/User");
const { ObjectId } = require('mongoose');

exports.getUser = async (req, res, next) => {
    try {
        res.send('Hello World!')
    } catch (err) {
        next(err);
    }
};

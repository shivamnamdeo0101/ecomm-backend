const { default: mongoose } = require("mongoose");
const User = require("../models/User");
const { ObjectId } = require('mongoose');




//Update
exports.getUser = async (req, res, next) => {
    try {
        let user = await User.findOne({"email":req.body.email})
        user
        res.status(200).json({ success: true, user: user });
    } catch (err) {

        next(err);
        
    }
};

//GettAllUSer
exports.getUser = async (req, res, next) => {
    try {
        let user = await User.find({})
        res.status(200).json({ success: true, user: user });
    } catch (err) {

        next(err);
        
    }
};

//Register
exports.createUser = async (req, res, next) => {
    try {

        let user = await User.findOne({ "email": req.body.email })
        if (!user) {
            user = await User.create(req.body)
        }
        res.status(200).json({ success: true, user: user });

    } catch (err) {

        next(err);
        
    }
};


//Login
//Register
//Get User By Id
//Update User
//Try catct ke sath conditinal if else 






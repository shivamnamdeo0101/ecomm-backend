const crypto = require("crypto");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { type } = require("os");

const UserRef = new mongoose.Schema({

    email: {
        type: String,
        unique: true,
        required:[true,"Email is required"],
        default: null 
    },
    password: {
        type: String,
        required:[true,"Password is required"],
    },
    
});


// UserRef.pre("save", async function (next) {
//     next();
// });

// UserRef.methods.getSignedJwtToken = function () {
//     return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
//         expiresIn: process.env.JWT_EXPIRE,
//     });
// };

const User = mongoose.model("User", UserRef);

module.exports = User;
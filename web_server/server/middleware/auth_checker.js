const jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
//Load all your models
var User = require('../models/user.js');
mongoose.model('User');
// const User = require('mongoose').model('User');
const config = require('../config/config.json');

module.exports = (req, res, next) => {
    console.log('auth_checker: req' + JSON.stringify(req.headers));
    if(!req.headers.authorization) {
        return res.status(401).end();
    }

    // get the last part from a authorization header string like "bearer token-value"
    const token = req.headers.authorization.split(' ')[1];

    console.log('auth_checker: token: ' + token);

    // decode the token using a secret key-phrase
    return jwt.verify(token, config.jwtSecret, (err, decoded) => {
        // the 401 code is for unauthorized status
        if(err) { console.log(err); return res.status(401).end(); }

        const id = decoded.sub;

        // check if a user exists
        return User.findById(id, (userErr, user) => {
            if(userErr || !user) {
                console.log("User not found");
                return res.status(401).end();
            }

            return next();
        });
    });
}

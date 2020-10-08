const connection = require('../../config/database');

const jwt = require("jsonwebtoken");

exports.registerUser = function (req, result) {
    connection.query('INSERT INTO auth SET ?', [req.body], function (error, resultQuery) {
        if (error) {
            let resultRegisterUser = {message: 'User not registered'};
            result(null, resultRegisterUser);
        } else {
            let payload = {
                email: req.body.email
            };
            let token = jwt.sign({payload}, 'httpskedar', {expiresIn: '1d'});
            let resultRegisterUser = {message: 'User register successfully', token: token, authId: resultQuery.insertId};
            // console.log(resultRegisterUser);
            result(null, resultRegisterUser);
        }
    });
};


const conn = require('../../config/database');
let connection = conn.getConnection();
//connect to database
connection.connect();

const jwt = require("jsonwebtoken");

exports.registerUser = function (req, result) {
    connection.query('INSERT INTO auth SET ?', [req.body], function (error, result) {
        if (error) {
            let resultRegisterUser = {message: 'User not registered'};
            result(null, resultRegisterUser);
        } else {
            let payload = {
                email: req.body.email
            };
            let token = jwt.sign({payload}, 'httpskedar', {expiresIn: '1d'});
            let resultRegisterUser = {message: 'User register successfully', token: token, authId: result.insertId};
            result(null, resultRegisterUser);
        }
    });
};


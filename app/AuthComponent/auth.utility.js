var conn = require('../../config/database');
var connection = conn.getConnection();
//connect to database
connection.connect();

const jwt = require("jsonwebtoken");
 
exports.registerUser = function(req, result){
    connection.query('INSERT INTO auth SET ?', [req.body], function (error, fields) {
        if (error){
            let resultRegisterUser = {message: 'User not registered'};
            result(null, resultRegisterUser);
        } else {
            let payload = {
                email: req.body.email
            }
            let token = jwt.sign({ payload }, 'httpskedar', { expiresIn: '1d' });
            let resultRegisterUser = {message: 'User register successfully', token: token};
            result(null, resultRegisterUser);
        }
    });
}


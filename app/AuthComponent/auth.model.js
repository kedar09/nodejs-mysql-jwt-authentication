const authUtility = require('./auth.utility');

const conn = require('../../config/database');
let connection = conn.getConnection();
//connect to database
connection.connect();

const jwt = require("jsonwebtoken");

// bcrypt - for password encryption
const bcrypt = require('bcrypt');

exports.loginUser = function (req, result) {
    connection.query("select count(*) as count,any_value(authId) as authId,email,password from auth where email=? group by password limit 1",
        [req.body.email], function (err, records) {
            if (err) {
                result(err, null);
            } else {
                if (records.length > 0) {
                    if (bcrypt.compareSync(req.body.password, records[0].password)) {
                        let payload = {
                            username: req.body.username
                        };
                        let token = jwt.sign({payload}, 'httpskedar', {expiresIn: '1d'});
                        let resultLoginUser = {
                            message: 'User Login Successfully',
                            token: token,
                            authId: records[0].authId
                        };
                        result(null, resultLoginUser);
                    } else {
                        let resultLoginUser = {message: 'Wrong Password'};
                        result(null, resultLoginUser);
                    }
                } else {
                    let resultLoginUser = {message: 'User Not Found'};
                    result(null, resultLoginUser);
                }
            }
        });
};

exports.registerUser = function (req, result) {
    connection.query("select count(*) as count from auth where email=?",
        [req.body.email], function (error, records) {
            if (error) {
                result(error, null);
            } else {
                if (records[0].count > 0) {
                    let resultRegisterUser = {message: 'User Already registered'};
                    result(null, resultRegisterUser);
                } else {
                    req.body.password = bcrypt.hashSync(req.body.password, 10);
                    authUtility.registerUser(req, result);
                }
            }
        });
};



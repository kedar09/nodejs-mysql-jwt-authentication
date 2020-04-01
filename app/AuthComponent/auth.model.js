var authUtility = require('./auth.utility');

var conn = require('../../config/database');
var connection = conn.getConnection();
//connect to database
connection.connect();

const jwt = require("jsonwebtoken");

// bcrypt - for password encryption 
const bcrypt = require('bcrypt');

exports.loginUser = function (req, result) {
    connection.query("select count(*) as count,any_value(authId) as authId,email,password from auth where email=? group by password limit 1",
        [req.body.email], function(err, recordsArray, fields){
            if (err){
                result(err, null);
            }else{
                if(recordsArray.length>0){
                if(bcrypt.compareSync(req.body.password, recordsArray[0].password)){
                    let payload = {
                            username: req.body.username
                    }
                    let token = jwt.sign({ payload }, 'httpskedar', { expiresIn: '1d' });
                    let resultLoginUser = {message: 'User Login Successfully', token: token, authId: recordsArray[0].authId};
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
        [req.body.email], function(error, recordsArray, fields){
            if (error) {
                result(error, null);
            } else{
                if(recordsArray[0].count>0){
                    let resultRegisterUser = {message: 'User Already registered'};
                    result(null, resultRegisterUser);
                } else {               
                    req.body.password = bcrypt.hashSync(req.body.password, 10);
                    authUtility.registerUser(req, result);
                }
            }
    });
};



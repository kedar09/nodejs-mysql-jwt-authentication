var conn = require('../../config/database');
var connection = conn.getConnection();
//connect to database
connection.connect();

var userUtility = require('./user.utility');

// bcrypt - for password encryption 
const bcrypt = require('bcrypt');

exports.getUserProfileById = async function (req, result) {
    connection.query("select count(*) as count from auth where authId=?", [req.body.authId],   
        function(err,recordsArray,fields){
            if (err){
                console.log("Error occured while fetching the data !")
            }else{
                if(recordsArray[0].count==0){
                    let resultDeleteUser = {message: 'User not found'};
                    result(null, resultDeleteUser);
                } else {
                    userUtility.getUserProfileById(req, result);
                }
            }
    });
};

exports.updateUserPassword = function (req, result) {
    connection.query("select count(*) as count from auth where authId=?", [req.body.authId],   
        function(error, recordsArray, fields){
            if (error){
                console.log("Error occured while fetching the data !")
            }else{
                if(recordsArray[0].count==0){
                    let resultUpdateUserPassword = {message: 'User not found'};
                    result(null, resultUpdateUserPassword);
                } else {
                    req.body.password = bcrypt.hashSync(req.body.password,10);
                    userUtility.updateUserPassword(req, result);
                }
            }
    });
};

exports.updateUserProfile = function (req, result) {
    connection.query("select count(*) as count from auth where authId=?", [req.body.authId],   
        function(error, recordsArray, fields){
            if (error){
                console.log("Error occured while fetching the data !")
            }else{
                if(recordsArray[0].count==0){
                    let resultUpdateUserProfile = {message: 'User not found'};
                    result(null, resultUpdateUserProfile);
                } else {
                    userUtility.updateUserProfile(req, result);
                }
            }
    });
};

exports.deleteUserProfile = function (req, result) {
    connection.query("select count(*) as count from auth where authId=?",
        [req.body.authId],   
        function(error, recordsArray, fields){
        if (error){
            console.log("Error occured while fetching the data !")
        }else{
            if(recordsArray[0].count==0){
                 let resultDeleteUser = {message: 'User not found'};
                 result(null, resultDeleteUser);
            } else {
                userUtility.deleteUserProfile(req, result);
            }
        }
    });
};


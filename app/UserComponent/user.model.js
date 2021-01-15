const connection = require('../../config/database');

const userUtility = require('./user.utility');

// bcrypt - for password encryption
const bcrypt = require('bcrypt');

exports.getUserProfileById = async function (req, result) {
    connection.query("select count(*) as count from users where userId=?", [req.body.userId],
        function (err, records) {
            if (err) {
                console.log("Error occured while fetching the data !")
            } else {
                if (records[0].count === 0) {
                    let resultDeleteUser = {message: 'User not found!'};
                    result(null, resultDeleteUser);
                } else {
                    userUtility.getUserProfileById(req, result);
                }
            }
        });
};

exports.updateUserProfile = function (req, result) {
    connection.query("select count(*) as count from users where userId=?", [req.body.userId],
        function (error, records) {
            if (error) {
                console.log("Error occured while fetching the data !")
            } else {
                if (records[0].count === 0) {
                    let resultUpdateUserProfile = {message: 'User not found!'};
                    result(null, resultUpdateUserProfile);
                } else {
                    userUtility.updateUserProfile(req, result);
                }
            }
        });
};

exports.deleteUserProfile = function (req, result) {
    connection.query("select count(*) as count from users where userId=?",
        [req.body.userId],
        function (error, records) {
            if (error) {
                console.log("Error occured while fetching the data !")
            } else {
                if (records[0].count === 0) {
                    let resultDeleteUser = {message: 'User not found!'};
                    result(null, resultDeleteUser);
                } else {
                    userUtility.deleteUserProfile(req, result);
                }
            }
        });
};


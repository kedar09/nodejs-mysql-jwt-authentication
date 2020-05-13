const conn = require('../../config/database');

let connection = conn.getConnection();
//connect to database
connection.connect();

exports.updateUserPassword = function (req, result) {
    connection.query('UPDATE `auth` SET password = ? where `authId`= ?',
        [req.body.password, req.body.authId], function (error, fields) {
            if (error) {
                let resultUpdateUserPassword = {message: 'User Password not updated!'};
                result(null, resultUpdateUserPassword);
            } else {
                let resultUpdateUserPassword = {message: 'User Password updated successfully!'};
                result(null, resultUpdateUserPassword);
            }
        });
};

exports.updateUserProfile = function (req, result) {
    connection.query('UPDATE `auth` SET ? where `authId`= ?',
        [req.body, req.body.authId], function (error, fields) {
            if (error) {
                let resultUpdateUserPassword = {message: 'User Profile not updated!!'};
                result(null, resultUpdateUserPassword);
            } else {
                let resultUpdateUserPassword = {message: 'User Profile updated successfully!'};
                result(null, resultUpdateUserPassword);
            }
        });
};

exports.deleteUserProfile = function (req, result) {
    connection.query('DELETE FROM auth WHERE authId=?', [req.body.authId],
        function (error, fields) {
            if (error) {
                let resultDeleteUser = {message: 'User Account Not Deleted!'};
                result(null, resultDeleteUser);
            } else {
                let resultDeleteUser = {message: 'User Account Deleted Successfully!'};
                result(null, resultDeleteUser);
            }
        });
};

exports.getUserProfileById = function (req, result) {
    let sqlQuery = 'select authId,email,phoneNumber,displayName from auth where authId = ' + req.body.authId;
    connection.query(sqlQuery, function (error, resultOfQuery) {
        if (error) {
            result(error, null);
        } else {
            result(null, resultOfQuery);
        }
    });
};


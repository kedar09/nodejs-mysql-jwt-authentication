const connection = require("../../config/database");

exports.updateUserProfile = function (req, result) {
  connection.query(
    "UPDATE `users` SET ? where `userId`= ?",
    [req.body.userProfileData, req.body.userId],
    function (error, fields) {
      if (error) {
        let resultUpdateUserPassword = {
          message: "User Profile not updated!!",
        };
        result(null, resultUpdateUserPassword);
      } else {
        let resultUpdateUserPassword = {
          message: "User Profile updated successfully!",
        };
        result(null, resultUpdateUserPassword);
      }
    }
  );
};

exports.deleteUserProfile = function (req, result) {
  connection.query(
    "DELETE FROM users WHERE userId=?",
    [req.body.userId],
    function (error, fields) {
      if (error) {
        let resultDeleteUser = { message: "User Account Not Deleted!" };
        result(null, resultDeleteUser);
      } else {
        let resultDeleteUser = {
          message: "User Account Deleted Successfully!",
        };
        result(null, resultDeleteUser);
      }
    }
  );
};

exports.getUserProfileById = function (req, result) {
  let sqlQuery =
    "select userId,email,phoneNumber,displayName from users where userId = " +
    req.body.userId;
  connection.query(sqlQuery, function (error, resultOfQuery) {
    if (error) {
      result(error, null);
    } else {
      result(null, resultOfQuery);
    }
  });
};

exports.updateUserPassword = function (req, result) {
  connection.query(
    "UPDATE `users` SET password = ? where `userId`= ?",
    [req.body.password, req.body.userId],
    function (error, fields) {
      if (error) {
        let resultUpdateUserPassword = {
          message: "User Password not updated!",
        };
        result(null, resultUpdateUserPassword);
      } else {
        let resultUpdateUserPassword = {
          StatusCode: 200,
          message: "User Password updated successfully!",
        };
        result(null, resultUpdateUserPassword);
      }
    }
  );
};

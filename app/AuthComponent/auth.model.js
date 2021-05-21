const authUtility = require("./auth.utility");

const connection = require("../../config/database");

const jwt = require("jsonwebtoken");

const JWTPrivateKey = require("../../config/JWTPrivateKey");
// bcrypt - for password encryption
const bcrypt = require("bcrypt");
// const { func } = require('@hapi/joi');

exports.loginUser = function (req, result) {
  connection.query(
    "select count(*) as count,any_value(userId) as userId,email,password from users where email=? group by password limit 1",
    [req.body.email],
    function (err, records) {
      if (err) {
        result(err, null);
      } else {
        if (records.length > 0) {
          if (bcrypt.compareSync(req.body.password, records[0].password)) {
            let payload = {
              username: req.body.username,
            };
            let token = jwt.sign({ payload }, JWTPrivateKey.privateKey, {
              expiresIn: "1d",
            });
            let resultLoginUser = {
              message: "User Login Successfully",
              token: token,
              userId: records[0].userId,
            };
            console.log(resultLoginUser);
            result(null, resultLoginUser);
          } else {
            let resultLoginUser = { message: "Wrong Password" };
            result(null, resultLoginUser);
          }
        } else {
          let resultLoginUser = { message: "User Not Found" };
          result(null, resultLoginUser);
        }
      }
    }
  );
};

exports.registerUser = function (req, result) {
  connection.query(
    "select count(*) as count from users where email=?",
    [req.body.email],
    function (error, records) {
      if (error) {
        result(error, null);
      } else {
        if (records[0].count > 0) {
          let resultRegisterUser = { message: "User Already registered" };
          result(null, resultRegisterUser);
        } else {
          req.body.password = bcrypt.hashSync(req.body.password, 10);
          authUtility.registerUser(req, result);
        }
      }
    }
  );
};

exports.resetPasswordLink = function (req, result) {
  connection.query(
    "select count(*) as count,userId from users where email=?",
    [req.body.email],
    function (error, records) {
      if (error) {
        result(error, null);
      } else {
        if (records[0].count === 0) {
          let resultResetPasswordLink = { message: "User not found" };
          result(null, resultResetPasswordLink);
        } else {
          authUtility.resetPasswordLink(req, result, records[0].userId);
        }
      }
    }
  );
};

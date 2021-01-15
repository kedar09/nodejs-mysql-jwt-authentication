const connection = require("../../config/database");
const jwt = require("jsonwebtoken");
const JWTPrivateKey = require("../../config/JWTPrivateKey");
const nodemailerDetails = require("../../config/nodemailerDetails");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");

exports.registerUser = function (req, result) {
  connection.query(
    "INSERT INTO users SET ?",
    [req.body],
    function (error, resultQuery) {
      if (error) {
        let resultRegisterUser = { message: "User not registered" };
        result(null, resultRegisterUser);
      } else {
        let payload = {
          email: req.body.email,
        };
        let token = jwt.sign({ payload }, JWTPrivateKey.privateKey, {
          expiresIn: "1d",
        });
        let resultRegisterUser = {
          message: "User register successfully",
          token: token,
          userId: result.insertId,
        };
        result(null, resultRegisterUser);
      }
    }
  );
};

exports.resetPasswordLink = function (req, result, userId) {
  let payload = {
    email: req.body.email,
  };

  let token = jwt.sign({ payload }, JWTPrivateKey.privateKey, {
    expiresIn: "1d",
  });
  resetPassworSendMailLink(req, token, result, userId);
};

async function resetPassworSendMailLink(req, token, result, userId) {
  let transporter = nodemailer.createTransport({
    service: nodemailerDetails.service,
    auth: {
      user: nodemailerDetails.user, // generated ethereal user
      pass: nodemailerDetails.pass, // generated ethereal password
    },
  });

  try {
    // send mail with defined transport object
    await transporter.sendMail({
      from: nodemailerDetails.user, // sender mail id
      to: req.body.email, // Receiver mail id
      subject: "Reset Password Link", // Subject of mail
      text: `Reset Password Link 'http://localhost:3000/set-new-password?${token}?${userId}`, // text body
    });

    let resultResetPasswordLink = {
      message: "Reset password link send!",
      userId: userId,
    };
    result(null, resultResetPasswordLink);
  } catch (e) {
    console.log(e);
    let resultResetPasswordLink = { message: "Something went wrong!" };
    result(null, resultResetPasswordLink);
  }
}

exports.findUpdateUserPassword = function (req, result) {
  connection.query(
    "select count(*) as count from users where userId=?",
    [req.body.userId],
    function (error, records) {
      if (error) {
        console.log("Error occured while fetching the data !");
      } else {
        if (records[0].count === 0) {
          let resultUpdateUserPassword = { message: "User not found!" };
          result(null, resultUpdateUserPassword);
        } else {
          req.body.password = bcrypt.hashSync(req.body.password, 10);
          updateUserPassword(req, result);
        }
      }
    }
  );
};

const updateUserPassword = function (req, result) {
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

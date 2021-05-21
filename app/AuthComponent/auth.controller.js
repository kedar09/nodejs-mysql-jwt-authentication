const authModel = require('./auth.model');

exports.loginUser = function (req, res) {
    authModel.loginUser(req, function (error, result) {
        if (error) {
            res.status(400).send(error);
        } else {
            res.status(200).send(result);
        }
    });
};

exports.registerUser = function (req, res) {
    authModel.registerUser(req, function (error, result) {
        if (error) {
            res.status(400).send(error);
        } else {
            res.status(200).send(result);
        }
    });
};

exports.resetPasswordLink = function (req, res) {
    authModel.resetPasswordLink(req, function (error, result) {
        if (error) {
            res.status(400).send(error);
        } else {
            res.status(200).send(result);
        }
    });
};

const userModel = require('./user.model');

exports.getUserProfileById = function (req, res) {
    userModel.getUserProfileById(req, function (error, result) {
        if (error) {
            res.status(400).send(error);
        } else {
            res.status(200).send(result);
        }
    });
};

exports.updateUserProfile = function (req, res) {
    userModel.updateUserProfile(req, function (error, result) {
        if (error) {
            res.status(400).send(error);
        } else {
            res.status(200).send(result);
        }
    });
};

exports.deleteUserProfile = function (req, res) {
    userModel.deleteUserProfile(req, function (error, result) {
        if (error) {
            res.status(400).send(error);
        } else {
            res.status(200).send(result);
        }
    });
};

exports.updateUserPassword = function (req, res) {
    userModel.updateUserPassword(req, function (error, result) {
        if (error) {
            res.status(400).send(error);
        } else {
            res.status(200).send(result);
        }
    });
};

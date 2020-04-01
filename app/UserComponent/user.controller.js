var userModel = require('./user.model');

exports.getUserProfileById = function (req, res) {
    userModel.getUserProfileById(req, function (error, result) {
        if (error) {
            res.send(error);
        } else {
            res.status(200).send(result);
        }
    });
};

exports.updateUserPassword = function (req, res) {
    userModel.updateUserPassword(req, function (err, task) {
        if (err) {
            res.send(err);
        } else {
            res.json(task);
        }
    });
};

exports.updateUserProfile = function (req, res) {
    userModel.updateUserProfile(req, function (err, task) {
        if (err) {
            res.send(err);
        } else {
            res.json(task);
        }
    });
};

exports.deleteUserProfile = function (req, res) {
    userModel.deleteUserProfile(req, function (err, task) {
        if (err) {
            res.send(err);
        } else {
            res.json(task);
        }
    });
};


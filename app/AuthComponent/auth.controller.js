var authModel = require('./auth.model');

exports.loginUser = function (req, res) {
    authModel.loginUser(req, function (err, task) {
        if (err) {
            res.send(err);
        } else {
            res.json(task);
        }
    });
};

exports.registerUser = function (req, res) {
    authModel.registerUser(req, function (err, task) {
        if (err) {
            res.send(err);
        } else {
            res.json(task);
        }
    });
};
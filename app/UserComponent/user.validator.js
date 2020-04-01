const Joi = require('@hapi/joi')
    .extend(require("joi-phone-number"));

var userController = require('./user.controller');

exports.getUserProfileById = async function (req, res) {
    const data = req.body;
    const schema = Joi.object({
        authId: Joi.number().integer().min(0).max(1000).required(),
    });
    const {error} = await schema.validate(data);
    if (error) {
        res.status(400).send({ error: error.details[0].message });
    } else {
        userController.getUserProfileById(req, res);
    }
};

exports.updateUserPassword = async function (req, res) {
    const data = req.body;
    const schema = Joi.object({
        authId: Joi.number().integer().min(0).max(1000).required(),
        password: Joi.string().min(7).max(50).required(),
    });
    const {error} = await schema.validate(data);
    if (error) {
        res.status(400).send({ error: error.details[0].message });
    } else {
        userController.updateUserPassword(req, res);
    }
};

exports.updateUserProfile = async function (req, res) {
    const data = req.body;
    const schema = Joi.object({
        authId: Joi.number().integer().min(0).max(1000).required(),
        phoneNumber: Joi.string().phoneNumber().length(13),
        displayName: Joi.string().min(3).max(50)
    });
    const {error} = await schema.validate(data);
    if (error) {
        res.status(400).send({ error: error.details[0].message });
    } else {
        userController.updateUserProfile(req, res);
    }
};

exports.deleteUserProfile = async function (req, res) {
    const data = req.body;
    const schema = Joi.object({
        authId: Joi.number().integer().min(0).max(1000).required()
    });
    const {error} = await schema.validate(data);
    if (error) {
        res.status(400).send({ error: error.details[0].message });
    } else {
        userController.deleteUserProfile(req, res);
    }
};
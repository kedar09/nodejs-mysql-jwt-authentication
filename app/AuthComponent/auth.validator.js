const Joi = require('@hapi/joi')
    .extend(require("joi-phone-number"));

const authController = require('./auth.controller');

exports.loginUser = async function (req, res) {
    const data = req.body;
    const schema = Joi.object({
        email: Joi.string().email({
            minDomainSegments: 2,
            tlds: {allow: ['com', 'net']}
        }).required(),
        password: Joi.string().min(7).max(50).required()
    });
    const {error} = await schema.validate(data);
    if (error) {
        res.status(400).send({error: error.details[0].message});
    } else {
        authController.loginUser(req, res);
    }
};

exports.registerUser = async function (req, res) {
    const data = req.body;
    const schema = Joi.object({
        email: Joi.string().email({
            minDomainSegments: 2,
            tlds: {allow: ['com', 'net']}
        }).required(),
        password: Joi.string().min(3).max(50).required(),
        phoneNumber: Joi.string().phoneNumber().length(13),
        displayName: Joi.string().min(3).max(50)
    });
    const {error} = await schema.validate(data);
    if (error) {
        res.status(400).send({error: error.details[0].message});
    } else {
        authController.registerUser(req, res);
    }
};

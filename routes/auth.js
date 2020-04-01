var express = require('express');
var router = express.Router();
var authValidator = require('../app/AuthComponent/auth.validator');

// Login user - (body: [email,password]) - (email,password is required)
router.post('/loginUser', authValidator.loginUser);

// register new user - (body: [email,password,displayName,phoneNumber]) - (email,password is required)
router.post('/registerUser', authValidator.registerUser);

module.exports = router;

const express = require('express');
const router = express.Router();
const authValidator = require('../app/AuthComponent/auth.validator');

// Login user - (body: [email,password]) - (email,password is required)
router.post('/loginUser', authValidator.loginUser);

// register new user - (body: [email,password,displayName,phoneNumber]) - (email,password is required)
router.post('/registerUser', authValidator.registerUser);

module.exports = router;

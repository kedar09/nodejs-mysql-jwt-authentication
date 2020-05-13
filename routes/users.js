const express = require('express');
const router = express.Router();
const userValidator = require('../app/UserComponent/user.validator');

// get user profile - (body: [authId]) - (authId is required)
router.post('/getUserProfile', userValidator.getUserProfileById);

// update user password - (body: [authId,password]) - (authId,password is required)
router.put('/updateUserPassword', userValidator.updateUserPassword);

// update user profile - (body: [authId,displayName,phoneNumber]) - (authId,displayName or phoneNumber is required)
router.put('/updateUserProfile', userValidator.updateUserProfile);

// delete user account (body: [authId]) - (authId is required)
router.delete('/deleteUserProfile', userValidator.deleteUserProfile);

module.exports = router;

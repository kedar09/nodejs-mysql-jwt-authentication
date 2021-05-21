const express = require('express');
const router = express.Router();
const authValidator = require('../app/AuthComponent/auth.validator');

/**
 * @swagger
 * /auth/loginUser:
 *   post:
 *     tags:
 *         - Login User
 *     description: Login User
 *     parameters:
 *         - name: reqBody
 *           description: Request Body User
 *           in: body
 *           schema:
 *              type: object
 *              properties:
 *                  email:
 *                      type: string
 *                  password:
 *                      type: string
 *              required:
 *                  - email
 *                  - password
 *     responses:
 *       200:
 *         description: Success Response
 */
router.post('/loginUser', authValidator.loginUser);

/**
 * @swagger
 * /auth/registerUser:
 *   post:
 *     tags:
 *         - Register New User
 *     description: Register New User
 *     parameters:
 *         - name: reqBody
 *           description: Request Body User
 *           in: body
 *           schema:
 *              type: object
 *              properties:
 *                  email:
 *                      type: string
 *                  password:
 *                      type: string
 *                  displayName:
 *                      type: string
 *                  phoneNumber:
 *                      type: string
 *              required:
 *                  - email
 *                  - password
 *     responses:
 *       200:
 *         description: Success Response
 */
router.post('/registerUser', authValidator.registerUser);

/**
 * @swagger
 * /auth/resetPasswordLink:
 *   post:
 *     tags:
 *         - Send Reset Password Link To The User
 *     description: Send Reset Password Link To The User
 *     parameters:
 *         - name: reqBody
 *           description: Request Body Reset Password Link Of User
 *           in: body
 *           schema:
 *              type: object
 *              properties:
 *                  email:
 *                      type: string
 *              required:
 *                  - email
 *     responses:
 *       200:
 *         description: Success Response
 */
router.post('/resetPasswordLink', authValidator.resetPasswordLink);


module.exports = router;

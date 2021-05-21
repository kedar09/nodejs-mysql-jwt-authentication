const express = require("express");
const router = express.Router();
const userValidator = require("../app/UserComponent/user.validator");

/**
 * @swagger
 * securityDefinitions:
 *   Bearer:
 *      type: apiKey
 *      name: Authorization
 *      in: header
 * /users/getUserProfile:
 *   post:
 *     security:
 *         - Bearer: []
 *     tags:
 *         - Get User Profile
 *     description: Get User Profile
 *     parameters:
 *         - name: reqBody
 *           description: Request Body User
 *           in: body
 *           schema:
 *              type: object
 *              properties:
 *                  userId:
 *                      type: integer
 *              required:
 *                  - userId
 *
 *     responses:
 *       200:
 *         description: Success Response
 */
router.post("/getUserProfile", userValidator.getUserProfileById);

/**
 * @swagger
 * securityDefinitions:
 *   Bearer:
 *      type: apiKey
 *      name: Authorization
 *      in: header
 * /users/updateUserProfile:
 *   put:
 *     security:
 *         - Bearer: []
 *     tags:
 *         - Update User Profile
 *     description: Update User Profile
 *     parameters:
 *         - name: reqBody
 *           description: Request Body User
 *           in: body
 *           schema:
 *              type: object
 *              properties:
 *                  userProfileData:
 *                        type: object
 *                        properties:
 *                              displayName:
 *                                  type: string
 *                              phoneNumber:
 *                                  type: string
 *                  userId:
 *                      type: integer
 *              required:
 *                  - userId
 *     responses:
 *       200:
 *         description: Success Response
 */
router.put("/updateUserProfile", userValidator.updateUserProfile);

/**
 * @swagger
 * securityDefinitions:
 *   Bearer:
 *      type: apiKey
 *      name: Authorization
 *      in: header
 * /users/deleteUserProfile/{userId}:
 *   delete:
 *     security:
 *         - Bearer: []
 *     tags:
 *         - Delete User Profile
 *     description: Delete User Profile By ID
 *     parameters:
 *         - name: userId
 *           description: Delete User By userId
 *           in: path
 *           type: string
 *           required: true
 *     responses:
 *       200:
 *         description: Success Response
 */
router.delete("/deleteUserProfile/:userId", userValidator.deleteUserProfile);

// for update password you need a reset password link
/**
 * @swagger
 * securityDefinitions:
 *   Bearer:
 *      type: apiKey
 *      name: Authorization
 *      in: header
 * /auth/updateUserPassword:
 *   post:
 *     security:
 *         - Bearer: []
 *     tags:
 *         - Update User Password
 *     description: Update User Password
 *     parameters:
 *         - name: reqBody
 *           description: Request Body Update Password
 *           in: body
 *           schema:
 *              type: object
 *              properties:
 *                  password:
 *                      type: string
 *              required:
 *                  - password
 *     responses:
 *       200:
 *         description: Success Response
 */
router.put("/updateUserPassword", userValidator.updateUserPassword);

module.exports = router;

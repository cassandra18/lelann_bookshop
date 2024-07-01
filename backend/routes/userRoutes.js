const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateAdmin = require('../middleware/authenticateAdmin');

// User routes
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.put('/update-profile/:id', userController.updateUserProfile);
router.delete('/delete-account/:id', userController.deleteUserAccount);
router.get('/see-profile/:id', userController.getUserProfile);
router.put('/update-password/:id', userController.updateUserPassword);


// Admin routes
router.get('/all-users',  authenticateAdmin, userController.getAllUsers);
router.get('/all-users/:id',  authenticateAdmin, userController.getUserById);
router.delete('/delete-user/:id',  authenticateAdmin, userController.deleteUserById);
router.put('/update-user/:id',  authenticateAdmin, userController.updateUserById);


module.exports = router;
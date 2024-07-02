const express = require('express');
const router = express.Router();
const UserControllers = require('../controllers/userController');
const authenticateAdmin = require('../middleware/authenticateAdmin');
const { authenticateGoogle, handleGoogleCallback } = require('../middleware/oauthMiddleware');

// User routes
router.post('/register', UserControllers.registerUser);
router.post('/login', UserControllers.loginUser);
router.put('/update-profile/:id', UserControllers.updateUserProfile);
router.delete('/delete-account/:id', UserControllers.deleteUserAccount);
router.get('/see-profile/:id', UserControllers.getUserProfile);
router.put('/update-password/:id', UserControllers.updateUserPassword);


// Admin routes
router.get('/all-users',  authenticateAdmin, UserControllers.getAllUsers);
router.get('/all-users/:id',  authenticateAdmin, UserControllers.getUserById);
router.delete('/delete-user/:id',  authenticateAdmin, UserControllers.deleteUserById);
router.put('/update-user/:id',  authenticateAdmin, UserControllers.updateUserById);

// Google OAuth routes
router.get('/auth/google', authenticateGoogle);
router.get('/auth/google/callback', handleGoogleCallback);


module.exports = router;
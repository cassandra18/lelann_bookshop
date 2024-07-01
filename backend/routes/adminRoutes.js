const express = require('express');
const router = express.Router();
const { registerAdmin, loginAdmin, updateAdmin, deleteAdmin } = require('../controllers/adminController');


router.post('/register-admin', registerAdmin);
router.post('/login-admin', loginAdmin);
router.put('/update-admin/:id', updateAdmin);
router.delete('/delete-admin/:id', deleteAdmin);


module.exports = router;
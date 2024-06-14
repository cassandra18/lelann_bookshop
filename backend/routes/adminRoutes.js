const express = require('express');
const router = express.Router();
const { registerAdmin, loginAdmin, updateAdmin, deleteAdmin } = require('../controllers/adminController');


router.post('/register', registerAdmin);
router.post('/login', loginAdmin);
router.put('/update/:id', updateAdmin);
router.delete('/delete/:id', deleteAdmin);


module.exports = router;
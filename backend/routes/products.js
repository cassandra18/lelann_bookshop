const express = require('express');
// const authenticateAdmin = require('../middleware/authenticateAdmin');
const { addProduct } = require('../controllers/product');
const upload = require('../middleware/uploadImage');
const router = express.Router();


// router.use(authenticateAdmin);

// Route to add a new product
router.post('/product', upload.single('image'), addProduct);

// Route to update an existing product
router.put('/product/:id');

// Route to delete a product
router.delete('/product/:id');

module.exports = router;
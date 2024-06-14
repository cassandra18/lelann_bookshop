const express = require('express');
const authenticateAdmin = require('../middleware/authenticateAdmin');
const { addProduct, getProductById, getProducts, deleteProduct, updateProduct} = require('../controllers/productController');
const upload = require('../middleware/uploadImage');
const router = express.Router();



// Route to add a new product
router.post('/product/add', authenticateAdmin, upload.single('image'), addProduct);

// Route to update an existing product
router.put('/product/update/:id', authenticateAdmin, upload.single('image'), updateProduct);

// Route to delete a product
router.delete('/product/delete/:id', authenticateAdmin, deleteProduct);

// Route to get a product by id
router.get('/product/:id', getProductById);

// Route to get all products
router.get('/products', getProducts);

module.exports = router;
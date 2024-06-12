const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// Add a new product
const addProduct = async (req, res) => {
    try {
        const { name, price, condition = 'new', auther_id, publisher_id, subcategory_id, description } = req.body;
        
        if (!req.file) {
            return res.status(400).json({ message: 'Image file is required' });
        }

        const imageUrl = `../uploads/${req.file.filename}`;
 
        // Validate inputs
        if (!name || !price || !condition || !author_id || !publisher_id || !subcategory_id) {
            return res.status(400).json({ message: 'All fields are required except description.' });
        }

        // Create a new product
        const product = await prisma.product.create({
            data: {
                name,
                price,
                condition,
                description,
                auther_id,
                publisher_id,
                subcategory_id,
                image_url: imageUrl,
            },
        });
        
        if (!product) {
            return res.status(400).json({ message: 'Failed to add product' });
        }

        res.status(201).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { addProduct };
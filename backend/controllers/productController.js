const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// Add a new product
const addProduct = async (req, res) => {
    try {
        const { name, price, condition = 'new', author_id, publisher_id, subcategory_id, description } = req.body;
        
        const subcategory = await prisma.subcategory.findUnique({ where: { id: subcategory_id } });
        const author = await prisma.author.findUnique({ where: { id: author_id } });
        const publisher = await prisma.publisher.findUnique({ where: { id: publisher_id } });

        // Validate existence of subcategory, author, and publisher
        if (!subcategory) {
            return res.status(400).json({ message: 'Invalid subcategory ID' });
        }
        if (!author) {
            return res.status(400).json({ message: 'Invalid author ID' });
        }
        if (!publisher) {
            return res.status(400).json({ message: 'Invalid publisher ID' });
        }

        // Validate required fields
        if (!name || !price || !author_id || !publisher_id || !subcategory_id) {
            return res.status(400).json({ message: 'Name, price, author ID, publisher ID, and subcategory ID are required fields' });
        }

        // Check if image file is uploaded
        if (!req.file) {
            return res.status(400).json({ message: 'Image file is required' });
        }

        // Construct image URL based on server configuration
        const imageUrl = `../uploads/${req.file.filename}`;

        // Create a new product
        const product = await prisma.product.create({
            data: {
                name,
                price,
                condition,
                description,
                author: { connect: { id: author_id } },
                publisher: { connect: { id: publisher_id } },
                subcategory: { connect: { id: subcategory_id } },
                imageUrl,
            },
        });
        
        if (!product) {
            return res.status(400).json({ message: 'Failed to add product' });
        }

        res.status(201).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get all products
const getProducts = async (req, res) => {
    try {
        const products = await prisma.product.findMany({
            include: {
                author: true,
                publisher: true,
                subcategory: true,
            },
        });

        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    };

};

// Get a product by id
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await prisma.product.findUnique({
            where: { id },
            include: {
                author: true,
                publisher: true,
                subcategory: true,
            },
        });

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    } 
};

// Update a product
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, condition, author_id, publisher_id, subcategory_id, description } = req.body;

        // Check if the product exists
        const existingProduct = await prisma.product.findUnique({
            where: { id },
        });

        if (!existingProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const product = await prisma.product.update({
            where: { id },
            data: {
                name,
                price,
                condition,
                description,
                author: { connect: { id: author_id } },
                publisher: { connect: { id: publisher_id } },
                subcategory: { connect: { id: subcategory_id } },
            },
        });

        if (!product) {
            console.error(error);
            return res.status(400).json({ message: 'Error updating the product' });
        }

        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete a product
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        // Check if the product exists
        const existingProduct = await prisma.product.findUnique({
            where: { id },
        });

        if (!existingProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const product = await prisma.product.delete({
            where: { id },
        });

        if (!product) {
            return res.status(400).json({ message: 'Error deleting product' });
        }

        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { addProduct, getProducts, getProductById, updateProduct, deleteProduct };

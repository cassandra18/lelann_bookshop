const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// Controller for admin registration
const registerAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if admin already exists
        const existingAdmin = await prisma.admin.findUnique({
            where: {
                email,
            },
        });
        if (existingAdmin) {
            return res.status(400).json({ message: 'Admin with this email already exists' });
        }
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new admin
        const admin = await prisma.admin.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

        res.status(201).json(admin);
    } catch (error) {
        console.log(error);  
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller for admin login
const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if admin exists
        const admin = await prisma.admin.findUnique({
            where: {
                email,
            },
        });
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }


        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, admin.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Generate token 
        const token = jwt.sign({ id: admin.id, role: admin.role }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    registerAdmin,
    loginAdmin,
};
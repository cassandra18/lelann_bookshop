const express = require('express');
require('dotenv').config();
const cors = require('cors');
const path = require('path');
const app = express();
const errorHanlder = require('./middleware/errorHandler');


// Middleware for parsing JSON bodies
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
//app.use('/api/auth', require('./routes/auth'));
app.use('/api/', require('./routes/productRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/author', require('./routes/authorRoutes'));
app.use('/api/publisher', require('./routes/publisherRoutes'));
app.use(errorHanlder);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



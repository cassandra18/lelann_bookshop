# Lelann Bookshop Website Project

## Overview

Lelann Bookshop is an e-commerce website that sells books, stationery, and uniforms. This project is built using Node.js, Express, PostgreSQL, Sequelize, Vite, Tailwind CSS, and TypeScript.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Database Setup](#database-setup)
  - [Running the Application](#running-the-application)
  - [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- User authentication and authorization
- Product listings for books, stationery, and uniforms
- Categories and subcategories for products
- Product search and filtering
- Shopping cart and checkout functionality
- Order management
- Admin dashboard for managing products and orders

## Technologies Used

- **Backend**: Node.js, Express, PostgreSQL, Sequelize
- **Frontend**: Vite, Tailwind CSS, TypeScript
- **Testing**: Jest, Supertest

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- PostgreSQL

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/cassandra18/lelann_bookshop.git
   cd lelann_bookshop
   ```

2. Install dependencies

   ``bash
     npm install
   ```

### Database Setup

1. Create a PostgreSQL database

  ```sql
  CREATE DATABASE lelann_bookshop;
  ```

2. Update he database configuration in `config/config.json`

   ```json
     {
      "development": {
        "username": "your_db_username",
        "password": "your_db_password",
        "database": "lelann_bookshop",
        "host": "127.0.0.1",
        "dialect": "postgres"
      }
    }
   ```

3. Run migrations to set up the database schema:

     ```bash
       npx sequelize-cli db:migrate
     ```

4. (Optional) Seed the database with initial data:

     ```bash
       npx sequelize-cli db:seed:all
     ```

### Running the Application

1. Start the server

     ```bash
       npm start
     ```

2. The server will be running at ```http://localhost:3000```.

### Running the Test

1. Run the tests using Jest:

  ```bash
    npm test
  ```

## Projeect Structure

```bash
  lelann_bookshop/
  ├── config/                 # Database configuration
  ├── migrations/             # Database migrations
  ├── models/                 # Sequelize models
  ├── seeders/                # Database seeders
  ├── tests/                  # Test cases
  ├── app.js                  # Express application
  ├── index.js                # Application entry point
  ├── package.json            # Project metadata and dependencies
  └── README.md               # Project documentation
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.

2. Create a new branch (git checkout -b feature-branch).

3. Make your changes.

4. Commit your changes (git commit -m 'Add some feature').

5. Push to the branch (git push origin feature-branch).

6. Open a pull request.

## License

This project is licensed under the ISC License. See the LICENSE file for details.

## Contact

For any inquiries, please contact Cassandra Lelei at cassandralelei12@gmail.com

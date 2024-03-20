
const path = require('path');
const Product = require('../models/product'); // Adjust the path as necessary
const connectDB = require('../../db'); // Assuming you have a module to connect to your MongoDB

// Function to read products from file and add them to the database
const populateProducts = async (items) => {
    try {
        // Connect to the database
        await connectDB();

        // Read the products data from the file
        const products = items

        // Insert each product into the database
        for (let productData of products) {
            const product = new Product(productData);
            await product.save();
            console.log(`Inserted product: ${product.name}`);
        }

        console.log('Finished inserting products.');
        process.exit();
    } catch (error) {
        console.error('Error inserting products:', error);
        process.exit(1);
    }
};

export default populateProducts();
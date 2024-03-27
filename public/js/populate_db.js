const fs = require('fs').promises; // Use fs promises for easier async operations
const path = require('path');
const Product = require('../../models/product'); // Adjust the path as necessary
const connectDB = require('../../db'); // Assuming you have a module to connect to your MongoDB
const { log } = require('console');

// Function to read products from file and add them to the database
// Function to read products from a JSON file and add them to the database
const populateProductsFromFile = async () => {
    try {
        // Connect to the database
        await connectDB();

        // Define the path for the JSON file
        const filePath = path.join(__dirname, 'products.json'); // Adjust 'products.json' if your file has a different name

        // Read the products data from the JSON file
        const data = await fs.readFile(filePath, 'utf8');
        const products = JSON.parse(data);

       

        // Insert each product into the database
        for (let productData of products.products) {
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

// Execute the function
populateProductsFromFile().catch(console.error);
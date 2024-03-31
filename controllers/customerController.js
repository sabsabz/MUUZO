// controllers/customerController.js
const customer = require('../models/customer');

// Create a new customer
exports.createcustomer = async (req, res) => {
    try {
        const newCustomer = new Customer(req.body);
        const savedCustomer = await newCustomer.save();
        res.status(201).json(savedCustomer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all customers
exports.getAllCustomers = async (req, res) => {
    try {
        const customers = await customers.find();
        res.status(200).json(customers);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a single customer by id
exports.getCustomerById = async (req, res) => {
    try {
        const customer = await CustomerMethod.findById(req.params.id);
        res.status(200).json(customers);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Update a customer by id
exports.updatecustomerById = async (req, res) => {
    try {
        const updateCustomer = await customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedCustomers);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a customer by id
exports.deleteCustomerById = async (req, res) => {
    try {
        await Customer.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Customer successfully deleted.' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

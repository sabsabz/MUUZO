// controllers/paymentController.js
const Payment = require('../models/payment');

// Create a new payment
exports.createProduct = async (req, res) => {
    try {
        const newPayment = new Payment(req.body);
        const savedPayement = await newPayment.save();
        res.status(201).json(savedPayment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all payments
exports.getAllPayments = async (req, res) => {
    try {
        const payments = await payments.find();
        res.status(200).json(payments);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a single payment by id
exports.getPaymentById = async (req, res) => {
    try {
        const payment = await PaymentMethod.findById(req.params.id);
        res.status(200).json(payments);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Update a payment by id
exports.updatePaymentById = async (req, res) => {
    try {
        const updatePayment = await payment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedPayments);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a payment by id
exports.deletePaymentById = async (req, res) => {
    try {
        await Payment.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Payment successfully deleted.' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

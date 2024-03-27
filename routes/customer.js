const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// Routes
router.post('/', customerController.createCustomer);
router.get('/', customerController.getAllCustomers);
router.get('/:id', customerController.getCustomerById);
router.put('/:id', customerController.updateCustomerById);
router.delete('/:id', customerController.deleteCustomerById);

module.exports = router;
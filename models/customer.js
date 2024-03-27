const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    Total: { type: Number, required: true },
    category: { type: String, required: true },
 // MongoDB automatically creates an _id field for each entry
});

module.exports = mongoose.model('Customer', CustomerSchema);
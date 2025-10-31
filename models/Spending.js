const mongoose = require('mongoose');

const spendingSchema = new mongoose.Schema({
    year: { type: Number, required: true },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    description: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Spending', spendingSchema);
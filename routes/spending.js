const express = require('express');
const Spending = require('../models/Spending');
const router = express.Router();

// Get all spending records
router.get('/', async (req, res) => {
    try {
        const spendings = await Spending.find();
        res.json(spendings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new spending record
router.post('/', async (req, res) => {
    const spending = new Spending(req.body);
    try {
        const newSpending = await spending.save();
        res.status(201).json(newSpending);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
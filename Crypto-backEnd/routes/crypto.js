var express = require('express');
var router = express.Router();

// Sample prices data
const prices = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$27,423.23', change: '+3.45%' },
    { name: 'Ethereum', symbol: 'ETH', price: '$1,723.50', change: '-1.12%' },
    { name: 'Ripple', symbol: 'XRP', price: '$0.52', change: '+2.08%' },
];

// API route to return the prices data
router.get('/api/prices', function(req, res, next) {
    res.json(prices);
});

module.exports = router;

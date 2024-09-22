const express = require('express');
const router = express.Router();
const carts = require('../data/carts.json');

router.get('/carts', (req, res) => {
    res.json(carts);
});

module.exports = router;
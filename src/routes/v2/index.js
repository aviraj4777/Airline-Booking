const express = require('express');

const router = express.Router();

router.get('/info', (req, res) => {
    return res.json({
        message: 'Welcome to the API v2'
    });
});

module.exports = router;
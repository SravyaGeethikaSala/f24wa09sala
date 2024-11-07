var express = require('express');
var router = express.Router();

// Handle GET request for '/computation'
router.get('/', function(req, res, next) {
    // Generate a random value between 1 and 10
    let randomValue = Math.random() * 9 + 1; 

    // If the query argument 'x' is provided, use it; otherwise use randomValue
    let x = req.query.x ? parseFloat(req.query.x) : randomValue;

    // Apply the Math.acosh() function to x
    let result = Math.acosh(x);

    // Send the result in the response
    res.send(`Math.acosh() applied to ${x} is ${result}`);
});

module.exports = router;
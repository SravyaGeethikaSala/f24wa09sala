var express = require('express');
var router = express.Router();

/* GET mydata page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shravya Geethika Sai Vemula' });
});

module.exports = router;

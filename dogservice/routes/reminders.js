var express = require('express');
var router = express.Router();

/* POST add new reminder. */
router.post('/reminders/add', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

/* GET reminders. */


module.exports = router;

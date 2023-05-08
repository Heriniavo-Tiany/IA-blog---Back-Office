var express = require('express');
var router = express.Router();

router.get('/login', function (req, res, next) {
    res.render('auth/login', { title: 'Login - Brain Data' });
});

router.post('/login', function (req, res, next) {

});

module.exports = router;

var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {

});

router.get('/new', function (req, res, next) {
    res.render('newBlog', { title: 'Login - Brain Data' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

router.get('/login', function (req, res, next) {
    res.render('auth/login', { title: 'Login - Brain Data' });
});

router.post('/login', function (req, res, next) {
    const username = req.body.email;
    const password = req.body.pwd;
    // Check if username and password are not empty
    if (!username || !password) {
        return res.render('auth/login', { title: 'Login', error: 'Please enter your username and password.' });
    }


    const query = "SELECT * FROM users WHERE email = $1  AND password = $2 AND role = 0 LIMIT 1";
    // const query = "SELECT * FROM users WHERE email = '"+ username +"'  AND password ='"+ password +"' AND role = 0 LIMIT 1";
    const values = [username, password];
    req.db.query(query, values, (err, result) => {
        if (err) {
            return next(err);
        }

        if (result.rows.length > 0) {
            // Set a cookie to keep the user logged in
            res.cookie('loggedIn', true);
            res.redirect('/blogs/new');
        } else {
            return res.render('auth/login', {title: 'Login', error: 'Invalid username or password.'});
        }

    });

});

module.exports = router;

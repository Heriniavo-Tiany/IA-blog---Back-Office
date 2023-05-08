var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {

});

router.get('/new', function (req, res, next) {
    res.render('newBlog', { title: 'Login - Brain Data' });
});

router.post('/new', function (req, res, next) {
    const title = req.body.title;
    const content = req.body.editor;

    const query = "INSERT INTO articles (title, content, author, category_id, thumbnail) VALUES ($1, $2, $3, $4, $5)";
    const values = [title, content, "Brain Data admin", 1, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/Advantages_and_Disadvantages_of_artificial_intelligence.jpg'];
    req.db.query(query, values, (err, result) => {
        if (err) {
            return next(err);
        }


            return res.redirect('/blogs/new');
    });
});

module.exports = router;

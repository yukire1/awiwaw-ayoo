var express = require('express');
var router = express.Router();
var connection = require('../library/database');
router.get('/', function(req, res, next) {

    connection.query('SELECT * FROM posts', function(error, rows, fields) {
        if (!!err) {
            req.flash('error', err);
            res.render('posts', {
                data : ''
            });
        } else {
            res.render('posts', {
                data : rows
            });
        }
    });
});

module.exports = router;
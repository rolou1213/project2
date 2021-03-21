var express = require('express');
var router = express.Router();
var storesCtrl = require('../controllers/stores');

// GET /students
router.get('/', storesCtrl.index);
router.get('/new', storesCtrl.new);
router.get('/:id', storesCtrl.show);
router.post('/create', storesCtrl.create);
router.post('/:id/reviews', storesCtrl.createReview);


/* GET home page. */

module.exports = router;

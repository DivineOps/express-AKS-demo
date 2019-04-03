var cv = require('../scripts/currentvisitor')
var express = require('express');
var router = express.Router();
var previousVisitor = 0;

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(cv);
  res.render('index', { title: 'Express' , visitorNumber: previousVisitor = cv.getCurrentVisitorNumber(previousVisitor) });
});

module.exports = router;
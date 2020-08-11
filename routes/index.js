var express = require('express');
var router = express.Router();
var vlccontrol = require('vlc-control-node');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'VLC Scheduler' });
});

module.exports = router;

var express = require('express');
var multer = require('multer');
var fs = require('fs');

var app = express();
var upload = multer({ dest: 'uploads/' });

app.set('views', './views');
app.set('view engine', 'pug');

app.post('/', upload.single('upfile'), function(req, res) {
  var size = req.file.size;
  fs.unlink(req.file.path);
  res.send({ size: size });
});

app.get('/', function (req, res) {
  res.render('index', { siteurl: req.protocol + '://' + req.get('host') });
});

app.listen(process.env.PORT || 8080, function () {
  console.log('App listening');
});
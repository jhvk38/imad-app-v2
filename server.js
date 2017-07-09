var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/tryout.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'tryout.html'));
});

app.get('/about.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'about.html'));
});

app.get('/services.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'services.html'));
});

app.get('/index2.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index2.html'));
});

app.get('/movieinfo.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'movieinfo.html'));
});

app.get('/movie.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'movie.html'));
});

var counter=0;
app.get('/counter',function(req,res){
   counter++;
   res.send(counter.toString());
});

var names=[];
app.get('/submit-name',function(req,res){
 var name=req.query.name;
 names.push(name);
 res.send(JSON.stringify(names));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/style2.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style2.css'));
});

app.get('/ui/style3.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style3.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/moviemain.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'moviemain.js'));
});

app.get('/ui/try.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'try.js'));
});

app.get('/ui/clownfish.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'clownfish.png'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/logo_html.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'logo_html.png'));
});

app.get('/ui/logo_css.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'logo_css.png'));
});

app.get('/ui/logo_brush.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'logo_brush.png'));
});

app.get('/ui/showcase.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'showcase.jpg'));
});
app.get('/ui/head.jpeg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'head.jpeg'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

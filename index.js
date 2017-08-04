var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//app.set('view engine', 'html');
//app.engine('html', ejs.renderFile);

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/about-me', function(request, response) {
  response.render('pages/about-me');
});

app.get('/dev-center', function(request, response) {
  response.render('pages/dev-center');
});

app.get('/getting-started-nodejs-heroku', function(request, response) {
  response.render('pages/getting-started-nodejs-heroku');
});

app.get('/flight-bookings', function(request, response) {
  response.render('pages/flight-bookings');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

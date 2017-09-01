// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Links html and api routes
var apiRoutes = require('./app/routing/api-routes.js');
var htmlRoutes = require('./app/routing/html-routes.js');

// Set up express app
var app = express();
var PORT = process.env.PORT || 8080;

// Set up express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Server routing 
apiRoutes(app);
htmlRoutes(app);

// Listen on port
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
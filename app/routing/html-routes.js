//console.log('HTML Route connected');

var path = require('path');

// Routes
function htmlRoutes(app) {

  // A GET Route to display the survey page
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

  // A default Route to display home.html
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
}

// Export htmlRoutes
module.exports = htmlRoutes;
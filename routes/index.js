module.exports = function(app){
  var path = require('path')
  /* GET home page. */
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
  })
  return app;
};
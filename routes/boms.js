module.exports = function(app, mongo){

  //post request to time records
  app.post('/boms', function(req, res) { 
    console.log(req.body);
	console.log('hello');
    if(req.body.parts){
      DB_SERVER.collection('pdfDatabase').insert(req.body.parts, function(err, result){
        if (err) throw err;
        else console.log('no error');
      });  
      console.log(req.body);
      console.log('got it');
      res.send({status: 'success'})
    }
    res.send({status: 'no data found'})
  })
 };
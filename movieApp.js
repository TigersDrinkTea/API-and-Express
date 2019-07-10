let request = require('request');
let express = require('express')
let app = express();

app.set('view engine', 'ejs');

app.get('/', function (req,res) {
res.render('search');
  });

app.get ('/results', function (req,res) {

  // below variable is the user search input (.query as it came from a url after the ?)
  var query =  req.query.formInput;
  
  var url = 'http://www.omdbapi.com/?s=' + query + '&apikey=thewdb';

  request(url, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the homepage.
    var parsedData = JSON.parse(body)
    res.render('results', {parsedData:parsedData});
  });
});

app.listen(3000, function(){
console.log('Server running on 3000!!');
});



// req.body is an object made from the fields inputted from a form.
// req.query is an object made from the fields inputted via a query string (the string after the '?' in the url).
// req.params is an object made from the fields inputted via the url path.

// In any URL anything after ? and is in a query string format is converted to app.query object.
// Body of a post request is captured by app.body (when using a proper middleware like body parser).
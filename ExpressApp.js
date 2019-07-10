var express = require('express');
var app = express();

// ROUTES //

app.get('/', function(request,response){
response.send('Hi There')
});

// the two arguments in the route function req and res are actually objects.
// the request object contains all the information about the request that was made.
// the respond contains all the information that we will respond with.
//request and response are shortened to req & res.

app.get('/bye', function(request,response){
  console.log('request made');
  
  response.send('Bye There felicia')
  });
  
 app.get('*', function(request,response){
    
    response.send('this page isnt here yet!')
    });


//START SERVER //
app.listen(3000, function() { 
    console.log('Server started on port 3000!!'); 
  });
  
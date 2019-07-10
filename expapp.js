var express = require('express');
var app  = express();

app.get('/', function(req,res){
    res.send('Hi and Welcome')
});

// the only parameter we need is the animal, we can then sub in the animal from re.params.animal.
// use the object to store and call the noise for each animal.
app.get('/speak/:animal', function(req,res){
    var animal = req.params.animal.toLowerCase();
    var animalSound = {
        pig:'OINK',
        dog:'WOOF',
        cow:'MOO',
        cat:'I HATE YOU'
    }
 var sound = animalSound[animal]
    res.send('The ' + animal + ' says "' + sound + '"')
});

// any time you want to add to something you sue an empty variable you then add to with a loop and +=
app.get('/repeat/:word/:number', function(req,res){
    var word = req.params.word;
    var numbers = Number(req.params.number);
    var result = '';
   for(i=0;i<= numbers;i++){
     result += word + ' ';
   }
 res.send(result);
});

app.get('*', function(req,res){
    res.send('what are you doing ??')
});

app.listen(3000, function() { 
    console.log('Server started on port 3000!!'); 
  });
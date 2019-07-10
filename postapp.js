var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var friends = ['Tony', 'Miranda', 'Justin', 'Billy', 'Pierre'];



app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function (req,res) {
    res.render('home');
} )

app.post('/addfriend', function (req,res) {
  var newFriend = req.body.newFriend;
    friends.push(newFriend);
res.redirect('/friends')
  });

app.get('/friends', function (req,res) {
  
res.render('friends', {friends:friends});
  });

app.listen(3000,function(){
    console.log('Server started on port 3000!!');
})


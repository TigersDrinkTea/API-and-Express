var express = require('express');
var app = express();

// this line tells express you want to use the public folder which is essentially your CSS.
app.use(express.static('public'));

// This allows you to leave off the .ejs each time you specify a page eg res.render(love) instead of res.render(love.ejs)
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('home');
});


app.get('/love/:thing', function (req, res) {
    var thing = req.params.thing;
    res.render('love', {
        thingVar: thing
    });
});

app.get('/blogposts', function (req, res) {

    //we use an object to store all the data to pass in to the posts page ejs template.
    // we can access this data via the {posts:posts} in the res.render. This signifies the variable posts here (which is an array full of objects holding all the posts) is the same value as the posts in the EJS /blogposts page/route
    var posts = [{
            title: 'Post1',
            author: 'Susan'
        },
        {
            title: 'Look at this hedgehog!',
            author: 'Baron'
        },
        {
            title: 'how good is tea, but really',
            author: 'Santa'
        }
    ];

    res.render('blogposts', {
        posts: posts
    })
});

app.get('*', function (req, res) {
    res.send('what ae you doing here?!')
})

app.listen(3000, function () {
    console.log('Server started on port 3000!!');
});
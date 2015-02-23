var express = require("express");
var app = express();

//port
var port = process.env.PORT || 1111;

//ip
var ip = "127.0.0.1";

app.use(express.static(__dirname));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

var movies = { "movies": [{
    "title": "The Dark Knight",
    "categories": ["Action","Superhero"],
    "year": 2008
  },
  {
    "title": "Star Wars",
    "categories": ["Action"],
    "year": 1977
  },
  {
    "title": "Sleepless In Seattle",
    "categories": ["Romance", "Comedy"],
    "year": 1993
  },
  {
    "title": "The Lion King",
    "categories": ["Children"],
    "year": 1994
  },
  {
    "title": "Toy Story",
    "categories": ["Children"],
    "year": 1995
  },
  {
    "title": "The Shawshank Redemption",
    "categories": ["Drama"],
    "year": 1994
  },
  {
    "title": "Gravity",
    "categories": ["Drama"],
    "year":2013
  },
  {
    "title": "Independence Day",
    "categories": [],
    "year": 1996
  },
  {
    "title": "Lord of The Rings: The Two Towers",
    "categories": ["Action"],
    "year": 2002
  },
  {
    "title": "Frozen",
    "categories": ["Children"],
    "year": 2014
  }]
}

app.get('/movies', function (req, res) {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.status(201);
  req.on('end', function() {
      res.end(JSON.stringify(movies));
  });
});

//log where we are listening
console.log("Listening on http://" + ip + ":" + port);

app.listen(port, ip);

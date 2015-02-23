var movieFilter = angular.module('movieFilterApp', [])

// controller for filtering movies
.controller('MovieFilterCtrl', function($scope, Movies) {
  angular.extend($scope, Movies);
})

// factoring for storig movie information
.factory('Movies', function() {
  // movie object
  // var movies = { "movies": [{
  //     "title": "The Dark Knight",
  //     "categories": ["Action","Superhero"],
  //     "year": 2008
  //   },
  //   {
  //     "title": "Star Wars",
  //     "categories": ["Action"],
  //     "year": 1977
  //   },
  //   {
  //     "title": "Sleepless In Seattle",
  //     "categories": ["Romance", "Comedy"],
  //     "year": 1993
  //   },
  //   {
  //     "title": "The Lion King",
  //     "categories": ["Children"],
  //     "year": 1994
  //   },
  //   {
  //     "title": "Toy Story",
  //     "categories": ["Children"],
  //     "year": 1995
  //   },
  //   {
  //     "title": "The Shawshank Redemption",
  //     "categories": ["Drama"],
  //     "year": 1994
  //   },
  //   {
  //     "title": "Gravity",
  //     "categories": ["Drama"],
  //     "year":2013
  //   },
  //   {
  //     "title": "Independence Day",
  //     "categories": [],
  //     "year": 1996
  //   },
  //   {
  //     "title": "Lord of The Rings: The Two Towers",
  //     "categories": ["Action"],
  //     "year": 2002
  //   },
  //   {
  //     "title": "Frozen",
  //     "categories": ["Children"],
  //     "year": 2014
  //   }]
  // }
  $http.get('/movies')
    .success(function(data, status, headers, config) {
        console.log('success');
        var movies = data;
        console.log(data)
      })
      .error(function(data, status, headers, config) {
        console.log('error');
      })
  return {
    movies: movies
  }
});


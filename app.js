var movieFilter = angular.module('movieFilterApp', [
  'ui.router'
])

// controller for filtering movies
.controller('MovieFilterCtrl', function($scope, Movies) {
  // extend the factory return to the controller
  angular.extend($scope, Movies);
})

// factory for requesting movie information
.factory('Movies', function() {
  // call to the server to get the movies
  $http.get('/movies')
    .success(function(data, status, headers, config) {
        console.log('success');
        // save the movies
        var movies = data;
      })
      .error(function(data, status, headers, config) {
        console.log('error');
      })
  // factory return the movies
  return {
    movies: movies
  }
})
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html',
      controller: 'MovieFilterCtrl'
    })
    .state('docs', {
      url: '/docs',
      templateUrl: 'docs/index.html',
    })
});


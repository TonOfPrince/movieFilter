angular.module('movieFilterApp.home', [])
// controller for filtering movies
.controller('MovieFilterCtrl', function($scope, $http) {
  // request the movies from the server
  $http.get('/movies')
    .success(function(data, status, headers, config) {
        console.log('success');
        // save the movies to scope
        $scope.movies = data;
      })
      .error(function(data, status, headers, config) {
        console.log('error');
      })
})

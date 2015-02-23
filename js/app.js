var movieFilter = angular.module('movieFilterApp',
  // dependencies
  [
    'ui.router',
    'movieFilterApp.home'
  ])


.config(function($stateProvider, $urlRouterProvider) {
  // default routing
  $urlRouterProvider.otherwise("/");

  //routing
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'MovieFilterCtrl'
    })
    .state('docs', {
      url: '/docs',
      templateUrl: 'docs/js/app.js.html',
    })
});


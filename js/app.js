var movieFilter = angular.module('movieFilterApp',
  [
    'ui.router',
    'movieFilterApp.home'
  ])


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


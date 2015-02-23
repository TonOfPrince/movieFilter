var movieFilter = angular.module('movieFilterApp',
  [
    'ui.router',
    'movieFilterApp.home'
  ])


.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

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


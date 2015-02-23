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
      templateUrl: 'docs/index.html',
    })
    .state('appDocs', {
      url: '/appDocs',
      templateUrl: 'docs/js/app.js.html',
    })
    .state('homeDocs', {
      url: '/homeDocs',
      templateUrl: 'docs/js/home.js.html',
    })
});


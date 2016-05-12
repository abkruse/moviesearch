(function() {
  angular
    .module('movieSearchApp', ['ngRoute'])
    .config(config);

  config.$inject = ['$routeProvider', '$locationProvider'];

  function config($routeProvider, $locationProvider)
    {
    $routeProvider
      .when('/', {
        templateUrl: '/search-feature/index.html',
        controller: 'searchController'
      })
      .when('/:imdbID', {
        templateUrl: '/show-feature/show.html',
        controller: 'showMovie'
      });
      $locationProvider.html5Mode(true);
    };
})();

(function() {
  angular
    .module('movieSearchApp')
    .controller('showMovie', showMovie)

    showMovie.$inject=['$scope', '$http','$routeParams'];

    function showMovie($scope, $http, $routeParams) {
      $scope.vm = this;
      var movieParams = $routeParams.imdbID;

      $http.get('http://www.omdbapi.com/?i=' + movieParams + '&plot=full').then( (data) => {
        $scope.vm.visMovie = data.data;
      });
    };

})();

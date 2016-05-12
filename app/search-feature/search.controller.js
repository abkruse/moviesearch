(function() {
  angular
    .module('movieSearchApp')
    .controller('searchController', searchController);

    searchController.$inject = ['$scope', '$http', '$location'];

    function searchController($scope, $http, $location)  {
      $scope.vm = this;

      $scope.searchSub = function() {
        var params = $scope.vm.searchParams;

        $http.get('http://www.omdbapi.com/?s=' + params ).then( (data) => {
          $scope.vm.movies = data.data.Search;
        });

        $scope.vm.searchParams = '';
      }
    }
})();

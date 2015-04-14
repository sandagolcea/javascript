app.controller('MainController', ['$scope','$http', 'forecast', function( $scope, $http, forecast) {
  $http.get('../js/apps.json').success(function(data){
    $scope.apps = data;
  });
  forecast.success(function(data){
    $scope.fiveDay = data;
  });
}]);
// TODO: ask about scope
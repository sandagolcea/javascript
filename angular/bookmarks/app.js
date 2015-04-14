var app = angular.module('bookMark', []);

app.controller('MainController', ['$scope', function($scope){
  $scope.test = 'Hello world!';
  $scope.links = [
    {title: 'post 1', likes: 4},
    {title: 'post 2', likes: 2},
    {title: 'post 3', likes: 7},
    {title: 'post 4', likes: 1}
  ];
  $scope.addLink = function(){
    $scope.links.push({title: $scope.title, likes: 0});
    $scope.title='';
  };
}]);
var app = angular.module('bookMark', []);

app.controller('MainController', ['$scope', function($scope){
  $scope.links = [
    {title: 'post 1', url: "#", likes: 4},
    {title: 'post 2', url: "#", likes: 2},
    {title: 'post 3', url: "#", likes: 7},
    {title: 'post 4', url: "#", likes: 1}
  ];
  $scope.addLink = function(){
    if(!$scope.title || $scope.title === '') {return;}
    $scope.links.push({title: $scope.title, url: $scope.url, likes: 0});
    $scope.title = '';
    $scope.url = '';
  };
  $scope.plusLike = function(link){
    link.likes += 1;
  }
}]);
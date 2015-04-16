var app = angular.module('bookMark', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('home', { 
    url: '/home', 
    templateUrl: '/home.html', 
    controller: 'MainController'
  })
  .state('links', {
    url: '/links/{id}',
    templateUrl: '/links.html',
    controller: 'LinksController'
  });
  $urlRouterProvider.otherwise('home');
}]);

app.factory('links', [function(){
  var my_object = {
    links: [
    {title: 'book link 1', url: "#", likes: 4},
    {title: 'book link 2', url: "#", likes: 2},
    {title: 'book link 3', url: "#", likes: 7},
    {title: 'book link 4', url: "#", likes: 1}
    ]
  };
  return my_object
}]);

app.controller('MainController', ['$scope','links', function($scope, links){
  $scope.links = links.links;
  $scope.addLink = function(){
    if(!$scope.title || $scope.title === '') {return;}
    $scope.links.push({
      title: $scope.title, 
      url: $scope.url, 
      likes: 0,
       comments: [
          {author: 'Jack', body: 'Great site!', upvotes: 0},
          {author: 'John', body: 'Very useful page, I come back to this again and again!', upvotes: 0}
        ]
    });
    $scope.title = '';
    $scope.url = '';
  };
  $scope.plusLike = function(link){
    link.likes += 1;
  }
}]);

app.controller('LinksController', ['$scope','$stateParams', 'links' , function(){
  $scope.link = links.links[$stateParams.id];
}]);
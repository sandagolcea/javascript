app.controller('MainController', ['$scope', function($scope) {
  $scope.move = {
    icon: 'img/move.jpg',
    title: 'MOVE',
    developer: 'MOVE, Inc.',
    price: 0.99
  };

  $scope.shutterbugg = {
    icon: 'img/shutterbugg.jpg',
    title: 'Shutterbugg',
    developer: 'Chico Dusty',
    price: 2.99
  };

  $scope.gameboard = {
    icon: 'img/gameboard.jpg',
    title: 'Gameboard',
    developer: 'Armando Perez',
    price: 1.99
  };

  $scope.forecast = {
    icon: 'img/forecast.jpg',
    title: 'Forecast',
    developer: 'Forecast',
    price: 1.99
  };
  
  $scope.apps = [ 
  { 
    icon: 'img/move.jpg', 
    title: 'MOVE', 
    developer: 'MOVE, Inc.', 
    price: 0.99 
  }, 
  { 
    icon: 'img/shutterbugg.jpg', 
    title: 'Shutterbugg', 
    developer: 'Chico Dusty', 
    price: 2.99 
  },
  { 
    icon: 'http://media.tumblr.com/tumblr_m8gi78MEHG1rrz5dx.jpg', 
    title: 'Eat With', 
    developer: 'Clint Bark', 
    price: 3.99 
  },
  {
    icon: 'img/forecast.jpg',
    title: 'Forecast',
    developer: 'Forecast',
    price: 1.99
  },
  {
    icon: 'http://www.bencaro.com/wp-content/uploads/2014/02/IMG_0330.jpg', 
    title: 'Hipcooks', 
    developer: 'Claire Hausmann', 
    price: 2.99 
  }
  ];
}]);
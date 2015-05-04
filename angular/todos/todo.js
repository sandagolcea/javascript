var app = angular.module('todo', []);

app.controller('TodoController', function($scope){
  console.log('hallochen');
  $scope.tasks = [{ 
    description: 'learn angular y-day',
    done: false
  },
  { 
    description: 'learn angular today',
    done: true
  }];
  $scope.addTask = function(){
    $scope.tasks.push($scope.newTask);
    $scope.newTask = false;
    $scope.newTodoForm.$setPristine;
  };
  $scope.removeTask = function(task){
    task.done = true;
  };
  $scope.resetTask = function(task){
    task.done = false;
  };
});


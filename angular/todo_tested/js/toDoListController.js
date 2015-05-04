toDoList.controller('ToDoListController', function($scope){
  var self = this;

  self.itemList = [];

  $scope.addItem = function(){
    self.itemList.push({'name': $scope.newItem, 'isCompleted': false});
    $scope.newItem = "";
    $scope.addItemForm.$setPristine;
  };

  $scope.clearCompleted = function(){
    self.itemList = self.itemList.filter(function(item){
      return !item.isCompleted;
    });
  };

});

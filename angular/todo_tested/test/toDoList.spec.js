describe('ToDoListController', function() {

  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('ToDoListController', {
        $scope: scope
    });
  }));

  describe('initializes with', function(){
    it('an empty ToDo item list', function() {
      expect(ctrl.itemList).toEqual([]);
    });
    it('a total task count of zero', function(){
      expect(ctrl.itemList.length).toEqual(0);
    });
  });
});


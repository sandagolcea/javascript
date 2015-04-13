app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];
  
  $scope.mains = [{
    name: 'Penne con Zuchinni',
    description: 'Penne rigatte with zuchinni, cherry tomatoes and pancetta with a topping of parmegianno',
    price: 5.89
  },
  {
    name: 'Lasagna',
    description: 'Layers of cheese, meat, and pasta for a traditional oven cooked lasagna',
    price: 7.50
  },
  {
    name: 'Spaghetti Carbonara',
    description: 'Wonderfully traditional carbonara: made with the finest italian cheese and house cured pancetta',
    price: 7.00
  }];
  
  $scope.extras = [
  {
    name:'Tiramisu', description:'Coffee-flavoured  ladyfingers, layered with a whipped mixture of eggs, sugar, and mascarpone', price: 3.00 
  },
  {
    name:'Panna cotta', description:'Cream, egg white and honey served with raspberry deliciousness', price: 3.00
  },
  {
    name:'Raspberry and Mascarpone Tart', description:'Delicious shortcrust pastry and dark chocolate made with the best house mascarpone', price: 3.00
  }];
}]);
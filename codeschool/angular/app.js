
(function () {
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.product = gem;
  });

  var gem = {
    name: 'Ruby',
    price: 15.56,
    description: 'Red gemstone, color caused by chromium element.Prices of rubies are primarily determined by color. The brightest and most valuable "red" called blood-red, commands a large premium over other rubies of similar quality. Diamonds are graded using criteria that have become known as the four Cs, namely color, cut, clarity and carat weight. Similarly natural rubies can be evaluated using the four Cs together with their size and geographic origin.' ,
    canPurchase: true,
    soldOut: false
  }
})();

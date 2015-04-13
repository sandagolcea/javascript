
(function () {
  var app = angular.module('store', ['store-products']);

  app.controller('StoreController', ['$http',function ($http) {
    var store = this;
    $http.get('/products.json').success(function(data){
      store.products = data;
    });
  }]);

  app.controller('GalleryController', function () {
    this.current = 0;
    this.setCurrent = function(value){
      this.current = value || 0;
    };
  });

  app.controller('ReviewController', function () {
    this.review = {};
    this.addReview = function (product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });
})();

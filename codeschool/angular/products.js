(function(){
  var app = angular.module('store-products',[]);
  app.directive('productInfo', function () {
    return {
      restrict: 'E',
      templateUrl: 'product-info.html'
    };
  });

  app.directive('productPanels', function () {
    return {
      restrict: 'E',
      templateUrl: 'product-panels.html',
      controller: function () {
        this.tab = 1;
        this.selectTab = function(tabNr){
          this.tab = tabNr;
        };
        this.isSelected = function(tabNr){
          return this.tab === tabNr;
        };
      },
      controllerAs: 'panel'
    }
  });

  app.directive('productGallery', function () {
    return {
      restrict: 'E',
      templateUrl: 'product-gallery.html',
      controller: function () {
        this.current = 0;
        this.setCurrent = function(imageNumber){
          this.current = imageNumber || 0;
        };
      },
      controllerAs: 'gallery'
    };
  });
})();
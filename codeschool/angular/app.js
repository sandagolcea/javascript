
(function () {
  var app = angular.module('store', []);

  app.controller('StoreController', function () {
    this.products = gems;
  });

  app.controller('PanelController', function () {
    this.tab = 1;
    this.selectTab = function(tabNr){
      this.tab = tabNr;
    };
    this.isSelected = function(tabNr){
      return this.tab === tabNr;
    };
  });

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

  var gems = [{
    name: 'Sapphire',
    price: 35.56,
    description: 'Blue Gemstone. Trace amounts of elements such as iron, titanium, chromium, copper, or magnesium can give corundum respectively blue, yellow, purple, orange, or green color. Chromium impurities in corundum yield pink or red tint, the latter being called ruby.' ,
    images: [
      "images/sapphire_big.jpg",
      "images/sapphire_small.jpg"
    ],
    reviews: [{
      stars: 5,
      body: 'Love the color!',
      author: 'john@lovers.com',
      createdOn: 1428783193376
    }],
    canPurchase: true,
    soldOut: false
    },
    {
    name: 'Ruby',
    price: 45.56,
    description: 'Red gemstone, color caused by chromium element.Prices of rubies are primarily determined by color. The brightest and most valuable "red" called blood-red, commands a large premium over other rubies of similar quality. Diamonds are graded using criteria that have become known as the four Cs, namely color, cut, clarity and carat weight. Similarly natural rubies can be evaluated using the four Cs together with their size and geographic origin.' ,
    images: [
      "images/ruby_big.jpg",
      "images/ruby_small.jpg"
    ],
    reviews: [{
      stars: 3,
      body: 'I like the gemstone but I think it is overpriced!',
      author: 'joanna@lovers.com',
      createdOn: 1428783193376
    }],
    canPurchase: true,
    soldOut: false
    },
    {
    name: 'Jade',
    price: 15.2,
    description: 'Green ornamental rock made up of different silicate minerals, the higher the iron content the greener the colour. The gem form of the mineral is a microcrystalline interlocking crystal matrix. Considered a sacred gemstone in different ancient civilizations such as the Maya.' ,
    images: [
      "images/jade_big.jpg",
      "images/jade_small.jpg"
    ],
    reviews: [{
      stars: 2,
      body: 'I thought this would be more shiny, just looks like a regular rock..',
      author: 'jasmine@lovers.com',
      createdOn: 1428783193376
    },
    {
      stars: 4,
      body: 'This is a really lovely stone, the cut could be better',
      author: 'janine@lovers.com',
      createdOn: 1428783193376
    }],
    canPurchase: true,
    soldOut: false
  }]
})();

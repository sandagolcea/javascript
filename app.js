(function () {
  var app = angular.module('bookstore', []);

  app.controller('BookController', function() {
    this.products = books

  });

  var books = [
                {
                  title: 'Pratical Object-Oriented Design in Ruby',
                  description: 'Learn OOP the right way! Sandi Metz explains how to best behave when we write a program',
                  author: 'Sandi Metz',
                  read: false, 
                },

                {
                  title: 'Eloquent Javascript',
                  description: 'A modern introduction to programming in JavaScript',
                  author: 'Marijn Haverbeke',
                  read: false, 
                }
              ];

})();
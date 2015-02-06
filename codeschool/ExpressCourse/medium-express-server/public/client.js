$(document).ready( function(){
  $.get('/cities', appendToList);

  function appendToList(cities){
    var list=[];
    var photos=[];

    for (var i in cities) {
      list.push( $('<li>', { text: cities[i] } ) );
    }

    for (var i in cities) {
      photos.push( $('<img>', { src: 'http://'+cities[i]+'.jpg.to' , alt: cities[i] } ) );
    }
    
    $('.city-list').append(list);
    $('#photos').append(photos);
  }
});
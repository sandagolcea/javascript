$(document).ready( function(){
  $.get('/cities', appendToList);

  function appendToList(cities){
    var list=[];
    var photos=[];

    for (var i in cities) {
      // with list approach
      // list.push( $('<li>', { text: cities[i] } ) );
      list.push( $('<li>', { text: i } ) );
    }

    for (var i in cities) {
      // with list approach
      // photos.push( $('<img>', { src: 'http://'+cities[i]+'.jpg.to' , alt: cities[i] } ) );
      photos.push( $('<img>', { src: 'http://'+i+'.jpg.to' , alt: cities[i] } ) );
    }
    
    $('.city-list').append(list);
    $('#photos').append(photos);
  }
});
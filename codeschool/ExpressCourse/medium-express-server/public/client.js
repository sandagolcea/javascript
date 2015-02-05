$(document).ready( function(){
  $.get('/cities', appendToList);

  function appendToList(cities){
    var list=[];
    for (var i in cities) {
      list.push( $('<li>', { text: cities[i] } ) );
      list.push( $('<img>', { src: 'http://'+cities[i]+'.jpg.to' } ) );
    }
    $('.city-list').append(list);
  }
});
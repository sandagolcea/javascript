$(document).ready( function(){

  $.get('/cities', appendToList);

  $('form').on('submit', function(event){

    event.preventDefault();
    var formData = $(this).serialize();
    console.log("***form data: "+formData);

    $.ajax({ type:'POST', url: '/cities', data: formData }).done(function(formData){
      appendToList([formData]);
      // clear form fields
      $('form').trigger('reset');
    });

  });

  function appendToList(cities){
    var list=[];
    var photos=[];
    console.log("***Data to append:"+cities);

    for (var i=0; i<cities.length; i++) {
      // with list approach
      // list.push( $('<li>', { text: cities[i] } ) );
      console.log("***My data is: "+cities[i]);
      list.push( $('<li>', { text: cities[i] } ) );
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
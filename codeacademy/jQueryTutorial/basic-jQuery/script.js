$(document).ready(function() {
    // A basic example of fadeOut on the div element:
    // $( 'div' ).fadeOut(1000);
    $('#green').fadeOut(2000);
    $('#notready').fadeOut(3000);
    $('#blue').slideDown('slow');

    $('#button').mouseenter(function(){
      $('#button').fadeTo('fast', 1);
    });
});


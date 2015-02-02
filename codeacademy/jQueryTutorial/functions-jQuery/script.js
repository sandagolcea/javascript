$(document).ready(function() {

    $('button').click(function() {
      $('.vanish').fadeOut('slow');
    });

    $('.square').click(function(){
      $(this).fadeOut('slow');
    });

    $('.pull-me').click(function(){
        $('.my-panel').slideToggle('slow');
    });

});
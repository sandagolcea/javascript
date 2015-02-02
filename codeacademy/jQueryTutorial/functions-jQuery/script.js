$(document).ready(function() {

    // Row 1 Col 1
    $('button').click(function() {
      $('.vanish').fadeOut('slow');
    });

    // Row 1 Col 2
    $('.square').click(function(){
      $(this).fadeOut('slow');
    });

    // Row 1 Col 3
    $('.pull-me').click(function(){
        $('.my-panel').slideToggle('slow');
    });

    // Row 2 Col 1
    $('#text').click(function(){
        $(this).toggleClass('highlighted');
    });

    // Row 2 Col 2
    $('#click-link').click(function(){
      $('#row2-col2').append("<p>I like it! click me again!!</p>");
    });

    $('#paragraph').click(function(){
      $(this).html("jQuery magic in action!");  
    });
    

    // Row 2 Col 3
    $('#blue-box').mouseover(function(){
      $(this).height("200px");
      $(this).width("200px");
      $(this).css("border-radius","10px");
    });

    $('#blue-box').mouseleave(function(){
      $(this).height("150px");
      $(this).width("150px");
      $(this).css("border-radius","0px");
    });
});
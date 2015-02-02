##basic-jQuery

This script does the following:

* creates a dissapearing square with $('#id').fadeOut(1000);
* creates a sliding square with (css display:none) $('#id').slideDown('slow');
* creates a button that fades to 100% on mouseover:    
  `$('#button').mouseenter(function(){  
      $('#button').fadeTo('fast', 1);  
    });  `

* and fades back to 50% on mouseleave:   
  `    $('div').mouseleave(function(){  
        $('div').fadeTo('fast',0.5);  
    });  `
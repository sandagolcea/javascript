var cbpAnimatedHeader = (function() {

    var docElem = document.documentElement,
        header = document.querySelector( '.header' ),
        didScroll = false,
        changeHeaderOn = 300;
     
    function init() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 250 );
            }
        }, false );
    }
     
    function scrollPage() {
        var sy = scrollY();
        var el = document.getElementById("header");
        if ( sy >= changeHeaderOn ) {
            classie.add( el, "header-shrink" );
        }
        else {
            if (classie.has(el,"header-shrink")) {
                classie.remove( el, "header-shrink" );
            }
        }
        didScroll = false;
    }
     
    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }
     
    init();
     
    })();
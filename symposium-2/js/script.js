$(document).ready(function(){





$(".stop-animation").click(function(){
        $('.ticker-move-1').toggleClass('ticker-stop-1');
        $('.ticker-move-2').toggleClass('ticker-stop-2');
        $('.ticker-move-3').toggleClass('ticker-stop-3');
        $('.scroll-1, .scroll-2, .scroll-3').toggleClass('scroll-stop');
        


    
    if ( $( '.ticker-move-1' ).hasClass( 'ticker-stop-1') ) {
        $('.stop-animation').html("Enable Animation");
    }

    else {
        $('.stop-animation').html("Disable Animation");
 
    }

});









$("#nav-icon").click(function(){
        $("#nav-page").removeClass("nav-off");
        $('body').addClass("fixed-position");

    });

    $("#close").click(function(){
        $("#nav-page").addClass("nav-off");
        $('body').removeClass("fixed-position");

    });


    $( "#nav-page" ).append( "" );



    });





















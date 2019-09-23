$(document).ready(function(){





$(".stop-animation").click(function(){
        $('.ticker-move-1').toggleClass('ticker-stop-1');
        $('.ticker-move-2').toggleClass('ticker-stop-2');
        $('.ticker-move-3').toggleClass('ticker-stop-3');
        $('.ticker-move-4').toggleClass('ticker-stop-4');

        $('#move-1').attr('src','img/top-color-stop.jpg');
        $('#move-2').attr('src','img/middle-color-stop.jpg');
        $('#move-3').attr('src','img/bottom-color-stop.jpg');
    
    if ( $( '.ticker-move-1' ).hasClass( 'ticker-stop-1') ) {
        $('.stop-animation').html("Enable Animation");
    }

else {
        $('.stop-animation').html("Disable Animation");
        $('#move-1').attr('src','img/top-color.gif');
        $('#move-2').attr('src','img/middle-color.gif');
        $('#move-3').attr('src','img/bottom-color.gif');
 
    }

});



$('.ticker-move-3').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
    function(e) {
    
    // code to execute after animation ends
    $('.stop-animation').html("Enable Animation");
    $('.ticker-move-1').addClass('ticker-stop-1');
    $('.ticker-move-2').addClass('ticker-stop-2');
    $('.ticker-move-3').addClass('ticker-stop-3');
    $('.ticker-move-4').addClass('ticker-stop-4');
    
    

 });







});



$(document).ready(function(){



var findBlueOn = function () {
    if ( $('body').hasClass( "blue" ) ) {
        $( '.subtitle-02-off' ).addClass('on');
    }
}

var findBlueOff = function () {
    if ( $('body').hasClass( "blue" ) ) {
        $( '.subtitle-02-off' ).removeClass('on');
    }
}  

var findYellowOn = function () {
    if ( $('body').hasClass( "yellow" ) ) {
        $( '.subtitle-01-off' ).addClass('on');
    }
}

var findYellowOff = function () {
    if ( $('body').hasClass( "yellow" ) ) {
        $( '.subtitle-01-off' ).removeClass('on');
    }
} 




$(".series-00").mouseenter(function(){
    $('body').addClass('body-series-00');
    findBlueOff();
    findYellowOff();
});

$(".series-00").mouseleave(function(){
    $('body').removeClass('body-series-00');   
    findBlueOn();   
    findYellowOn();

});


$(".about-00").mouseenter(function(){
    $('body').addClass('body-series-00');
    $('.img-subtitle-00-off').addClass('on');
   findBlueOff();
});

$(".about-00").mouseleave(function(){
    $('body').removeClass('body-series-00');
    $('.img-subtitle-00-off').removeClass('on');
    findBlueOn(); 
    findYellowOn();
});




$(".series-01").mouseenter(function(){
    $('body').addClass('body-series-01');
    $('.subtitle-01-off').addClass('on');
    $('.img-subtitle-01-off').addClass('on');
   findBlueOff();
});

$(".series-01").mouseleave(function(){
    $('body').removeClass('body-series-01');
    $('.subtitle-01-off').removeClass('on');
    $('.img-subtitle-01-off').removeClass('on');
    findBlueOn(); 
    findYellowOn();
});







$(".series-02").mouseenter(function(){
    $('body').addClass('body-series-02');
    $('.subtitle-02-off').addClass('on');
    $('.img-subtitle-02-off').addClass('on');  
    findYellowOff();
});

$(".series-02").mouseleave(function(){
    $('body').removeClass('body-series-02');
    $('.subtitle-02-off').removeClass('on');
    $('.img-subtitle-02-off').removeClass('on');
    findBlueOn();   
    findYellowOn(); 
});








var noticeClick = function () {
    $(".series-02-images").toggleClass('series-02-images-next');
    $('.text-button').toggleClass('text-button-2');
}

$('.text-button').click(noticeClick);












});
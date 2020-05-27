$(document).ready(function () {
    

    $(".close").click(function(){
        $("#pretend-page").addClass("pg-none");
        $("#body-page").addClass("pg-none");
        $('.container').removeClass("no_scroll");
        $('footer').removeClass("foot-hold");

    });




$(".img-item").click(function(){
  $(this).toggleClass("img-item-big");
});

$(".click").click(function(){
  $(this).toggleClass("img-item-big-gif");
});














    });







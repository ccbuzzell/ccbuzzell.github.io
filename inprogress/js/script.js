$(document).ready(function () {
    

    $(".close").click(function(){
        $("#pretend-page").addClass("pg-none");
        $("#body-page").addClass("pg-none");
        $('.container').removeClass("no_scroll");
        $('footer').removeClass("foot-hold");

    });




 $("#pretend").click(function(){
        $("#pretend-page").removeClass("pg-none");
        $('.container').addClass("no_scroll");
        $('footer').addClass("foot-hold");

 
    }); 

    $("#body").click(function(){
        $("#body-page").removeClass("pg-none");
        $('.container').addClass("no_scroll");
        $('footer').addClass("foot-hold");

 
    });    
















    });







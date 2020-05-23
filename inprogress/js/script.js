$(document).ready(function () {
    

    $(".close").click(function(){
        $("#keeper-page").addClass("pg-none");
        $("#pretend-page").addClass("pg-none");
        $("#body-page").addClass("pg-none");
        $('.container').removeClass("no_scroll");
        $('footer').removeClass("foot-hold");

    });





   



$("#keeper").click(function(){
        $("#keeper-page").removeClass("pg-none");
        $('.container').addClass("no_scroll");
        $('footer').addClass("foot-hold");

 
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







$(document).ready(function(){






	$("#about-two-click").click(function(){
        $("#two-page").removeClass("off");
        //$(".main").addClass("off");

    });

    $("#close").click(function(){
        $("#two-page").addClass("off");
        //$(".main").removeClass("off");

    });






var noticeClick = function () {
    $(".series-02-images").toggleClass('series-02-images-next');
    $('.text-button').toggleClass('text-button-2');
}

$('.text-button').click(noticeClick);












});
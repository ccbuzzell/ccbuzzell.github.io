$(document).ready(function () {
    


    $("#work").click(function(){
        $("#nav-page").removeClass("nav-off");

    });

    $("#close").click(function(){
        $("#nav-page").addClass("nav-off");

    });




});





function BookLoad () {
    var imgs=images(3),
        last;
    function images(count){
        var images=[];
        for ( var i = 1; i <= count; i++ ) {
            images.push("imgs/books/books" + i + ".gif");
        }
        return images;
    }
    function randomImg_m() {
        var imgNum_m= Math.floor(Math.random() * imgs.length);
        while (last===imgNum_m) { // make sure the image is not the same as the last!
            imgNum_m = Math.floor(Math.random() * imgs.length);
        }
        last = imgNum_m;
        return imgs[imgNum_m];
    }
    function loop() {
        var aRandomImage = randomImg_m();
        $("<img>").hide().appendTo("#books").on("load", function(e) {
            $("#books img:last").fadeIn(0);
            $("#books img:first").fadeOut(0,function(){ $(this).remove()})
        
        }).attr("src",aRandomImage)
    }
     document.write("<img src='" + randomImg_m() + "'>");
    //setInterval(loop, 5000) // every few seconds
}





function CatLoad () {
    var imgs=images(3),
        last;
    function images(count){
        var images=[];
        for ( var i = 1; i <= count; i++ ) {
            images.push("imgs/catalogs/cat" + i + ".jpg");
        }
        return images;
    }
    function randomImg_m() {
        var imgNum_m= Math.floor(Math.random() * imgs.length);
        while (last===imgNum_m) { // make sure the image is not the same as the last!
            imgNum_m = Math.floor(Math.random() * imgs.length);
        }
        last = imgNum_m;
        return imgs[imgNum_m];
    }
    function loop() {
        var aRandomImage = randomImg_m();
        $("<img>").hide().appendTo("#catalogs").on("load", function(e) {
            $("#catalogs img:last").fadeIn(0);
            $("#catalogs img:first").fadeOut(0,function(){ $(this).remove()})
        
        }).attr("src",aRandomImage)
    }
    document.write("<img src='" + randomImg_m() + "'>");
    //setInterval(loop, 2500) // every few seconds
}


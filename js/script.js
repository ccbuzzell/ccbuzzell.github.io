$(document).ready(function () {
    


    $("#work").click(function(){
        $("#nav-page").removeClass("nav-off");

    });

    $("#close").click(function(){
        $("#nav-page").addClass("nav-off");

    });


    $( "#nav-page" ).append( "<li><a href='books.html'>Books</a></li><li><a href='searchhistory.html'>Loops</a></li><li><a href='motion.html'>Motion + Video</a></li><li><a href='haunt.html'>Haunt</a></li><li><a href='identity.html'>Identity + Web</a></li><li><a href='shop.html'>Copy Shop</a></li>" );


});





function BookLoad () {
    var imgs=images(5),
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





function IdLoad () {
    var imgs=images(3),
        last;
    function images(count){
        var images=[];
        for ( var i = 1; i <= count; i++ ) {
            images.push("imgs/identity/id" + i + ".gif");
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



function VidLoad () {
    var imgs=images(2),
        last;
    function images(count){
        var images=[];
        for ( var i = 1; i <= count; i++ ) {
            images.push("imgs/videos/vid" + i + ".gif");
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




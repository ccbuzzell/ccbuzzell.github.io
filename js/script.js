$(document).ready(function () {
    


    $("#work").click(function(){
        $("#nav-page").removeClass("nav-off");

    });

    $("#close").click(function(){
        $("#nav-page").addClass("nav-off");

    });


<<<<<<< HEAD
    $( "#nav-page" ).append( "<li><a href='books.html'>Books</a></li><li><a href='searchhistory.html'>Loops</a></li><li><a href='motion.html'>Motion</a></li><li><a href='exhibition.html'>Exhibition</a></li><li><a href='haunt.html'>Haunt</a></li><li><a href='video.html'>Video</a></li><li><a href='identity.html'>Identity + Web</a></li><li><a href='shop.html'>Copy Shop</a></li>" );
=======
>>>>>>> 5654c21209827bbffd435c192f0f40c28309086e


});





function BookLoad () {
<<<<<<< HEAD
    var imgs=images(5),
=======
    var imgs=images(3),
>>>>>>> 5654c21209827bbffd435c192f0f40c28309086e
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





<<<<<<< HEAD
function IdLoad () {
=======
function CatLoad () {
>>>>>>> 5654c21209827bbffd435c192f0f40c28309086e
    var imgs=images(3),
        last;
    function images(count){
        var images=[];
        for ( var i = 1; i <= count; i++ ) {
<<<<<<< HEAD
            images.push("imgs/identity/id" + i + ".gif");
=======
            images.push("imgs/catalogs/cat" + i + ".jpg");
>>>>>>> 5654c21209827bbffd435c192f0f40c28309086e
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

<<<<<<< HEAD


function VidLoad () {
    var imgs=images(3),
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



=======
>>>>>>> 5654c21209827bbffd435c192f0f40c28309086e

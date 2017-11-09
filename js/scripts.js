$( document ).ready(function() {
    console.log( "ready!" );
});

/*document.addEventListener('DOMContentLoaded', function(){
    button = document.getElementById('slide');
    button.onclick = function () {
        // document.getElementById('container').scrollTop += 20;
        document.getElementById('container').scrollLeft(400);
    };
}, false);

// var scrollLeft = 0;
*/

document.ready(function myFunction() {
    var elmnt = document.getElementById("myDIV");
    var x = elmnt.scrollLeft;
    var y = elmnt.scrollTop;
    document.getElementById ("demo").innerHTML = "Horizontally: " + x + "px<br>Vertically: " + y + "px";
})

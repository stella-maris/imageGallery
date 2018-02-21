(function() {
    var navbar = document.getElementsByTagName("nav")[0];
    navbar.style.display = "none";
    
    window.onscroll = function() {
    console.log('scrolling');
        navbar.style.display = "block";
        setTimeout(function () {
            navbar.style.position = "fixed";
            navbar.style.top = "0px";
            //slide into view
            //position fixed
        }, 500);
    };
})()
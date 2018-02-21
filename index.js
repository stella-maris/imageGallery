(function() {
    window.onscroll = function() {
    console.log('scrolling');
        var navbar = document.getElementsByTagName("nav")[0];
        setTimeout(function () {
            navbar.style.position = "fixed";
            //slide into view
            //position fixed
        }, 500);
    };
})()
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
            //hide navbar when page is at top
        }, 500);
    };
    
    var wrapper = document.getElementsByClassName("wrapper");
    
    function expandImage() {
        if (this.classList.contains("open")) {
            this.style.zIndex = 0;
        } else {
            this.style.zIndex = 10;
        }
        this.classList.toggle("open");    
    };

    for (i = 0; i < wrapper.length; i++) {
        wrapper[i].addEventListener("click", expandImage);
    } 
})()
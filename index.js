(function() {
    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.toggle('fadeIn');
    
    window.onscroll = function() {
        console.log('scrolling');
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
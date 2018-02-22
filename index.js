(function() {
    var navbar = document.getElementsByTagName("nav");
    for (i = 0; i < navbar.length; i++) {
        navbar[i].classList.toggle('fadeIn');
    }
    
    
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

    for (j = 0; j < wrapper.length; j++) {
        wrapper[j].addEventListener("click", expandImage);
    } 
})()
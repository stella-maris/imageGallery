(function() {
    //Animation for navbar
    var navbar = document.getElementsByTagName("nav");
    for (i = 0; i < navbar.length; i++) {
        navbar[i].classList.toggle('fadeIn');
    }
    
//    window.onscroll = function() {
//        console.log('scrolling');
//    };
    
    //Animation to enlarge clicked images
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
    
    //Animation for mobile hamburger menu
    var burger = document.getElementsByClassName("burger");
    function animateHamburger() {
        if (this.classList.contains("open")) {
            //show dropdown menu
        } else {
            //hide dropdown menu
        }
        this.classList.toggle("open");
    }
    for (k = 0; k < burger.length; k++) {
        burger[k].addEventListener("click", animateHamburger);
    }
})()
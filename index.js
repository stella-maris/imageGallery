(function() {
    //Animation for navbar
    var navbar = document.getElementsByTagName("nav");
    for (i = 0; i < navbar.length; i++) {
        navbar[i].classList.toggle('fadeIn');
    }
    
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
            //hide dropdown menu
            document.getElementById("mobile").classList.remove("open");
            document.getElementsByTagName("nav")[0].style.height = null;
            
        } else {
            document.getElementById("mobile").classList.add("open");
            document.getElementsByTagName("nav")[0].style.height = "140px";
        }
        this.classList.toggle("open");
    };
    for (k = 0; k < burger.length; k++) {
        burger[k].addEventListener("click", animateHamburger);
    }
    
    
    //About me button
    var facts = [
        "I had a monkey steal my glasses.",
        "I was accidentally lit on fire by a firework in Cusco, Peru.",
        "I'm a huge Jackie Chan fan.",
        "I had my own educational TV show in South Korea.",
        "I love architecture of libraries.",
        "Doing all these functions in pure vanilla javascript instead of jQuery was an experience.",
        "I think I'm starting to love Java more.",
        "I can only ever remember one line from any song.",
        "I like mapping out the DOM tree.",
        "I would love to make more animations.",
        "I am fluent in Korean and Spanish"
    ];
    
    var clickedBtn = document.getElementById("myFactBtn");
    //verify element != null or false
    if (clickedBtn) {
        clickedBtn.addEventListener("click", function() {
            event.preventDefault();
            var myFact = facts[Math.floor(Math.random()*facts.length)];
            var fact = document.getElementById('myFact');
            fact.innerHTML = myFact;    
        });
    }
})()
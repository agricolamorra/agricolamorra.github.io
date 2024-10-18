var slideIndex = 0;

function changeSlide(milliseconds, slideIndex) {
    var slides = document.getElementsByClassName("slide");
    
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    var isMobile = (window.innerWidth / window.innerHeight) < 3/4;
    if (isMobile) {
        milliseconds = 2000;
    }

    // Hide all slides by removing 'show' class
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("show");
    }

    // Show the current slide by adding 'show' class
    slides[slideIndex].classList.add("show");

    slideIndex++;

    // Change slide after the specified time
    window.setTimeout(function(){ changeSlide(milliseconds, slideIndex); }, milliseconds);
}
var iSlide = 0;

function prev() {
    iSlide = (iSlide - 1);
    if (iSlide < 0) iSlide = 9;
    showSlide(iSlide);
}

function next() {
    iSlide = (iSlide + 1) % 10;
    showSlide(iSlide);
}

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[n].style.display = "block";
    var captionWrapper = document.getElementById("slide-caption");
    document.getElementById('slide-caption').innerHTML = captions[n];
}
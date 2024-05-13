const settings_button = document.querySelector('.gear');
const template_styles = document.querySelector('.settings');
let currentSlide = 0;
let timer;

settings_button.addEventListener('click', function(){

    template_styles.style.left = (template_styles.style.left == '0px' ? '-136px' : '0px');
});

function showButtons() {
    document.querySelectorAll("#slider button").forEach(button => {
        button.style.display = "block";
    });
}

function hideButtons() {
    document.querySelectorAll("#slider button").forEach(button => {
        button.style.display = "none";
    });
}

function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    slides.forEach(slide => {
        slide.style.display = "none";
    });
    slides[index].style.display = "block";
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % document.querySelectorAll(".slide").length;
    showSlide(currentSlide);
    resetTimer();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + document.querySelectorAll(".slide").length) % document.querySelectorAll(".slide").length;
    showSlide(currentSlide);
    resetTimer();
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(nextSlide, 5000);
}

document.addEventListener("DOMContentLoaded", function () {
    showSlide(currentSlide);
    resetTimer();
});

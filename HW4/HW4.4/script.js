let currentIndex = 0;
const lights = document.querySelectorAll('.light');

function nextColor() {
    lights[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % lights.length;
    lights[currentIndex].classList.add('active');
}
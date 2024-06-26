var modal = document.querySelector('.modal');
var openBtn = document.querySelector('.open-btn');
var closeBtn = document.querySelector('.close-btn');

openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
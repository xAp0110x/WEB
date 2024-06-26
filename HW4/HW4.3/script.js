document.querySelector('.field').addEventListener('click', function(event) {
    const field = event.target;
    const ball = document.querySelector('.ball');
    const rect = field.getBoundingClientRect();
    const ballSize = 100;

    let x = event.clientX - rect.left - ballSize / 2;
    let y = event.clientY - rect.top - ballSize / 2;

    x = Math.max(0, Math.min(x, rect.width - ballSize));
    y = Math.max(0, Math.min(y, rect.height - ballSize));

    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;
});
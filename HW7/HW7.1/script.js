document.addEventListener('DOMContentLoaded', function() {
    const hourHand = document.querySelector('.hour');
    const minuteHand = document.querySelector('.minute');
    
    const FULL_CIRCLE = 360;
    const ONE_HOUR_IN_SECONDS = 10;
    const ONE_MINUTE_IN_SECONDS = ONE_HOUR_IN_SECONDS / 60;
    const ONE_SECOND_IN_MILLISECONDS = 1000;
    
    let elapsedTime = 0;

    function updateClock() {
        elapsedTime += ONE_SECOND_IN_MILLISECONDS;

        const hours = (elapsedTime / (ONE_HOUR_IN_SECONDS * 1000)) % 12;
        const minutes = (hours * 60) % 60;

        const hourDegrees = (hours / 12) * FULL_CIRCLE;
        const minuteDegrees = (minutes / 60) * FULL_CIRCLE;

        hourHand.style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
        minuteHand.style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
    }

    setInterval(updateClock, ONE_SECOND_IN_MILLISECONDS);
});

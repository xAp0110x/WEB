const settings_button = document.querySelector('.gear');
const template_styles = document.querySelector('.settings');

settings_button.addEventListener('click', function(){

    template_styles.style.left = (template_styles.style.left == '0px' ? '-136px' : '0px');
});
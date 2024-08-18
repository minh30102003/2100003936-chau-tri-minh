// script.js

document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo');
    const btnFadeIn = document.getElementById('btnFadeIn');
    const btnFadeOut = document.getElementById('btnFadeOut');
    const btnFade = document.getElementById('btnFade');
    const btnSlideUp = document.getElementById('btnSlideUp');
    const btnSlideDown = document.getElementById('btnSlideDown');
    const btnSlide = document.getElementById('btnSlide');

    // Fade In
    btnFadeIn.addEventListener('click', () => {
        logo.classList.add('show');
    });

    // Fade Out
    btnFadeOut.addEventListener('click', () => {
        logo.classList.remove('show');
    });

    // Toggle Fade
    btnFade.addEventListener('click', () => {
        logo.classList.toggle('show');
    });

    // Slide Up
    btnSlideUp.addEventListener('click', () => {
        logo.style.transform = 'translateY(-20px)';
        logo.style.opacity = '0';
    });

    // Slide Down
    btnSlideDown.addEventListener('click', () => {
        logo.style.transform = 'translateY(0)';
        logo.style.opacity = '1';
    });

    // Toggle Slide
    btnSlide.addEventListener('click', () => {
        if (logo.style.transform === 'translateY(-20px)') {
            logo.style.transform = 'translateY(0)';
            logo.style.opacity = '1';
        } else {
            logo.style.transform = 'translateY(-20px)';
            logo.style.opacity = '0';
        }
    });
});

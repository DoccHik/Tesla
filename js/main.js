$(function() {
    $('.slider').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: 5000,
    });

    const headerOpenMenuBtn = document.querySelector('.header-btn');
    const headerContentMenu = document.querySelector('.menu');
    const headerCloseMenuBtn = document.querySelector('.close-btn');

    headerOpenMenuBtn.addEventListener('click', function() {
        headerContentMenu.classList.toggle('active')
    });

    headerCloseMenuBtn.addEventListener('click', function() {
        headerContentMenu.classList.toggle('active')
    });
});
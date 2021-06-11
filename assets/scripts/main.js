// Модальное окно
$(document).ready(function () {
    $('.nav__link--login').click(function () {
        $('.overlay').fadeIn();
    });

    $('.close-button').click(function () {
        $('.overlay').fadeOut();
    });
});
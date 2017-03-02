$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        var target = $(this.hash);

        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 900);
        }
    });
});
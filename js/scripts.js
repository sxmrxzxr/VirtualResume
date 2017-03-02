window.onload = function() {
  document.getElementById("navBar").style.display = 'none';
};

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

$(window).scroll(function() {
    if ($(document).scrollTop() > 0) {
        $("#navBar").fadeIn("slow");
    } else {
        $("#navBar").fadeOut("slow");
    }
});
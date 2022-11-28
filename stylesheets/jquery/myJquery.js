$(document).ready(function () {
    $(".navbar").click(function () {
        $('html,body').animate({
            scrollTop: $(".card-container").offset().top
        },
            'slow');
    });
});
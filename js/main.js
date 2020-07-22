$(document).ready(function () {

    $("#nav-features").click(function() {
        $('html, body').animate({
            scrollTop: $(".feature-section").offset().top
        }, 1000);
    });

    $("#nav-about").click(function() {
        $('html, body').animate({
            scrollTop: $(".about-section").offset().top
        }, 1000);
    });

    $("#nav-team").click(function() {
        $('html, body').animate({
            scrollTop: $(".team-section").offset().top
        }, 1000);
    });

    $("#nav-faq").click(function() {
        $('html, body').animate({
            scrollTop: $(".faqs-section").offset().top
        }, 1000);
    });

    $("#nav-contact").click(function() {
        $('html, body').animate({
            scrollTop: $(".contact-section").offset().top
        }, 1000);
    });

    $(".faqs-container .faq-container").click(function () {

        let index = $(this).index() + 1
        let elementParent = `.faq${index}`;

        if(!$(`${elementParent} p`).is(':visible')) {
            $(this).find("svg").css({
                "transform": "rotate(0deg)"
            });
            $(`${elementParent} p`).show();
        } else {
            $(this).find("svg").css({
                "transform": "rotate(180deg)"
            });
            $(`${elementParent} p`).hide();
        }
    })




})

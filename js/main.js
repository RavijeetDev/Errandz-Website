$(document).ready(function () {

    $("#nav-features, #small-nav-features").click(function() {
        $('#nav-toggle').prop("checked", false);
        $('html, body').animate({
            scrollTop: $(".feature-section").offset().top
        }, 1000);
    });

    $("#nav-about, #small-nav-about").click(function() {
        $('#nav-toggle').prop("checked", false);
        $('html, body').animate({
            scrollTop: $(".about-section").offset().top
        }, 1000);
    });

    $("#nav-team, #small-nav-team").click(function() {
        $('#nav-toggle').prop("checked", false);
        $('html, body').animate({
            scrollTop: $(".team-section").offset().top
        }, 1000);
    });

    $("#nav-faq, #small-nav-faqs").click(function() {
        $('#nav-toggle').prop("checked", false);
        $('html, body').animate({
            scrollTop: $(".faqs-section").offset().top
        }, 1000);
    });

    $("#nav-contact, #small-nav-contact").click(function() {
        $('#nav-toggle').prop("checked", false);
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
            $(`${elementParent} p`).slideDown("slow", function () {

            });
        } else {
            $(this).find("svg").css({
                "transform": "rotate(180deg)"
            });
            $(`${elementParent} p`).slideUp("slow", function () {

            });
        }
    })

    $(".newsletter-container button").click(function (e) {
        e.preventDefault();
    })

    $(".mobile-play-icon, .about-overlay").click(function () {
        $('.video-background-overlay').css("display", "block");
        $('.team-video').get(0).currentTime = 0;
        $('.team-video').get(0).play();
        $('html, body').css('overflow', 'hidden');
    })

    $(".video-background-overlay").click(function () {
        $('.video-background-overlay').css("display", "none");
        $('.team-video').get(0).pause();
        $('html, body').css('overflow', 'auto');
    })
})

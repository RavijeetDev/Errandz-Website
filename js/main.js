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
    // function setUpNewsletter() {
    //     document.getElementById("submit-button").addEventListener('click', () => {
    //         let email = document.getElementById("email").value;
    //         let displayMessage = document.getElementById("newsletter-message");
    //         displayMessage.value = '';
    //         if (!email) {
    //             displayMessage.innerHTML = 'Please Enter Your Email ID!';
    //         } else if (!isEmailValid(email)) {
    //             displayMessage.innerHTML = 'Please Enter Valid Email ID!';
    //         } else {
    //             document.getElementById("email").value = '';
    //             document.getElementById("dialog-modal-container").style.display = "block";
    //             document.getElementById("close-button").addEventListener('click', () => {
    //                 document.getElementById("dialog-modal-container").style.display = "none";
    //             })
    //         }
    //
    //     });
    // }


})

/*global $, jQuery, alert*/
$(function () {
    'use strict';
    // Nav
    $(".body .container > div.home").slideDown();
    $("nav ul li").on("click", function () {
        $(this).addClass("active");
        $(this).siblings("li").removeClass("active");
        
        $(".body .container > div." + $(this).attr("id")).slideDown("slow");
        $(".body .container > div." + $(this).attr("id")).siblings("div").slideUp("slow");
        // fading .team Arrows
        if(!$("nav ul li#team").hasClass("active")) {
            $(".body .team > div.change").fadeOut();
        }
        if($("nav ul li#team").hasClass("active")) {
            $(".body .team > div.change").fadeIn();
        }
        // // blog read and back button
        if(!$("nav ul li.blog").hasClass("active")) {
            $(".body .blog .event .details h4").text("قراءة »").removeClass("back")
                                           .parents(".event").removeClass("read").siblings("div.event").slideDown();
        }
        // faq removing selected question
        if(!$("nav ul li.faq").hasClass("active")) {
            $(".body .faq .question h4.selected").find("span").text("+");
            $(".body .faq .question h4").removeClass("selected")
                                        .siblings("p").fadeOut();
        }
    });
    
    // Team
    $(".body .team .member").on("mouseenter mouseleave", function () {
        $(this).find(".info").fadeToggle("slow");
    });
    var teamNu = 1;
    function changeTeam() {
        if (teamNu > 8 || teamNu === 9) {teamNu = 1;}
        if (teamNu < 1 || teamNu === 0) {teamNu = 8;}
        $(".body .team div.branch:nth-child(" + teamNu + ")").slideDown()
                                                            .siblings(".branch").slideUp();
    }
    $(".body .team .change .next").on("click", function () {
        ++teamNu
        changeTeam();
    });
    $(".body .team .change .prev").on("click", function () {
        --teamNu
        changeTeam();
    });
    
    // Blog
    $(".body .blog .event .details h4").on("click", function () {
        $(this).parents(".event").siblings("div.event").slideToggle();
        $(this).parents(".event").toggleClass("read");
        $(this).toggleClass("back");
        $(this).hasClass("back") ? $(this).text("رجوع »") : $(this).text("قراءة »");
    });

    // FAQ
    $(".body .faq .question h4").on("click", function () {
        $(this).toggleClass("selected")
               .siblings("p").fadeToggle();

        ($(this).hasClass("selected")) ? $(this).find("span").text("-") : $(this).find("span").text("+");
    });
    $(".body .faq ul li").on("click", function () {
        $(this).addClass("active")
               .siblings("li").removeClass("active");

        if ($(".body .faq ul li:first").hasClass("active")) {
            $(".body .faq > div").show("slow");
        } else {
            $(".body .faq > div." + $(this).attr("id")).show("slow")
                                                     .siblings("div").hide("slow");
        }
    });
    
});

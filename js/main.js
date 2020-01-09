$(function () {


    // Nice Scroll

    $('html').niceScroll();

    $('.carousel').carousel(
        {
            interval: 6000
        })

    // Show Tool Box When I click on it 

    $('.gear-check').on('click', function () {

        $('.color-option').toggle();
    });

    //change color of element's page 

    var colorList = $('.color-option ul li');

    colorList
        .eq(0).css("backgroundColor", "#4eb6d7").end()
        .eq(1).css("backgroundColor", "#e51414").end()
        .eq(2).css("backgroundColor", "#2edd9d").end()
        .eq(3).css("backgroundColor", "#edfa20");

    colorList.on("click", function () {

        $("link[href*='theme']").attr("href", $(this).attr("data-value"))
    });

    // Loading Screen 
    $(window).load(function () {



        // Loading Element 
        $(".loading-overly .sk-chase").fadeOut(3000, function () {
            $(this).parent().fadeOut(3000, function () {
                $(this).remove()
            })
        });
    })

    // caching variable 
    var scrollBottom = $(".scrol-top .scrol");

    // scroll top 
    $(window).scroll(function () {

        ($(this).scrollTop() >= 700) ? scrollBottom.show() : scrollBottom.hide()

    })

    $(".scrol").on("click", function () {

        $("html, body").animate({ scrollTop: 0 }, 1000)
    });
});
jQuery(function($){
    "use strict";
    var SLZ = window.SLZ || {};
    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/

    SLZ.mainFunction = function() {
        // PAGE SCROLL
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: ($($anchor.attr('href')).offset().top-60)
                }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
        // Highlight the top nav as scrolling occurs
        $('body').scrollspy({
            target: '.navbar-fixed-top',
            offset: 100
        });

        // Closes the Responsive Menu on Menu Item Click
        $('.navbar-collapse ul li a').click(function() {
            $('.navbar-toggle:visible').click();
        });

        // Offset for Main Navigation
        $('#mainNav').affix({
            offset: {
                top: 50
            }
        })

        $('.puchase-theme').affix({
            offset: {
                top: 50
            }
        })

        // WOW
        new WOW().init();
            
        // ISOTOPE
        $('.grid .image-gallery').directionalHover();
        
        if($('.grid').length){
            $('.grid').each(function(){
                var $grid = $(this).isotope({
                    itemSelector: '.grid-item',
                    layoutMode: 'masonry',
                    percentPosition: true,
                    masonry: {
                        columnWidth: '.grid-item'
                    }
                });
                // filter functions
                var filterFns = {};
                // bind filter button click
                // CHO MAT DAY, PARENT DEN 2 LAN =))))
                // dung parents
                $(this).parents('#section-portfolio').find('.tab-filter').on('click', '.tab', function () {
                    var filterValue = $(this).attr('data-filter');
                    // use filterFn if matches value
                    filterValue = filterFns[filterValue] || filterValue;
                    $grid.isotope({filter: filterValue});
                });
                $(this).parents('#section-portfolio').find('.tab-filter').each(function (i, buttonGroup) {
                    var $buttonGroup = $(buttonGroup);
                    $buttonGroup.on('click', '.tab', function () {
                        $buttonGroup.find('.active').removeClass('active');
                        $(this).addClass('active');
                    });
                });
            });
        };

        // TESTIMONIAL
        $('.testimonial-list').slick({
            dots: false,
            arrows: false,
            infinite: true,
            autoplay: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true
        })

        // MENU MOBILE
        if($(window).width() <= 767) {
            var lastScroll = 50;
            var window_height = $(window).height();
            $(window).on('scroll load', function (event) {
                var st = $(this).scrollTop();
                if (st > lastScroll) {
                    $('#mainNav').addClass("slz-hidden-menu");
                }
                else {
                    $('#mainNav').removeClass("slz-hidden-menu");
                }

                lastScroll = st;
            });
        }
        
    };

    $(document).ready(function(){
        SLZ.mainFunction();
    });
});


(function ($) {
    "use strict";

    var qcmc = {

        /* ============================================================ */
        /* PRELOADER
        /* ============================================================ */
        preloader: function(){
            $(window).on('load', function() {
                $(".preloader").fadeOut();     
            });
        },

        /* ============================================================ */
        /* Sticky Menu
        /* ============================================================ */
        sticky_menu: function() {
            var fixed_top = $("header");
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 100) {
                    fixed_top.addClass("sticky");
                } else {
                    fixed_top.removeClass("sticky");
                }
            });
        },
        /* ============================================================ */
        /* Scroll Top
        /* ============================================================ */
        scroll_to_top: function() {
            $('body').append(
                "<a href='#top' title='Scroll Top' id='scroll-top' class='topbutton btn-hide'><i class='fas fa-level-up-alt'></i></a>"
            );
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height()) {
                    $scrolltop.addClass('btn-show').removeClass('btn-hide');
                } else {
                    $scrolltop.addClass('btn-hide').removeClass('btn-show');
                }
            });
            $("a[href='#top']").on('click', function () {
                $('html, body').animate(
                    {
                        scrollTop: 0,
                    },
                    'normal'
                );
                return false;
            });
        },

        /* ============================================================ */
        /* Mobile Menu Integration
        /* ============================================================ */
        mobile_menu: function() {
            
            function mobile_menu(selector, actionSelector) {
                var mobile_menu = $(selector);
                mobile_menu.on("click", function() {
                    $(selector).toggleClass('is-menu-open');
                });
                
                var hamburgerbtn = $(selector);
                hamburgerbtn.on("click", function() {
                    $(actionSelector).toggleClass('is-menu-open');
                });
        
                $(document).on('click', function(e) {
                    var selectorType = $(actionSelector).add(mobile_menu);
                    if (selectorType.is(e.target) !== true && selectorType.has(e.target).length === 0) {
                        $(actionSelector).removeClass("is-menu-open");
                        $(selector).removeClass("is-menu-open");
                    }          
                });
            
            };
            mobile_menu('.menu-toggler, .close-menu', '.mobile-menu');  
            	
            $('.mobile-menu ul li.menu-has-children > a').on('click', function () {
                $('.mobile-menu ul li.menu-has-children .submenu').each(function() { 
                    if($(this).is(":visible")) { 
                        $(this).slideUp(); 
                    }
                }); 
                if($(this).parent('li').children('.submenu').length) {
                    if(!$(this).parent('li').children('.submenu').is(":visible")) { 
                        $(this).parent('li').children('.submenu').slideToggle();
                    }
                    return false; 
                }
            });
        },
        /* ============================================================ */
        /* Background Image
        /* ============================================================ */
        background_image: function() {
            $("[data-bg-color], [data-bg-image]").each(function() {
                var $this = $(this);               
    
                if(  $this.attr("data-bg-color") !== undefined ){                        
                    $this.css("background-color", $this.attr("data-bg-color") );
                }
                if( $this.attr("data-bg-image") !== undefined ){
                    $this.css("background-image", "url("+ $this.attr("data-bg-image") +")" );    
                    $this.css("background-size", $this.attr("data-bg-size") );
                    $this.css("background-repeat", $this.attr("data-bg-repeat") );
                    $this.css("background-position", $this.attr("data-bg-position") );
                    $this.css("background-blend-mode", $this.attr("data-bg-blend-mode") );
                }
            });
        },

        owlCarousel: function () {
            var heroCarousel = $('.hero-slider');
            if(heroCarousel.length) {            
                heroCarousel.owlCarousel({
                    autoplay: !1,
                    items: 1,
                    loop: 1,
                    dots: 1,
                    autoplaySpeed: 1000,
                    rtl: true,
                });
            };
            var sponsors_partners = $('.sponsors-partners .owl-carousel');
            if(sponsors_partners.length) {            
                sponsors_partners.owlCarousel({
                    autoplay: 1,
                    items: 3,
                    loop: 1,
                    dots: !1,
                    autoplaySpeed: 1000,
                    rtl: true,
                    margin: 30,
                    responsive: {
                        480: {
                            items: 4,
                        },
                        768: {
                            items: 5,
                            margin: 50,
                        },
                        992: {
                            items: 5,
                            margin: 80,
                        },
                        1200: {
                            items: 6,
                            margin: 100,
                        },
                    }
                });
            };
            // var prizeAxes = $('.category-item-wrapper');
            // if (prizeAxes.length) {
            //     prizeAxes.owlCarousel({
            //         autoplay: !1,
            //         items: 2,
            //         margin: 10,
            //         loop: !1,
            //         dots: !1,
            //         rtl: true,
            //         autoplaySpeed: 1000,
            //         responsive: {
            //             480: {
            //                 items: 3,
            //                 margin: 15,
            //             },
            //             768: {
            //                 items: 4,
            //                 margin: 20,
            //             },
            //             1024: {
            //                 items: 5,
            //                 margin: 20,
            //             },
            //             1200: {
            //                 items: 6,
            //                 margin: 20,
            //             },
            //         }
            //     })
            // };
            // var winner_work = $('.winner-carousel');
            // if (winner_work.length) {
            //     winner_work.owlCarousel({
            //         autoplay: 1,
            //         items: 1,
            //         margin: 15,
            //         loop: !1,
            //         dots: !1,
            //         rtl: true,
            //         autoplaySpeed: 1000,
            //         responsive: {
            //             480: {
            //                 items: 2,
            //                 margin: 10,
            //             },
            //             768: {
            //                 items: 3,
            //                 margin: 10,
            //             },
            //             992: {
            //                 items: 4,
            //                 margin: 10,
            //             },
            //             1200: {
            //                 items: 5,
            //                 margin: 15,
            //             },
            //         }
            //     })
            // };
            // var area_presented = $('.area-presented');
            // if (area_presented.length) {
            //     area_presented.owlCarousel({
            //         autoplay: 1,
            //         items: 4,
            //         margin: 10,
            //         loop: !1,
            //         dots: !1,
            //         rtl: true,
            //         autoplaySpeed: 1000,
            //     })
            // };
        },
        magnific_popup: function () {
            $('.popup').magnificPopup({
                delegate: '.zoom', // the selector for gallery item
                type: 'image',
                removalDelay: 300,
                mainClass: 'mfp-fade',
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    titleSrc: function(item) {
                        return item.el.attr('title');
                    }
               }
            });
            $('.popup-youtube').each(function() { 
                // the containers for all your galleries
                $(this).magnificPopup({
                    disableOn: 700,
                    type: 'iframe',
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: false
                });
            });   
        },
        
        
        initializ: function() {
			qcmc.preloader();
			qcmc.scroll_to_top();
			qcmc.mobile_menu();
			qcmc.background_image();
			qcmc.owlCarousel();
			qcmc.magnific_popup();
		}
    };
    $(function() {
		qcmc.initializ();
	});

})(jQuery);
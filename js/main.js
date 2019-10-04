$(document).ready(function() {
    // Sticky Navigation
    $('.js--section-home').waypoint(function(direction) {
        if (direction == 'down') {
            $('.header').hide();    
            $('.header').addClass('sticky');
            $('.header').fadeIn(300);    
        } else {
            $('.header').removeClass('sticky');
        }
      }, {
        offset: '-25%'
      });

    // Smooth Scroll
    $('a[href^="#"]').on('click',function (e) {
        // e.preventDefault();

        var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top-50
        }, 900, 'swing', function () {
        window.location.hash = target;
        });
    });

    // Navigation Button
    $('.js--nav-button').click(function() {
        $(this).toggleClass('main-nav__button--active');

        var nav = $('.js--nav-container');

        nav.slideToggle(200);
        nav.css('display', 'flex');
    });

    // On window resize
    $( window ).resize( function(){
         
        if (window.matchMedia("(min-width: 992px)").matches) {
            var nav = $('.js--nav-container');
            nav.show();
            $('.js--nav-button').removeClass('main-nav__button--active');

          } else {
            var nav = $('.js--nav-container');
            nav.hide();

            if (nav.hasClass('mob-nav')) {
                $('.js--nav-button').removeClass('main-nav__button--active');
            }
          }
    }); 

    if ($(window).width() < 992) {
        var nav = $('.js--nav-container');
        nav.hide();
        nav.addClass('mob-nav');
    } else {
        var nav = $('.js--nav-container');
        nav.show();
        nav.removeClass('mob-nav');
    }

    // hide mobile navigation when item clicked
    $('.js--nav-item').click(function() {
        var nav = $('.js--nav-container');

        if (nav.hasClass('mob-nav')) {
            nav.hide();
            $('.js--nav-button').removeClass('main-nav__button--active');
        }
    });

    /* ------------------------------- */
    /* ANIMATIONS */
    /* ------------------------------- */

    // section home
    $('.app-show__left img').on("load", function() {
        $('.app-show').css('opacity', '1');
        $('.js--animate-1').addClass('animated bounceInLeft');
        $('.js--animate-2').addClass('animated bounceInRight');
    });

    // section features
    $('.js--animate-3').waypoint(function(direction) {
        $('.js--animate-3').addClass('animated fadeIn');        
    }, {
        offset: '80%'
    });

    // section HIW
    $('.js--animate-4').waypoint(function(direction) {
        setTimeout(function(){
            $('.js--animate-4').addClass('animated heartBeat');

            setTimeout(function(){
                $('.js--animate-5').addClass('animated heartBeat');

                setTimeout(function(){
                    $('.js--animate-6').addClass('animated heartBeat');
                }, 1000); 
            }, 1000); 
        }, 1000);
    
    }, {
        offset: '80%'
    });

    // section testimonials
    $('.js--animate-7').waypoint(function(direction) {
        $('.js--animate-7').addClass('animated zoomIn');
    }, {
        offset: '80%'
    });

});
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
});
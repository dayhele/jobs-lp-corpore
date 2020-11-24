$(document).ready(function(){

    $(".owl-carousel").owlCarousel();

  });





$('.owl-carousel').owlCarousel({

    stagePadding: 3,

    loop:true,

    margin:18,

    center: true,

    autoplay: true,

    autoplayTimeout:3000,

    autoplayHoverPause:false,

    responsive:{

        0:{

            items:1

        },

        600:{

            items:3

        },

        1000:{

            items:3

        }

    }

})

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    responsiveClass: true,
    stagePadding: 23,
    margin: 25,
    loop: true,
    responsive: {
      150: {
        items: 1,
      },
      250: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 3,
      }
    }
  });
});
$(document).ready(function (e) {
  $('.nav-toggle').click(function (event) {
    event.preventDefault();
    var nav = $('.left-navbar')
    $(this).toggleClass('active');
    nav.toggleClass('active');
  });

  $('#home').hover(function () {
    console.log("hi2");
    $('#shop').hide();
    $('#shop').removeClass('d-flex');
    $('#services').hide();
    $('#services').removeClass('d-flex');
  });
  $('#blog').hover(function () {
    console.log("hi2");
    $('#shop').hide();
    $('#shop').removeClass('d-flex');
    $('#services').hide();
    $('#services').removeClass('d-flex');
  });
  $('#gallery').hover(function () {
    console.log("hi2");
    $('#shop').hide();
    $('#shop').removeClass('d-flex');
    $('#services').hide();
    $('#services').removeClass('d-flex');
  });
  $('#shopDropdown').hover(function () {
    console.log("hi");
    $('#shop').addClass('d-flex');
    $('#shop').hover(function () {
    }, function () {
      $('#shop').hide();
      $('#shop').removeClass('d-flex');
    })
  });
  

  $('#servicesDropdown').hover(function () {
    console.log("hi");
    $('#services').addClass('d-flex');
    $('#services').hover(function () {
    }, function () {
      $('#services').hide();
      $('#services').removeClass('d-flex');
    })
  })

});

// Lightbox 
$(document).ready(function () {
  "use strict";
  $(".lightbox").click(function () {
      var imgsrc = $(this).attr('src');
      $("body").append("<div class='img-popup'><span class='close-lightbox'>&times;</span><img src='" + imgsrc + "'></div>");
      $(".close-lightbox, .img-popup").click(function () {
          $(".img-popup").fadeOut(500, function () {
              $(this).remove();
          }).addClass("lightboxfadeout");
      });

  });
  $(".lightbox").click(function () {
      $(".img-popup").fadeIn(500);
  });

});

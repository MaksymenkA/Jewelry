// const $dropdown = $(".dropdown");
// const $dropdownToggle = $(".dropdown-toggle");
// const $dropdownMenu = $(".dropdown-menu");
// const showClass = "show";

// $(window).on("load resize", function() {
//   if (this.matchMedia("(min-width: 768px)").matches) {
//     $dropdown.hover(
//       function() {
//         const $this = $(this);
//         $this.addClass(showClass);
//         $this.find($dropdownToggle).attr("aria-expanded", "true");
//         $this.find($dropdownMenu).addClass(showClass);
//       },
//       function() {
//         const $this = $(this);
//         $this.removeClass(showClass);
//         $this.find($dropdownToggle).attr("aria-expanded", "false");
//         $this.find($dropdownMenu).removeClass(showClass);
//       }
//     );
//   } else {
//     $dropdown.off("mouseenter mouseleave");
//   }
// });

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
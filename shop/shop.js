$(document).ready(function() {

    const $valueSpan = $('.valueSpan');
    const $value = $('#slider11');
    $valueSpan.html($value.val());
    $value.on('input change', () => {
  
      $valueSpan.html($value.val());
    });
  });

  range.addEventListener("input", () => {
    bubble.innerHTML = rangel.value;
  });
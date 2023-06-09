$(document).ready(function () {
  let amenityIds = [];
  let amenityNames = [];
  $('input[type="checkbox"]').change(function () {
    const amenityId = $(this).attr('data-id');
    const name = $(this).attr('data-name');
    if ($(this).is(':checked')) {
      amenityIds.push(amenityId);
      amenityNames.push(name);
    } else {
      amenityIds = amenityIds.filter((id) => id !== amenityId);
      amenityNames = amenityNames.filter((amenityName) => amenityName !== name);
    }
    $('DIV.amenities h4').text(amenityNames.join(', '));
  });

  $.get('http://0.0.0.0:5001/api/v1/status/', function (response) {
    if (response.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });
});
